"use client"

import { createContext, Dispatch, SetStateAction } from "react"

interface CalculatorContextType {
    display: (string | number)[]
    setDisplay: Dispatch<SetStateAction<(string | number)[]>>
}

const defaultValues = {
    display: [1, "+", 1],
    setDisplay: () => {}
}

export const CalculatorContext = createContext<CalculatorContextType>(defaultValues)