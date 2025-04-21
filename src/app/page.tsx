import { Calculator } from "@/components/calculator"
import { CalculatorProvider } from "@/providers"

const Home = () => (
    <div className="flex justify-center items-center h-screen bg-black">
        <CalculatorProvider>
            <Calculator />
        </CalculatorProvider>
    </div>
)

export default Home