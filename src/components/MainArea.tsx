import { useEffect, useState } from "react";
import MainHeader from "./MainHeader/MainHeader"
import TaskList from "./TaskList/TaskList"
import { FilterStatus, type FilterStatusType } from "../types/filterStatus";
import { useQuery } from "@tanstack/react-query";
import type { Task } from "../types/task";
import { FilterStatusContext, TasksContext } from "./context";
import { getTasks } from "../services/taskApiService";


function MainArea() {
    const [filterStatus, setFilterStatus] = useState<FilterStatusType>(FilterStatus.ALL)

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
        <TasksContext value={{tasks, setTasks}}>
        <FilterStatusContext value={{filterStatus, setFilterStatus}}>
            <main>
                <MainHeader/>
                <TaskList tasks={tasks} isPending={isPending} error={error}/>
            </main>
        </FilterStatusContext>
        </TasksContext>
    )
}

export default MainArea 