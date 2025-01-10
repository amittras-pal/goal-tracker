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
    description?:string,
    target: number,
    createdOn?: string,
    id?: string,
    entries?: Entry[],
    completed?: boolean
}


export type GoalContextType = {
    goals: GoalConfig[],
    saveGoals: (goals: GoalConfig[]) => void,
    addEntry: (gid: string, entry: Entry) => void
    updateStatusForSingleGoal: (gid: string, status: boolean) => void;
}

export const GoalContext = createContext<GoalContextType>({
    goals: [],
    saveGoals: () => { },
    addEntry: () => { },
    updateStatusForSingleGoal: () => { }
});

export const useGoals = () => useContext(GoalContext);