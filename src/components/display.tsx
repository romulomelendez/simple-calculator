"use client"

import { useDisplay } from "@/hooks"

export const Display = () => {

    const { display } = useDisplay()

    return (
        <div className="flex items-center w-[380px] h-[90px] p-4 border-1 border-gray-800 text-5xl text-orange-600 overflow-x-auto whitespace-nowrap no-scrollbar">
            { display }
        </div>
    )
}