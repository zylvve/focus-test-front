import TaskListHeader from "./TaskListHeader"
import TaskListRow from "./TaskListRow"
import styles from "./TaskList.module.css"
import { useContext } from "react"
import { FilterStatus } from "../../types/filterStatus"
import type { Task } from "../../types/task"
import { FilterStatusContext } from "../FilterStatusContext"

type TaskListProps = {
    isPending: boolean,
    error: Error | null,
    tasks: Task[],
}

function TaskList({isPending, error, tasks}: TaskListProps) {        
    const context = useContext(FilterStatusContext);
    if (context === null) throw new Error('Context error');
    const { filterStatus } = context;

    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className={styles.task_list}>
            <TaskListHeader/>
            {tasks
                .filter((t: Task) => filterStatus === FilterStatus.ALL || filterStatus === t.status)
                .sort((t1: Task, t2: Task) => t2.id - t1.id)
                .map((t: Task) => (
                    <TaskListRow key={t.id} id={t.id} title={t.title} description={t.description} status={t.status}/>
                )
            )}
        </div>
    );

}

export default TaskList