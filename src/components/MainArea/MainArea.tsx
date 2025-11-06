import { createContext, useState } from "react";
import MainHeader from "../MainHeader/MainHeader"
import TaskList from "../TaskList/TaskList"
import { FilterStatus, type FilterStatusType } from "../../types/filterStatus";

interface FilterStatusContextType {
    filterStatus: FilterStatusType;
    setFilterStatus: (status: FilterStatusType) => void;
}
export const FilterStatusContext = createContext<FilterStatusContextType | null>(null);

function MainArea() {
    const [filterStatus, setFilterStatus] = useState<FilterStatusType>(FilterStatus.ALL)

    return (
        <FilterStatusContext value={{filterStatus, setFilterStatus}}>
            <main>
                <MainHeader/>
                <TaskList/>
            </main>
        </FilterStatusContext>
    )
}

export default MainArea 