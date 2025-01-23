import { PropsWithChildren, useEffect, useState } from "react";
import { Entry, GoalConfig, GoalContext } from "./context";
import dayjs from "dayjs";
import { v4 } from "uuid";
import { getData, initDB, Stores, writeToDB } from "./database";

export default function GoalProvider({ children }: PropsWithChildren) {
  const [goals, setGoals] = useState<GoalConfig[]>([]);

  useEffect(() => {
    (async () => {
      try {
        await initDB();
        await getData(Stores.Goals).then((res) => {
          if (res.length > 0 && Array.isArray(res)) setGoals(res);
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const writeToDisk = async (data: GoalConfig[]) => {
    await writeToDB(Stores.Goals, data);
  };

  const saveGoals = (goals: GoalConfig[]) => {
    const updatedGoals = goals.map((g) => ({
      ...g,
      createdOn: dayjs().toISOString(),
      id: g.id || v4().split("-").at(-1),
    }));
    setGoals(updatedGoals);
    writeToDisk(updatedGoals);
  };

  const updateEntries = (gid: string, entry: Entry) => {
    const updatedGoals = goals.map((g) => {
      if (g.id === gid) {
        if (!entry.id)
          return {
            ...g,
            entries: [
              ...(g.entries || []),
              { ...entry, id: v4().split("-").at(-1)! },
            ],
          };
        else {
          const index = g.entries?.findIndex((e) => e.id === entry.id) ?? -1;
          if (index > -1) {
            g.entries![index].date = entry.date;
            g.entries![index].notes = entry.notes;
          }
          return g;
        }
      }
      return g;
    });
    setGoals(updatedGoals);
    writeToDisk(updatedGoals);
  };

  const deleteEntry = (gid: string, entryId: string) => {
    const gidx = goals.findIndex((g) => g.id === gid);
    if (gidx > -1)
      goals[gidx].entries =
        goals[gidx].entries?.filter((entry) => entry.id !== entryId) ?? [];

    setGoals(goals);
    writeToDisk(goals);
  };

  const updateStatusForSingleGoal = (gid: string, completed: boolean) => {
    const updatedGoals = goals.map((item) => {
      return item.id === gid
        ? {
            ...item,
            completed,
            completedOn: completed ? dayjs().toISOString() : null,
          }
        : item;
    });
    setGoals(updatedGoals);
    writeToDisk(updatedGoals);
  };

  return (
    <GoalContext.Provider
      value={{
        goals,
        saveGoals,
        updateEntries,
        updateStatusForSingleGoal,
        deleteEntry,
      }}
    >
      {children}
    </GoalContext.Provider>
  );
}
