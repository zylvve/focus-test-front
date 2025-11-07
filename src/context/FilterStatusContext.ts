import { createContext } from "react";
import type { FilterStatusType } from "../types/filterStatus";

interface FilterStatusContextType {
    filterStatus: FilterStatusType;
    setFilterStatus: (status: FilterStatusType) => void;
}
export const FilterStatusContext = createContext<FilterStatusContextType | null>(null);
