import { useQuery } from "@tanstack/react-query"
import TaskListHeader from "./TaskListHeader"
import TaskListRow from "./TaskListRow"
import styles from "./TaskList.module.css"

type Task = {
    id: number,
    title: string,
    description: string | null,
    status: 'pending' | 'in_progress' | 'done',
    created_at: string,
}

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
    
    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className={styles.task_list}>
            <TaskListHeader/>
            {data.map((el: Task) => (
                <TaskListRow key={el.id} title={el.title} description={el.description} status={el.status}/>
            ))}
        </div>
    );

}

export default TaskList