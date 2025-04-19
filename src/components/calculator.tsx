import { Display } from "./display"
import { Keyboard } from "./keyboard"

export const Calculator = () => {

    return (
        <div className="bg-gray-950 flex flex-col p-5 gap-5 rounded-sm">
            <Display />
            <Keyboard />
        </div>
    )
}