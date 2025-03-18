import {
  Button,
  Group,
  Modal,
  Progress,
  Text
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useMemo, useState } from "react";
import { GoalConfig } from "../../context/context";
import Entries from "./Entries";
import EntryForm from "./EntryForm";

export default function GoalStatus({ data }: { data: GoalConfig }) {
  const [showForm, setShowForm] = useState(false);
  const [show, { toggle }] = useDisclosure();

  const completion = useMemo(() => {
    return ((data.entries?.length ?? 0) / data.target) * 100;
  }, [data.entries?.length, data.target]);

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
        <EntryForm goal={data} onClose={() => setShowForm(false)} />
      )}

      <Modal
        opened={show}
        fullScreen
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
