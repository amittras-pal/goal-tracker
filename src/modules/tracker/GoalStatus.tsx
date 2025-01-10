import {
  Box,
  Button,
  Group,
  Modal,
  Progress,
  Text,
  Textarea,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { GoalConfig, useGoals } from "../../context/context";
import Entries from "./Entries";
import { useDisclosure } from "@mantine/hooks";

export default function GoalStatus({ data }: { data: GoalConfig }) {
  const [showForm, setShowForm] = useState(false);
  const [show, { toggle }] = useDisclosure();
  const { addEntry } = useGoals();

  const { register, setValue, watch, handleSubmit, reset } = useForm({
    defaultValues: {
      date: dayjs().toDate(),
      notes: "",
    },
  });

  const saveEntry: SubmitHandler<{ date: Date; notes: string }> = (
    fieldValues
  ) => {
    addEntry(data.id ?? "", {
      date: fieldValues.date.toISOString(),
      notes: fieldValues.notes,
    });
    setShowForm(false);
    reset();
  };

  const completion = useMemo(() => {
    return ((data.entries?.length ?? 0) / data.target) * 100;
  }, [data]);

  return (
    <>
      {!showForm ? (
        <>
          <Progress size="xs" mt="xs" value={completion} />
          <Group mt="xs" gap="xs">
            <Text fz="sm" c="dimmed">
              {data.entries?.length ?? 0}/{data.target} ({completion.toFixed(2)}
              %)
            </Text>
            <Group ms="auto">
              {(data.entries?.length ?? 0) > 0 && (
                <Button size="xs" variant="light" onClick={toggle}>
                  View Entries
                </Button>
              )}
              <Button size="xs" onClick={() => setShowForm((v) => !v)}>
                Add Entry
              </Button>
            </Group>
          </Group>
        </>
      ) : (
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
            <Button
              color="red"
              size="xs"
              onClick={() => setShowForm((v) => !v)}
            >
              Cancel
            </Button>
            <Button size="xs" type="submit">
              Save
            </Button>
          </Group>
        </Box>
      )}

      <Modal
        opened={show}
        centered
        withCloseButton
        onClose={toggle}
        title={`Entries for "${data.title}"`}
      >
        <Entries data={data} />
      </Modal>
    </>
  );
}
