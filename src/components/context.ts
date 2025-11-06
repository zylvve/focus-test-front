import { createContext } from "react";
import type { FilterStatusType } from "../types/filterStatus";
import type { Task } from "../types/task";

interface FilterStatusContextType {
    filterStatus: FilterStatusType;
    setFilterStatus: (status: FilterStatusType) => void;
}
export const FilterStatusContext = createContext<FilterStatusContextType | null>(null);

interface TasksContextType {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
}
export const TasksContext = createContext<TasksContextType | null>(null);