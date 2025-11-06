import NewTaskButton from "./NewTaskButton"
import StatusSelector from "./StatusSelector"

function MainHeader() {
    return (
        <header>
            <span>Планировщик задач</span>
            <StatusSelector/>
            <NewTaskButton/>
        </header>
    )
}

export default MainHeader