import { Box, Button, Divider, Text } from "@mantine/core";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { GoalConfig, useGoals } from "../../context/context";
import GoalItem from "./GoalItem";
import GoalStatus from "./GoalStatus";

export default function Tracker() {
  const { goals, updateStatusForSingleGoal } = useGoals();

  const collections = useMemo(() => {
    if (!goals.length) return null;
    const single: GoalConfig[] = [];
    const calendar: GoalConfig[] = [];
    
    goals.forEach((goal) => {
      if (goal.type === "single") single.push(goal);
      else calendar.push(goal);
    });

    return { single, calendar };
  }, [goals]);

  return (
    <Box>
      {!collections ? (
        <Text ta="center">
          No Goals are set, please use the{" "}
          <Text component={Link} to="/configurator" c="indigo" td="underline">
            configurator
          </Text>{" "}
          to set your goals. Or{" "}
          <Text component={Link} to="/io" c="indigo" td="underline">
            import your goals{" "}
          </Text>
          from an exported file.
        </Text>
      ) : (
        <>
          <Divider
            variant="dashed"
            label={`Calendar Trackers (${collections.calendar.length})`}
            mb="xs"
          />
          {collections.calendar.map((goal, index) => (
            <GoalItem key={goal.id} goal={goal} index={index + 1}>
              <GoalStatus data={goal} />
            </GoalItem>
          ))}
          <Divider
            variant="dashed"
            label={`Single Events (${collections.single.length})`}
            mb="xs"
          />
          {collections.single.map((goal, index) => (
            <GoalItem key={goal.id} goal={goal} index={index + 1}>
              <Button
                size="xs"
                mt="xs"
                color={goal.completed ? "red" : "indigo"}
                variant={goal.completed ? "outline" : "filled"}
                onClick={() =>
                  updateStatusForSingleGoal(goal.id ?? "", !goal.completed)
                }
              >
                {goal.completed ? "Mark Incomplete" : "Mark Completed"}
              </Button>
            </GoalItem>
          ))}
        </>
      )}
    </Box>
  );
}
