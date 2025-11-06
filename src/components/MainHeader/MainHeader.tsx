import FilterStatusSelector from "./FilterStatusSelector"
import NewTaskCreator from "./NewTaskCreator/NewTaskCreator"

function MainHeader() {
    return (
        <header>
            <span>Планировщик задач</span>
            <FilterStatusSelector/>
            <NewTaskCreator/>
        </header>
    )
}

export default MainHeader