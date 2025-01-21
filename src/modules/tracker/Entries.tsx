import { Alert, Flex, Indicator, Text } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import dayjs from "dayjs";
import { Entry, GoalConfig } from "../../context/context";
import { useState } from "react";
import { IconInfoCircle } from "@tabler/icons-react";

export default function Entries(props: { data: GoalConfig }) {
  const [entry, setEntry] = useState<Entry | null>(null);
  return (
    <Flex direction="column" align="center" gap="md">
      <Calendar
        style={(theme) => ({
          border: `1px solid ${theme.colors.gray[7]}`,
          padding: theme.spacing.xs,
          borderRadius: theme.radius.md,
        })}
        getDayProps={(calendarDay) => {
          const entry = props.data.entries?.find((item) =>
            dayjs(item.date).isSame(calendarDay, "day")
          );
          return {
            style: (theme) => ({
              backgroundColor: entry ? theme.colors.indigo[8] : "transparent",
              color: theme.white,
            }),
            onClick: () => {
              if (entry?.notes) setEntry(entry);
              else setEntry(null);
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
      {entry && (
        <Alert
          variant="light"
          color="indigo"
          withCloseButton
          onClose={() => setEntry(null)}
          title={`Notes for ${dayjs(entry.date).format('DD MMM')}`}
          icon={<IconInfoCircle />}
        >
          {entry.notes}
        </Alert>
      )}
    </Flex>
  );
}
