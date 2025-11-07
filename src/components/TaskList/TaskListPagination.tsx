import { useContext } from "react";
import { PaginationContext } from "../../context/PaginationContext";
import styles from "./TaskList.module.css"

type TaskListPaginationProps = {
    pagesCount: number,
}

function TaskListPagination({pagesCount}: TaskListPaginationProps) {
    const { page, setPage } = useContext(PaginationContext)!;
    
    const prevPage = () => {
        if (page > 1) setPage(page-1); 
    }
    const nextPage = () => {
        if (page < pagesCount) setPage(page+1); 
    }

    return(
        <nav className={styles.navigation}>
            <button onClick={prevPage}>{'<'}</button>
            <span>{`Страница ${page} из ${pagesCount}`}</span>
            <button onClick={nextPage}>{'>'}</button>
        </nav>
    ) 
}

export default TaskListPagination