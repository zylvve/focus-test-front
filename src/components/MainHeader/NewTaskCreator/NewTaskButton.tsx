export const FilterStatus = {
    ALL: 'all',
    ...TaskStatus, // Spread the existing TaskStatus in FilterStatus
} as const;
