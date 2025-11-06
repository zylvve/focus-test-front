import { useEffect, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { createTask } from "../../../services/taskApiService";
import { queryClient } from "../../../App";
import { FilterStatus } from "../../../types/filterStatus";

type NewTaskPopupProps = {
    togglePopup: () => void,
}

function NewTaskPopup({ togglePopup }: NewTaskPopupProps) {
    const popupRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
            togglePopup();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [popupRef]);
    
    const mutationCreate = useMutation({
        mutationFn: createTask,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['taskData'] }),
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        mutationCreate.mutate({ 
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            status: FilterStatus.PENDING as string,
        })
        togglePopup()
    };

    return (
        <div className="popup-overlay" ref={popupRef}>
            <div className="popup-content">
                <form onSubmit={handleSubmit}>
                    <label>
                        Название:
                        <input type="text" name="title" required />
                    </label>
                    <label>
                        Описание:
                        <input type="text" name="description" />
                    </label>
                    <button type="submit">Создать задачу</button>
                </form>
            </div>
        </div>
    )
}

export default NewTaskPopup