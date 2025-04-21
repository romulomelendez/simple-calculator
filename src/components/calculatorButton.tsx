"use client"

import { useDisplay } from "@/hooks"

import { FaGithub } from "react-icons/fa"
import { FaDeleteLeft } from "react-icons/fa6"
import { LINKS } from "../../config"

type ButtonProps = {
  value: string | number
}

export const CalculatorButton = ({ value }: ButtonProps) => {

  const {
    display,
    setDisplay,
    lastOperationWasAResult,
    setLastOperationWasAResult,
    calculateExpression,
    calculatePercentage
  } = useDisplay()

  const getPenultimateElementFromDisplay = (): string | number => display[display.length - 2]

  const getLastElementFromDisplay = (): string | number => display[display.length - 1]

  const lastElementWasAMathOperator = (): boolean => {

    const lastElement = getLastElementFromDisplay()

    if(typeof lastElement === "string" || display.length === 0)
      return true
    return false
  }

  const checkLastOperation = (): void | boolean => lastOperationWasAResult && setDisplay([])
  
  const isLeadingZero = (): boolean => {

    const penultElement = getPenultimateElementFromDisplay()
    const lastElement = getLastElementFromDisplay()

    if(typeof value === "number" && lastElement === 0) {
      if(typeof penultElement === "string" || penultElement === undefined)
        return true
    }

    return false
  }

  const handleKey = (): void => {
    
    checkLastOperation()

    if (isLeadingZero())
      return

    switch (value) {

      case "CE":
        setDisplay([])
        break
      case "C":
        setDisplay((prev) => prev.slice(0, prev.length - 1))
        break
      case "+":
        if (lastElementWasAMathOperator() || lastOperationWasAResult) return
        setDisplay((prev) => [...prev, "+"])
        break
      case "-":
        if (lastElementWasAMathOperator() || lastOperationWasAResult) return
        setDisplay((prev) => [...prev, "-"])
        break
      case "=":
        if (lastElementWasAMathOperator() || lastOperationWasAResult) return
        calculateExpression()
        break
      case "%":
        if (lastElementWasAMathOperator() || lastOperationWasAResult) return
        calculatePercentage()
        break
      case ",":
        if (lastElementWasAMathOperator() || lastOperationWasAResult) return
        setDisplay((prev) => [...prev, "."])
        break
      case "x":
        if (lastElementWasAMathOperator() || lastOperationWasAResult) return
        setDisplay((prev) => [...prev, "*"])
        break
      case "÷":
        if (lastElementWasAMathOperator() || lastOperationWasAResult) return
        setDisplay((prev) => [...prev, "/"])
        break
      case "github":
        window.open(LINKS.github, "_blank")
        break
      default:
        setDisplay((prev) => [...prev, value])
        if (lastOperationWasAResult) setLastOperationWasAResult(false)
        break
    }
  }

  return (
    <button
      className={value === "=" ?
        "bg-orange-600 p-2 sm:p-3 rounded-md text-center text-3xl sm:text-3xl md:text-5xl text-white cursor-pointer hover:bg-orange-700"
        : "flex justify-center items-center bg-gray-800 p-2 sm:p-3 rounded-md text-center text-3xl sm:text-3xl md:text-5xl text-orange-600 cursor-pointer hover:bg-gray-900 hover:text-orange-700"
      }
      onClick={() => handleKey()}
    >
      {
        value === "C" ? <FaDeleteLeft />
          : value === "github" ? <FaGithub />
            : value
      }
    </button>
  )
}