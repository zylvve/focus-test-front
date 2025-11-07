import styles from './TaskList.module.css'

function TaskListHeader() {
    return (<>
        <div className={`${styles.title_column} ${styles.header_cell}`}><h4>Название</h4></div>
        <div className={`${styles.description_column} ${styles.header_cell}`}><h4>Описание</h4></div>
        <div className={`${styles.status_column} ${styles.header_cell}`}><h4>Статус</h4></div>
        <div className={`${styles.delete_column} ${styles.header_cell}`}></div>
    </>)
}

export default TaskListHeader