import { Alert, Button, Divider, Flex, Indicator, MantineTheme, Text } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import dayjs from "dayjs";
import { Entry, GoalConfig, useGoals } from "../../context/context";
import { useState } from "react";
import EntryForm from "./EntryForm";

export default function Entries(props: { data: GoalConfig }) {
  const [selected, setSelected] = useState<Entry | null>(null);
  const [showForm, setShowForm] = useState(false);

  const { deleteEntry } = useGoals();

  const getDayColor = (theme: MantineTheme, daysEntry?: Entry) => {
    if(!daysEntry) return 'transparent';
    if(selected && selected.id == daysEntry.id) return theme.colors.green[8];
    else return theme.colors.indigo[8]

  }

  return (
    <Flex direction="column" align="center" gap="md">
      <Calendar
        minDate={dayjs().startOf("year").toDate()}
        maxDate={dayjs().toDate()}
        style={(theme) => ({
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
      <Text fz="sm">
        Total Entries So Far:{" "}
        <Text component="span" fw="bold">
          {props.data.entries?.length ?? 0}
        </Text>
      </Text>
      {selected && (
        <Alert
          variant="light"
          color="indigo"
          style={{ width: "100%" }}
          withCloseButton
          onClose={() => setSelected(null)}
          title={`Entry for ${dayjs(selected.date).format("DD MMM")}`}
        >
          {selected.notes || "--- No Notes ---"}
          <Divider my="xs" />
          {!showForm ? (
            <Flex gap="sm" justify="flex-end">
              <Button
                size="xs"
                variant="outline"
                onClick={() => setShowForm(true)}
              >
                Edit Entry
              </Button>
              <Button
                size="xs"
                color="red"
                onClick={() => {
                  deleteEntry(props.data.id ?? "", selected.id ?? "");
                  setSelected(null);
                }}
              >
                Delete Entry
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
