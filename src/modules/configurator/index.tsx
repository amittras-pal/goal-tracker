import {
  Box,
  Button,
  Group,
  Radio,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useFieldArray, useForm } from "react-hook-form";
import { GoalType, useGoals } from "../../context/context";
import { useEffect } from "react";
import dayjs from "dayjs";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";

export default function Configurator() {
  const { saveGoals: updateGoals, goals } = useGoals();

  const navigate = useNavigate();

  const { register, control, getValues, setValue, handleSubmit, watch } =
    useForm({
      defaultValues: { goals },
    });

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "goals",
  });

  useEffect(() => {
    if (goals?.length) setValue("goals", goals);
  }, [goals, setValue]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit((e) => {
        updateGoals(e.goals);
        notifications.show({
          title: "Goals Saved",
          message: "Your goals have been updated.",
          color: "green",
        });
        navigate("/tracker");
      })}
    >
      {fields.map((field, index) => {
        const blocked = !field.createdOn
          ? false
          : dayjs().diff(field.createdOn, "day") > 0;

        return (
          <Box
            key={field.id}
            style={(theme) => ({
              padding: theme.spacing.sm,
              marginBottom: theme.spacing.md,
              borderRadius: theme.radius.sm,
              backgroundColor: theme.colors.dark[6],
            })}
          >
            {blocked && (
              <Text mb="sm" c="red" fz="sm">
                Goals which were created more than 1 day ago can only get their
                description changed.
              </Text>
            )}
            <TextInput
              withAsterisk
              placeholder="Goal Title"
              mb="sm"
              label="Goal Title"
              {...register(`goals.${index}.title`)}
              disabled={blocked}
            />
            <Textarea
              {...register(`goals.${index}.description`)}
              label="Description"
              placeholder="Description"
              rows={6}
            />
            <Radio.Group
              name={`goals.${index}.type`}
              value={watch(`goals.${index}.type`)}
              onChange={(value) => {
                update(index, {
                  ...getValues(`goals.${index}`),
                  type: value as GoalType,
                });
              }}
              label="Goal Type"
              defaultValue="single"
              withAsterisk
            >
              <Group mt="xs">
                <Radio value="single" label="Single Event" disabled={blocked} />
                <Radio
                  value="calendar"
                  label="Calendar Tracker"
                  disabled={blocked}
                />
              </Group>
            </Radio.Group>
            {watch(`goals.${index}.type`) === "calendar" && (
              <TextInput
                type="number"
                withAsterisk
                mt="sm"
                label="Target"
                placeholder="target"
                description="Specify how many times you want to complete this goal in the year."
                {...register(`goals.${index}.target`)}
              />
            )}
            {!blocked && (
              <Group mt="sm" justify="flex-end">
                <Button color="red" onClick={() => remove(index)}>
                  Remove Goal
                </Button>
              </Group>
            )}
          </Box>
        );
      })}
      <Group justify="space-between">
        <Button
          onClick={() =>
            append({ title: "", type: "single", target: 0, description: "" })
          }
        >
          Add Goal
        </Button>
        {watch("goals")?.length > 0 && <Button type="submit">Save</Button>}
      </Group>
    </Box>
  );
}
