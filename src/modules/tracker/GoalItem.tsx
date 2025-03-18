import { Badge, Box, Text } from "@mantine/core";
import { PropsWithChildren } from "react";
import { GoalConfig } from "../../context/context";
import dayjs from "dayjs";

export default function GoalItem(
  props: PropsWithChildren & { goal: GoalConfig, index: number }
) {
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
      <Text fw="bold">
        {props.index}. {props.goal.title}{" "}
        {props.goal.type === "single" && props.goal.completed && (
          <Badge variant="dot" color="green" component="span">
            Completed On: {dayjs(props.goal.completedOn).format("MMM DD")}
          </Badge>
        )}
      </Text>
      <Text fz="sm" c="dimmed" fs="italic">
        {props.goal.description}
      </Text>
      {props.children}
    </Box>
  );
}
