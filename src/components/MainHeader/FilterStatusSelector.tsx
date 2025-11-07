import { useContext } from "react";
import { FilterStatus, type FilterStatusType } from "../../types/filterStatus";
import { FilterStatusContext } from "../../context/FilterStatusContext";
import { PaginationContext } from "../../context/PaginationContext";

function FilterStatusSelector() {
    const { filterStatus, setFilterStatus } = useContext(FilterStatusContext)!;
    const { setPage } = useContext(PaginationContext)!;
    
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterStatus(event.target.value as FilterStatusType);
        setPage(1);
    };

    return (
        <select value={filterStatus} onChange={handleChange}>
            <option value={FilterStatus.ALL}>Все</option>
            <option value={FilterStatus.PENDING}>Не начато</option>
            <option value={FilterStatus.IN_PROGRESS}>В процессе</option>
            <option value={FilterStatus.DONE}>Выполнено</option>
        </select>
    )
}

export default FilterStatusSelector