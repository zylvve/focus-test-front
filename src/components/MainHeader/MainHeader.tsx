import NewTaskCreator from "./NewTaskCreator/NewTaskCreator"
import StatusSelector from "./StatusSelector"

function MainHeader() {
    return (
        <header>
            <span>Планировщик задач</span>
            <StatusSelector/>
            <NewTaskCreator/>
        </header>
    )
}

export default MainHeader