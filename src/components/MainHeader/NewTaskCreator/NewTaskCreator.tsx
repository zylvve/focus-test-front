import { useState } from "react";
import NewTaskPopup from "./NewTaskPopup";

function NewTaskCreator() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={togglePopup}>new task</button>
            {isOpen && <NewTaskPopup togglePopup={togglePopup}/>}
        </>
    )
}

export default NewTaskCreator