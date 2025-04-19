"use client"

import { useDisplay } from "@/hooks"

import { FaGithub } from "react-icons/fa"
import { FaDeleteLeft } from "react-icons/fa6"
import { LINKS } from "../../config"

type ButtonProps = {
  value: string | number
}

export const CalculatorButton = ({ value }: ButtonProps) => {

  const { setDisplay, calculateExpression, calculatePercentage } = useDisplay()

  const handleKey = (): void => {

    switch (value) {

      case "CE":
        setDisplay([])
        break
      case "C":
        setDisplay((prev) => prev.slice(0, prev.length - 1))
        break
      case "=":
        calculateExpression()
        break
      case "%":
        calculatePercentage()
        break
      case ",":
        setDisplay((prev) => [...prev, "."])
        break
      case "x":
        setDisplay((prev) => [...prev, "*"])
        break
      case "÷":
        setDisplay((prev) => [...prev, "/"])
        break
      case "github":
        window.open(LINKS.github, "_blank")
        break
      default:
        setDisplay((prev) => [...prev, value])
        break
    }
  }

  return (
    <button
      className={value === "=" ?
        "bg-orange-600 p-3 rounded-md text-center text-3xl text-white cursor-pointer hover:bg-orange-700"
        : "flex justify-center items-center bg-gray-800 p-3 rounded-md text-center text-3xl text-orange-600 cursor-pointer hover:bg-gray-900 hover:text-orange-700"
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