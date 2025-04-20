"use client"

import { createContext, Dispatch, SetStateAction } from "react"

interface CalculatorContextType {
    display: (string | number)[]
    lastOperationWasAResult: boolean
    setDisplay: Dispatch<SetStateAction<(string | number)[]>>
    setLastOperationWasAResult: Dispatch<SetStateAction<boolean>>
    calculateExpression: () => void
    calculatePercentage: () => void
}

const defaultValues: CalculatorContextType = {
    display: [],
    lastOperationWasAResult: false,
    setDisplay: () => {},
    setLastOperationWasAResult: () => {},
    calculateExpression: () => {},
    calculatePercentage: () => {}
}

export const CalculatorContext = createContext<CalculatorContextType>(defaultValues)