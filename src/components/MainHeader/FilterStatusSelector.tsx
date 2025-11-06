import { useContext } from "react";
import { FilterStatus, type FilterStatusType } from "../../types/filterStatus";
import { FilterStatusContext } from "../context";

function FilterStatusSelector() {
    const context = useContext(FilterStatusContext);
    if (context === null) throw new Error('Context error');
    const { filterStatus, setFilterStatus } = context;
    
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterStatus(event.target.value as FilterStatusType);
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