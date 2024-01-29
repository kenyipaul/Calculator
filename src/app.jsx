import { useEffect } from "react"
import "./app.css"

export default function App() {

    useEffect(() => {


        class Calculator {
            
            constructor(currentOperand, previousOperand) {
                this.currentOperand = currentOperand
                this.previousOperand = previousOperand
                this.allClear()
            }

            allClear() {
                this.currentOperand.textContent = ''
                this.previousOperand.textContent = ''
            }

            clear() {
                if (this.currentOperand.textContent == "Syntax Error")
                    this.allClear()
                else
                    this.currentOperand.textContent = this.currentOperand.textContent.slice(0, -1)
            }

            append(data) {
                let currentText = this.currentOperand.textContent

                
                if (this.currentOperand.textContent !== "Syntax Error") {
                    if (currentText[currentText.length - 1] == "." && data == ".") {
                        return 
                    } else {

                        this.currentOperand.textContent += data
                    }
                }
            }

            calculate() {
                try {
                    this.previousOperand.textContent = this.currentOperand.textContent
                    this.currentOperand.textContent = eval(this.currentOperand.textContent)
                } catch (e) {
                    this.currentOperand.textContent = 'Syntax Error'
                    this.previousOperand.textContent = 'Syntax Error'
                }
            }
        
        }

        const currentOperand = document.querySelector('#app .content h1')
        const previousOperand = document.querySelector('#app .content h3')

        const calculator = new Calculator(currentOperand, previousOperand)

        document.querySelectorAll('.button').forEach((elem) => {

            elem.addEventListener('click', (e) => {
                calculator.append(e.target.innerHTML)                
            })
        })

        document.querySelector('.clear').onclick = () => calculator.clear()
        document.querySelector('.allClear').onclick = () => calculator.allClear()
        document.querySelector('.equals').onclick = () => calculator.calculate()


    }, [])

    return (
        <div id="app">
            
            <div className="display">
                <div className="content">
                    <h3>01234567890</h3>
                    <h1>01234567890</h1>
                </div>
            </div>
            <div className="buttons">
                
                <button className="allClear">AC</button>
                <button className="clear">C</button>
                <button className="button">/</button>
                <button className="button">7</button>
                <button className="button">8</button>
                <button className="button">9</button>
                <button className="button">+</button>
                <button className="button">4</button>
                <button className="button">5</button>
                <button className="button">6</button>
                <button className="button">*</button>
                <button className="button">1</button>
                <button className="button">2</button>
                <button className="button">3</button>
                <button className="button">-</button>
                <button className="button">.</button>
                <button className="button">0</button>
                <button className="equals">=</button>

            </div>

        </div>
    )
}