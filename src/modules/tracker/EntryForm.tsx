import { Box, Button, Group, Textarea } from "@mantine/core";
import { GoalConfig, useGoals } from "../../context/context";
import { DateInput } from "@mantine/dates";
import { SubmitHandler, useForm } from "react-hook-form";
import dayjs from "dayjs";
import { useMemo } from "react";

export default function EntryForm(props: {
  entryId?: string;
  goal: GoalConfig;
  onClose: () => void;
}) {
  const selectedEntry = useMemo(() => {
    if (props.entryId)
      return props.goal.entries?.find((e) => e.id === props.entryId);
    else return null;
  }, [props.entryId, props.goal.entries]);

  const { register, setValue, watch, handleSubmit, reset } = useForm({
    defaultValues: {
      date: dayjs(selectedEntry?.date).toDate(),
      notes: selectedEntry?.notes ?? "",
    },
  });

  const { updateEntries } = useGoals();

  const saveEntry: SubmitHandler<{ date: Date; notes: string }> = (
    fieldValues
  ) => {
    updateEntries(props.goal.id ?? "", {
      date: fieldValues.date.toISOString(),
      notes: fieldValues.notes,
      id: props.entryId,
    });
    reset();
    props.onClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(saveEntry)}>
      <DateInput
        name="date"
        value={watch("date")}
        onChange={(date) => setValue("date", date as Date)}
        maxDate={dayjs().toDate()}
        minDate={dayjs().startOf("year").toDate()}
        label="Entry Date"
        placeholder="Entry Date"
        withAsterisk
        clearable
        mb="sm"
      />
      <Textarea
        {...register("notes")}
        mb="sm"
        label="Notes"
        placeholder="Notes"
        autoFocus
        rows={6}
      />
      <Group justify="flex-end" gap="sm">
        <Button color="red" size="xs" onClick={props.onClose}>
          Cancel
        </Button>
        <Button size="xs" type="submit">
          Save
        </Button>
      </Group>
    </Box>
  );
}
