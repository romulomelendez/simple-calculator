"use client"

import { useContext } from "react"

import { CalculatorContext } from "@/contexts"

export const useDisplay = () => useContext(CalculatorContext)
