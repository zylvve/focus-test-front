import { useState } from "react";
import NewTaskPopup from "./NewTaskPopup";

function NewTaskCreator() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={togglePopup}>Новое задание</button>
            {isOpen && <NewTaskPopup togglePopup={togglePopup}/>}
        </>
    )
}

export default NewTaskCreator