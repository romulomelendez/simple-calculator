import { CalculatorButton } from "./calculatorButton"

export const Keyboard = () => {

    const keys = [
        "CE", "C", "%", "÷",
        7, 8, 9, "x",
        4, 5, 6, "-",
        1, 2, 3, "+",
        "github", 0, ",", "="
    ]

    return (
        <div className="grid grid-cols-4 w-[370px] md:w-[500px] h-[400px] md:h-[450px] gap-2 md:gap-3">
            {
                keys.map((key, index) => (
                    <CalculatorButton
                      key={index}
                      value={key}
                    />
                ))
            }
        </div>
    )
}