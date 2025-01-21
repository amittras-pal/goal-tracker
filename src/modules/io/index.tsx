import { Alert, Box, Button, FileInput, Flex, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { GoalConfig, useGoals } from "../../context/context";
import {
  EXPORT_NOTICE,
  FILE_CONTENT_ERROR,
  FILE_NAME_ERROR,
} from "../../lib/constants";
import { createDigest, downloadFile } from "../../lib/file";

export default function IOSync() {
  const { goals, saveGoals } = useGoals();

  const [showImport, setShowImport] = useState(false);

  const exportData = async () => {
    const hash = await createDigest(JSON.stringify(goals));
    downloadFile(goals, hash);
    notifications.show({
      title: "File Exported",
      message: EXPORT_NOTICE,
      color: "yellow",
    });
  };

  const handleImport = (file: File | null) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsText(file);
      reader.onload = async () => {
        if (reader.result && typeof reader.result === "string") {
          const challenge = file.name.split("-").at(-1)?.replace(".json", "");
          if (!/^[0-9a-f]{64}$/.test(challenge ?? "")) {
            notifications.show({
              title: "File Name Modified",
              color: "red",
              message: FILE_NAME_ERROR,
              autoClose: 10000,
            });
            return;
          }

          const integrity = await createDigest(reader.result);
          if (challenge !== integrity) {
            notifications.show({
              title: "File Modified or Renamed",
              color: "red",
              autoClose: 7500,
              message: FILE_CONTENT_ERROR,
            });
            return;
          }

          // return;
          saveGoals([]);
          const content = JSON.parse(reader.result) as GoalConfig[];
          saveGoals(JSON.parse(reader.result) as GoalConfig[]);
          notifications.show({
            title: `${content.length} Goals Imported.`,
            message: "Your goals from file have been imported successfully.",
            color: "green",
          });
          setShowImport(false);
        }
      };
    }
  };

  return (
    <Box ms="auto">
      {!showImport && (
        <Flex gap="sm">
          {goals.length > 0 && (
            <Button size="xs" onClick={exportData}>
              Export Goals
            </Button>
          )}
          <Button size="xs" onClick={() => setShowImport(true)}>
            Import Goals
          </Button>
        </Flex>
      )}
      {showImport && (
        <Alert
          color="indigo"
          radius="md"
          title="Import Goals"
          withCloseButton
          onClose={() => setShowImport(false)}
        >
          <FileInput
            label="Select Goals File"
            description="Select the file you exported from your other device."
            placeholder="Select Goals File"
            onChange={handleImport}
          />
          <Text mt="md" c="red">
            Please note that importing goals from file will replace any goals
            you already had created in the system. This action cannot be undone.
          </Text>
        </Alert>
      )}
    </Box>
  );
}
