import styles from './TaskList.module.css'

function TaskListHeader() {
    return (<>
        <div className={styles.title_column}><h4>Название</h4></div>
        <div className={styles.description_column}><h4>Описание</h4></div>
        <div className={styles.select_column}><h4>Статус</h4></div>
        <div className={styles.delete_column}></div>
    </>)
}

export default TaskListHeader