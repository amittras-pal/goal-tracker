import { Box, Text } from "@mantine/core";
import { PropsWithChildren } from "react";
import { GoalConfig } from "../../context/context";

export default function GoalItem(props: PropsWithChildren & { goal: GoalConfig }) {
  return (
    <Box
      key={props.goal.id}
      style={(theme) => ({
        padding: theme.spacing.xs,
        backgroundColor: theme.colors.dark[6],
        marginBottom: theme.spacing.sm,
        borderRadius: theme.radius.md,
      })}
    >
      <Text fw="bold">{props.goal.title}</Text>
      <Text fz="sm" c="dimmed" fs="italic">
        {props.goal.description}
      </Text>
      {props.children}
    </Box>
  );
}
