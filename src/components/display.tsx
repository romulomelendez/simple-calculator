"use client"

import { useDisplay } from "@/hooks"

export const Display = () => {

    const { display } = useDisplay()

    return (
        <div className="flex items-center text-left w-[370px] sm:w-[380px] md:w-[500px] h-[90px] md:h-[100px] border-1 border-gray-800 text-6xl md-text-7xl text-orange-600 overflow-x-auto whitespace-nowrap no-scrollbar" style={{padding: "10px"}}>
            { display }
        </div>
    )
}