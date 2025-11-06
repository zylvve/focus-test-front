export const TaskStatus = { 
    PENDING: 'pending',
    IN_PROGRESS: 'in_progress',
    DONE: 'done',
}

type TaskStatusType = typeof TaskStatus[keyof typeof TaskStatus];

export type Task = {
    id: number,
    title: string,
    description: string | null,
    status: TaskStatusType,
}