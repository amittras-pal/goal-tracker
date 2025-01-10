import { PropsWithChildren, useEffect, useState } from "react";
import { Entry, GoalConfig, GoalContext } from "./context";
import dayjs from "dayjs";
import { v4 } from "uuid";
import { getData, initDB, Stores, writeToDB } from "./database";

export default function GoalProvider({ children }: PropsWithChildren) {
  const [goals, setGoals] = useState<GoalConfig[]>([]);

  useEffect(() => {
    (async () => {
      await initDB();
      await getData(Stores.Goals).then(res => {
        if(res.length > 0 && Array.isArray(res)) setGoals(res);
      })
    })();
  }, []);

  const updateDB = async (data: GoalConfig[]) => {
    await writeToDB(Stores.Goals, data);
  };

  const saveGoals = (goals: GoalConfig[]) => {
    const updatedGoals = goals.map((g) => ({
      ...g,
      createdOn: dayjs().toISOString(),
      id: g.id || v4().split("-").at(-1),
    }));
    setGoals(updatedGoals);
    updateDB(updatedGoals);
  };

  const addEntry = (gid: string, entry: Entry) => {
    const updatedGoals = goals.map((g) => {
      if (g.id === gid) {
        return {
          ...g,
          entries: [...(g.entries || []), {...entry, id: v4().split("-").at(-1)!}],
        };
      }
      return g;
    });

    setGoals(updatedGoals);
    updateDB(updatedGoals);
  };

  const updateStatusForSingleGoal = (gid: string, completed: boolean) => {
    const updatedGoals = goals.map((item) => {
      return item.id === gid ? { ...item, completed } : item;
    });
    setGoals(updatedGoals);
    updateDB(updatedGoals);
  };

  return (
    <GoalContext.Provider
      value={{ goals, saveGoals, addEntry, updateStatusForSingleGoal }}
    >
      {children}
    </GoalContext.Provider>
  );
}
