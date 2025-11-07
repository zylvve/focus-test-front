import { useState } from "react";
import NewTaskPopup from "./NewTaskPopup";
import styles from "./NewTaskCreator.module.css"

function NewTaskCreator() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <span className={styles.task_creator}>
            <button onClick={togglePopup}>Новое задание</button>
            {isOpen && <NewTaskPopup togglePopup={togglePopup}/>}
        </span>
    )
}

export default NewTaskCreator