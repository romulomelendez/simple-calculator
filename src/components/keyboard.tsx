import { CalculatorButton } from "./calculatorButton"

export const Keyboard = () => {

    const keys = [
        "CE", "C", "%", "÷",
        7, 8, 9, "x",
        4, 5, 6, "-",
        1, 2, 3, "+",
        "", 0, ",", "="
    ]

    return (
        <div className="grid grid-cols-4 gap-6">
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