import {
  Alert,
  Button,
  Divider,
  Flex,
  Indicator,
  MantineTheme,
  Text,
} from "@mantine/core";
import { Calendar } from "@mantine/dates";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { Entry, GoalConfig, useGoals } from "../../context/context";
import EntryForm from "./EntryForm";

export default function Entries(props: { data: GoalConfig }) {
  const [selected, setSelected] = useState<Entry | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [month, setMonth] = useState(0);

  const { deleteEntry } = useGoals();

  const getDayColor = (theme: MantineTheme, daysEntry?: Entry) => {
    if (!daysEntry) return "transparent";
    if (selected && selected.id == daysEntry.id) return theme.colors.green[8];
    else return theme.colors.indigo[8];
  };

  const handleMonthChange = (e: Date) => {
    setMonth(dayjs(e).month());
  };

  const entriesThisMonth = useMemo(() => {
    return (
      props.data.entries?.filter((ent) => dayjs(ent.date).month() === month)
        .length ?? 0
    );
  }, [month, props.data.entries]);

  return (
    <Flex direction="column" align="center" gap={"4px"}>
      <Calendar
        minDate={dayjs().startOf("year").toDate()}
        maxDate={dayjs().toDate()}
        onNextMonth={handleMonthChange}
        onPreviousMonth={handleMonthChange}
        onMonthSelect={handleMonthChange}
        styles={{ levelsGroup: { justifyContent: "center" } }}
        style={(theme) => ({
          width: "100%",
          border: `1px solid ${theme.colors.gray[7]}`,
          padding: theme.spacing.xs,
          borderRadius: theme.radius.md,
        })}
        getDayProps={(calendarDay) => {
          const thisDateEntry = props.data.entries?.find((item) =>
            dayjs(item.date).isSame(calendarDay, "day")
          );
          return {
            disabled: !thisDateEntry,
            style: (theme) => ({
              backgroundColor: getDayColor(theme, thisDateEntry),
              color: theme.white,
            }),
            onClick: () => {
              if (thisDateEntry) setSelected(thisDateEntry);
              else setSelected(null);
            },
          };
        }}
        renderDay={(calendarDay) => {
          const entry = props.data.entries?.find((item) =>
            dayjs(item.date).isSame(calendarDay, "day")
          );
          return (
            <Indicator
              size={10}
              withBorder
              position="top-end"
              color="red"
              offset={-5}
              disabled={!entry?.notes}
            >
              <div>{dayjs(calendarDay).date()}</div>
            </Indicator>
          );
        }}
      />
      <Flex gap={"4px"} justify="space-between" style={{ width: "100%" }}>
        <Text fz="sm">
          Total Entries:{" "}
          <Text component="span" fw="bold">
            {props.data.entries?.length ?? 0}
          </Text>
        </Text>
        <Text fz="sm">
          Entries in {dayjs().set("month", month).format("MMMM")}:{" "}
          <Text component="span" fw="bold">
            {entriesThisMonth}
          </Text>
        </Text>
      </Flex>
      {selected && (
        <Alert
          variant="light"
          color="indigo"
          style={{ width: "100%" }}
          withCloseButton={false}
          title={`Entry for ${dayjs(selected.date).format("DD MMM")}`}
        >
          {selected.notes || "--- No Notes ---"}
          <Divider my="xs" />
          {!showForm ? (
            <Flex gap="sm">
              <Button
                size="xs"
                mr="auto"
                variant="light"
                color="red"
                onClick={() => setSelected(null)}
              >
                Close
              </Button>
              <Button size="xs" onClick={() => setShowForm(true)}>
                Edit
              </Button>
              <Button
                size="xs"
                color="red"
                variant="outline"
                onClick={() => {
                  deleteEntry(props.data.id ?? "", selected.id ?? "");
                  setSelected(null);
                }}
              >
                Delete
              </Button>
            </Flex>
          ) : (
            <EntryForm
              goal={props.data}
              onClose={() => setShowForm(false)}
              entryId={selected.id}
            />
          )}
        </Alert>
      )}
    </Flex>
  );
}
