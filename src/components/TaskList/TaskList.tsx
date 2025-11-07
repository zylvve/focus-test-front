import TaskListHeader from "./TaskListHeader"
import TaskListRow from "./TaskListRow"
import styles from "./TaskList.module.css"
import { useContext } from "react"
import { FilterStatus } from "../../types/filterStatus"
import type { Task } from "../../types/task"
import { FilterStatusContext } from "../../context/FilterStatusContext"
import TaskListPagination from "./TaskListPagination"
import { PaginationContext } from "../../context/PaginationContext"

type TaskListProps = {
    pageSize: number;
    isPending: boolean,
    error: Error | null,
    tasks: Task[],
}

function TaskList({pageSize, isPending, error, tasks}: TaskListProps) {        
    const { filterStatus } = useContext(FilterStatusContext)!;
    const { page, setPage } = useContext(PaginationContext)!;

    if (isPending) return 'Загрузка...'
    if (error) return 'Ошибка: ' + error.message
        
    const filteredTasks = tasks.filter((t: Task) => filterStatus === FilterStatus.ALL || filterStatus === t.status);
    const pagesCount = Math.ceil(filteredTasks.length / pageSize) || 1;
    
    const recheckPageNumOnDelete = () => {
        if (page > 1 && page === pagesCount && filteredTasks.length % pageSize === 1) setPage(page - 1);
    }
    
    return (
        <>
            <div className={styles.task_list}>
                <TaskListHeader/>
                {filteredTasks
                    .sort((t1: Task, t2: Task) => t2.id - t1.id)
                    .slice((page - 1) * pageSize, page * pageSize)
                    .map((t: Task) => (
                        <TaskListRow 
                            key={t.id} 
                            id={t.id}
                            title={t.title} 
                            description={t.description} 
                            status={t.status}
                            recheckPageNumOnDelete={recheckPageNumOnDelete}
                        />
                    )
                )}
            </div>
            <TaskListPagination pagesCount={pagesCount}/>
        </>
    );

}

export default TaskList