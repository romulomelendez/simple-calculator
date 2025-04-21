import { Display } from "./display"
import { Keyboard } from "./keyboard"

export const Calculator = () => {

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen gap-5 rounded-sm bg-gray-950">
            <Display />
            <Keyboard />
        </div>
    )
}