import { Box, Text } from "@mantine/core";
import { GoalConfig } from "../../context/context";
import dayjs from "dayjs";

export default function Entries(props: { data: GoalConfig }) {
  return (
    <>
      {(props.data.entries?.length ?? 0) > 0 ? (
        props.data.entries?.map((entry) => (
          <Box
            key={entry.id}
            style={(theme) => ({
              padding: theme.spacing.xs,
              backgroundColor: theme.colors.dark[6],
              marginBottom: theme.spacing.sm,
              borderRadius: theme.radius.sm,
            })}
          >
            <Text>Added on {dayjs(entry.date).format("MMMM DD")}</Text>
            <Text fz="sm" c="dimmed" fs="italic">
              {entry.notes}
            </Text>
          </Box>
        ))
      ) : (
        <Text fs="italic" c="red">
          No Entries added in this goal yet!!
        </Text>
      )}
    </>
  );
}
