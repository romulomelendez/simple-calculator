"use client"

import { createContext, Dispatch, SetStateAction } from "react"

interface CalculatorContextType {
    display: (string | number)[]
    setDisplay: Dispatch<SetStateAction<(string | number)[]>>,
    calculateExpression: () => void
    calculatePercentage: () => void
}

const defaultValues = {
    display: [1, "+", 1],
    setDisplay: () => {},
    calculateExpression: () => {},
    calculatePercentage: () => {}
}

export const CalculatorContext = createContext<CalculatorContextType>(defaultValues)