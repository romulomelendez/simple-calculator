"use client"

type ButtonProps = {
    value: string | number 
}

export const CalculatorButton = ({ value }: ButtonProps) => {

    return (
        <button
          className={value === "=" ? 
            "bg-orange-600 p-3 rounded-md text-center text-3xl text-white cursor-pointer hover:bg-orange-700"
            : "bg-gray-800 p-3 rounded-md text-center text-3xl text-orange-600 cursor-pointer hover:bg-gray-900 hover:text-orange-700"
          }
          onClick={() => console.log(value)}
        >
            { value }
        </button>
    )
}