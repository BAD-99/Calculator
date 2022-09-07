class Calculator{
constructor(outputElement,outputHistoryElement){
    this.outputElement = outputElement
    this.outputHistoryElement = outputHistoryElement
    this.clear()
    this.updateDisplay()
    }

    clear(){
        this.output = ''
        this.outputHistory = ''
        this.operation = undefined
    }

    delete(){
        this.output = this.output.toString().slice(0,-1)
    }
    
    appendNumber(number){
        if(number === '.' && this.output.includes('.'))return
        if(number ==='+/-'){
            if(this.output.startsWith('-')){this.output = this.output.toString().substring(1)}
            else{this.output = '-' + this.output.toString()}
            return
        }
        this.outputHistory.substring
        this.output = this.output.toString() + number.toString()
    }

    chooseOperation(operation){
        if(this.output==='')return
        if(this.outputHistory!==''){
            this.compute()
        }
        this.operation = operation
        this.outputHistory = this.output
        this.output = ''
    }

    chooseFunction(f){
        switch(f){
            case '=':
                this.compute()
                this.updateDisplay()
                break
            case 'back':
                this.delete()
                this.updateDisplay()
                break
            case 'x^2':
                this.compute()
                
                break
            case '1/x':
                break
            case '^':
                break
            case 'sqrt':
                break
        }
    }

    compute(){
        let comp
        const prev = parseFloat(this.outputHistory)
        const curr = parseFloat(this.output)
        if(isNaN(prev)||isNaN(curr))return
        switch(this.operation){
            case '+':
                comp = prev + curr
                break
            case '-':
                comp = prev - curr
                break
            case '*':
                comp = prev * curr
                break
            case '/':
                comp = prev / curr
                break
            default:
                return
        }
        this.output = comp
        this.operation = undefined
        this.outputHistory = ''
    }

    updateDisplay(){
        this.outputElement.innerText = this.output
        this.outputHistoryElement.innerText = this.outputHistory
    }
}



const numberButtons = document.querySelectorAll('[data-number]')
const functionButtons = document.querySelectorAll('[data-function]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const outputHistoryElement =document.querySelector('[data-output-history]')
const outputElement =document.querySelector('[data-output]')

const calculator = new Calculator(outputElement,outputHistoryElement)

numberButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

functionButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.chooseFunction(button.innerText)
        calculator.updateDisplay()
    })
})

operatorButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
