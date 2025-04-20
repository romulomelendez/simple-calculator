"use client"

import { ReactNode, useState } from "react"

import { CalculatorContext } from "@/contexts"

export const CalculatorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [display, setDisplay] = useState<(string | number)[]>([])
    const [lastOperationWasAResult, setLastOperationWasAResult] = useState<boolean>(false)
    
    const calculateExpression = (): void => {

        const expression = display.join("")

        try {
            const total = eval(expression)
            setDisplay([total])
            setLastOperationWasAResult(true)
        } catch (error) {
            alert("Invalid expression")
            console.error("Error evaluating expression:", error)
        }
    }

    const calculatePercentage = (): void => {

        if (display.length === 0)
            return alert("❌ Invalid operation! No numbers to calculate!")
    
        let index = display.length - 1
    
        while (index >= 0 && typeof display[index] === "number") {
            index--
        }
    
        const numbers = display.slice(index + 1).join("")
        const percentageValue = eval(`${numbers}/100`)
    
        const newDisplay = [...display.slice(0, index + 1), percentageValue]
        setDisplay(newDisplay)
    }    

    return (
        <CalculatorContext.Provider
          value={{
            display,
            lastOperationWasAResult,
            setDisplay,
            setLastOperationWasAResult,
            calculateExpression,
            calculatePercentage
        }}>
            { children }
        </CalculatorContext.Provider>
    )
}