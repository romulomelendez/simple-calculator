"use client"

import { ReactNode, useState } from "react"

import { CalculatorContext } from "@/contexts"

export const CalculatorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [display, setDisplay] = useState<(string | number)[]>([])
    // const [operation, setOperation] = useState<string[]>([])

    return (
        <CalculatorContext.Provider value={{ display, setDisplay }}>
            { children }
        </CalculatorContext.Provider>
    )
}