import { useState } from "react";
import { FilterStatus } from "../../types/filterStatus";
import styles from "./TaskList.module.css"
import { useMutation } from "@tanstack/react-query";
import { deleteTask, updateTask } from "../../services/taskApiService";
import { queryClient } from "../../App";

type TaskListRowProps = {
    id: number,
    title: string,
    description: string | null,
    status: string,
}

function TaskListRow(props: TaskListRowProps) {
    const [status, setStatus] = useState(props.status);
    const [isDeleting, setIsDeleting] = useState(false);
    
    const mutationUpdate = useMutation({
        mutationFn: updateTask,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['taskData'] }),
    });
    const mutationDelete = useMutation({
        mutationFn: deleteTask,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['taskData'] }),
    });

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = event.target.value;
        setStatus(newStatus);
        mutationUpdate.mutate({ id: props.id, status: newStatus })
    };
    
    const handleDelete = () => {
        mutationDelete.mutate(props.id);
        setIsDeleting(true);
    }

    return (
        <>
            <div className={styles.title_column}>{props.title}</div>
            <div className={styles.description_column}>{props.description}</div>
            <div className={styles.select_column}>
                <select 
                    value={status} 
                    onChange={handleStatusChange} 
                >
                    <option value={FilterStatus.PENDING}>Не начато</option>
                    <option value={FilterStatus.IN_PROGRESS}>В процессе</option>
                    <option value={FilterStatus.DONE}>Выполнено</option>
                </select>
            </div>
            <div className={styles.delete_column}>
                {isDeleting ? "..." : <button onClick={handleDelete}>x</button>}
            </div>
        </>
    );
}


export default TaskListRow