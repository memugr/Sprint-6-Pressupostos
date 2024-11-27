import React, { createContext, useState, ReactNode } from 'react';

interface HomeContextProps {
    total: number;
    updateTotal: (amount: number, isSelected: boolean) => void;
}

export const HomeContext = createContext<HomeContextProps | null>(null);

export const HomeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [total, setTotal] = useState(0);
    
    // Function: update the total if selected
    const updateTotal = (amount: number, isSelected: boolean) => {
        setTotal((prev) => (isSelected ? prev + amount : prev - amount));
    }

    return (
        <HomeContext.Provider value={{ total, updateTotal }}>
            {children}
        </HomeContext.Provider>
    )
}
