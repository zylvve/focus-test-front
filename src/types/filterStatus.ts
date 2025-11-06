import { TaskStatus } from "./task";

export const FilterStatus = {
    ALL: 'all',
    ...TaskStatus, 
} as const;


export type FilterStatusType = typeof FilterStatus[keyof typeof FilterStatus];