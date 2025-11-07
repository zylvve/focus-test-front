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
    recheckPageNumOnDelete: () => void;
}

function TaskListRow(props: TaskListRowProps) {
    const [status, setStatus] = useState(props.status);
    const [isDeleting, setIsDeleting] = useState(false);
    
    const mutationUpdate = useMutation({
        mutationFn: updateTask,
        onSettled: () => queryClient.invalidateQueries({ queryKey: ['taskData'] }),
    });
    const mutationDelete = useMutation({
        mutationFn: deleteTask,
        onSettled: () => queryClient.invalidateQueries({ queryKey: ['taskData'] }),
    });

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = event.target.value;
        setStatus(newStatus);
        mutationUpdate.mutate({ id: props.id, status: newStatus })
    };
    
    const handleDelete = () => {
        mutationDelete.mutate(props.id);
        props.recheckPageNumOnDelete();
        setIsDeleting(true);
    }

    return (
        <>
            <div className={`${styles.title_column} ${styles.main_cell}`}>{props.title}</div>
            <div className={`${styles.description_column} ${styles.main_cell}`}>{props.description}</div>
            <div className={`${styles.select_column} ${styles.main_cell}`}>
                <select 
                    value={status} 
                    onChange={handleStatusChange} 
                >
                    <option value={FilterStatus.PENDING}>Не начато</option>
                    <option value={FilterStatus.IN_PROGRESS}>В процессе</option>
                    <option value={FilterStatus.DONE}>Выполнено</option>
                </select>
            </div>
            <div className={`${styles.delete_column} ${styles.main_cell}`}>
                {isDeleting ? "..." : <button onClick={handleDelete}>x</button>}
            </div>
        </>
    );
}


export default TaskListRow