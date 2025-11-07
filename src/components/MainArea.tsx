import { useEffect, useState } from "react";
import MainHeader from "./MainHeader/MainHeader"
import TaskList from "./TaskList/TaskList"
import { FilterStatus, type FilterStatusType } from "../types/filterStatus";
import { useQuery } from "@tanstack/react-query";
import type { Task } from "../types/task";
import { FilterStatusContext } from "../context/FilterStatusContext";
import { getTasks } from "../services/taskApiService";
import styles from './MainArea.module.css'
import { PaginationContext } from "../context/PaginationContext";

function MainArea() {
    const [filterStatus, setFilterStatus] = useState<FilterStatusType>(FilterStatus.ALL)
    const [page, setPage] = useState<number>(1);

    const { isPending, error, data } = useQuery({
        queryKey: ['taskData'],
        queryFn: getTasks,
    })

    const [tasks, setTasks] = useState<Task[]>([]);
        
    useEffect(() => {
        if (data) {
            setTasks(data);
        }
    }, [data]);

    return (
        <FilterStatusContext value={{filterStatus, setFilterStatus}}>
        <PaginationContext value={{page, setPage}}>
            <main className={styles.main}>
                <MainHeader/>
                <TaskList pageSize={10} tasks={tasks} isPending={isPending} error={error}/>
            </main>
        </PaginationContext>
        </FilterStatusContext>
    )
}

export default MainArea 