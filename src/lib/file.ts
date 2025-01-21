import { GoalConfig } from "../context/context";

export async function createDigest(content: string) {
  const hashBuffer = await window.crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(content)
  );
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function downloadFile(goals: GoalConfig[], hash: string) {
  const blob = new Blob([JSON.stringify(goals)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Export-${hash}.json`;
  a.click();
  URL.revokeObjectURL(url);
  a.remove();
}