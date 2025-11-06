import TaskListHeader from "./TaskListHeader"
import TaskListRow from "./TaskListRow"
import styles from "./TaskList.module.css"
import { useContext } from "react"
import { FilterStatus } from "../../types/filterStatus"
import type { Task } from "../../types/task"
import { FilterStatusContext } from "../context"

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
                .filter((el: Task) => filterStatus === FilterStatus.ALL || filterStatus === el.status)
                .map((el: Task) => (
                    <TaskListRow key={el.id} title={el.title} description={el.description} status={el.status}/>
                )
            )}
        </div>
    );

}

export default TaskList