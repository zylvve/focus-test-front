import { useQuery } from "@tanstack/react-query"
import TaskListHeader from "./TaskListHeader"
import TaskListRow from "./TaskListRow"
import styles from "./TaskList.module.css"
import { useContext } from "react"
import { FilterStatusContext } from "../MainArea/MainArea"
import { FilterStatus } from "../../types/filterStatus"
import type { Task } from "../../types/task"

function TaskList() {
    const { isPending, error, data } = useQuery({
        queryKey: ['taskData'],
        queryFn: async () => {
            const response = await fetch(
                'http://localhost:8000/tasks',
            )
            return await response.json()
        },
    })
    
    const context = useContext(FilterStatusContext);
    if (context === null) throw new Error('Context error');
    const { filterStatus } = context;

    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className={styles.task_list}>
            <TaskListHeader/>
            {data
                .filter((el: Task) => filterStatus === FilterStatus.ALL || filterStatus === el.status)
                .map((el: Task) => (
                    <TaskListRow key={el.id} title={el.title} description={el.description} status={el.status}/>
                )
            )}
        </div>
    );

}

export default TaskList