import { createContext } from "react";

interface PaginationContextType {
    page: number;
    setPage: (page: number) => void;
}
export const PaginationContext = createContext<PaginationContextType | null>(null);
