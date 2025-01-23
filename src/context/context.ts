import { createContext, useContext } from "react";

export type GoalType = 'single' | 'calendar';
export type Entry = {
    date: string,
    notes: string,
    id?: string
}

export type GoalConfig = {
    type: GoalType,
    title: string,
    description?: string,
    target: number,
    createdOn?: string,
    id?: string,
    entries?: Entry[],
    completed?: boolean,
    completedOn?: string | null,
}


export type GoalContextType = {
    goals: GoalConfig[],
    saveGoals: (goals: GoalConfig[]) => void,
    updateEntries: (gid: string, entry: Entry) => void
    updateStatusForSingleGoal: (gid: string, status: boolean) => void;
    deleteEntry: (gid: string, entryId: string) => void;
}

export const GoalContext = createContext<GoalContextType>({
    goals: [],
    saveGoals: () => { },
    updateEntries: () => { },
    updateStatusForSingleGoal: () => { },
    deleteEntry: () => { }
});

export const useGoals = () => useContext(GoalContext);