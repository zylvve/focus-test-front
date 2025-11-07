import FilterStatusSelector from "./FilterStatusSelector"
import NewTaskCreator from "./NewTaskCreator/NewTaskCreator"
import styles from './MainHeader.module.css'

function MainHeader() {
    return (
        <header className={styles.header}>
            <h1>Планировщик задач</h1>
            <div className={styles.control_container}>
                <FilterStatusSelector/>
                <NewTaskCreator/>
            </div>
        </header>
    )
}

export default MainHeader