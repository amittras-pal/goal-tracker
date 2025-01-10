import { Box, Button } from "@mantine/core";
import dayjs from "dayjs";
import { ChangeEventHandler, useRef } from "react";
import { GoalConfig, useGoals } from "../../context/context";

export default function ImportExport() {
  const { goals, saveGoals } = useGoals();

  const fileInput = useRef<HTMLInputElement>(null);

  const exportData = () => {
    const buffer = [JSON.stringify({ goals, exported: dayjs().toISOString() })];
    const blob = new Blob(buffer, { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Goals.json`;
    a.click();
    URL.revokeObjectURL(url);
    a.remove();
  };

  const handleImport: ChangeEventHandler<HTMLInputElement> = (event) => {
    const reader = new FileReader();
    const file = event.target.files?.[0];
    if (file) {
      reader.readAsText(file);
      reader.onload = () => {
        if (reader.result && typeof reader.result === "string") {
          const content = JSON.parse(reader.result);
          saveGoals(content.goals as GoalConfig[]);
        }
      };
    }
  };

  return (
    <Box ms='auto'>
      {!goals.length ? (
        <Button size="xs" onClick={() => fileInput.current?.click()}>Import Goals</Button>
      ) : (
        <Button size="xs" onClick={exportData}>Export Goals</Button>
      )}
      <input
        type="file"
        accept="application/json"
        style={{ display: "none" }}
        ref={fileInput}
        onChange={handleImport}
      />
    </Box>
  );
}
