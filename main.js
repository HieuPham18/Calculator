const btnNumber = document.querySelectorAll('.btn-number')
const btnCal = document.querySelectorAll('.btn-cal')
const btnRs = document.querySelector('.btn-rs')
const btnClear = document.querySelector('.btn-clear')
const btnRsElement = document.querySelector('.result__calculation')
const titleRS = document.querySelector('.result__number')

var currentNum = '' // current
var oldNum = '' // first
var operator
var result


var setNumber = function () {
    if (result) {
        currentNum = this.value
        result = ''
    } else {
        currentNum += this.value
    }

    //views
    titleRS.innerText = currentNum
}

var moveNum = function () {
    operator = this.value
    oldNum = currentNum;
    currentNum = ''

    //views
    titleRS.innerText = operator
}

var clearAll = function () {
    currentNum = ''
    oldNum = ''
    result = 0

    //views
    titleRS.innerText = ''
    btnRsElement.innerText = result
}

var displayCal = function () {
    // convert string to float
    currentNum = parseFloat(currentNum)
    oldNum = parseFloat(oldNum)

    switch (operator) {
        case "+":
            result = oldNum + currentNum
            break
        case "-":
            result = oldNum - currentNum
            break
        case "*":
            result = oldNum * currentNum
            break
        case "/":
            result = oldNum / currentNum
            break
        default:
            result = currentNum
    }

    if (isNaN(result)) {
        btnRsElement.innerText = 0
        currentNum = ''
    } else {
        btnRsElement.innerText = result
        currentNum = result
        oldNum = ''
        operator = ''
    }
}

for (let i = 0; i < btnNumber.length; i++) {
    btnNumber[i].onclick = setNumber
}

for (let i = 0; i < btnCal.length; i++) {
    btnCal[i].onclick = moveNum
}

btnRs.onclick = displayCal
btnClear.onclick = clearAll

addEventListener('click', e => {
    console.log('click', e.target)
    if (e.target.matches('.operator')) {

    }
})

class Calculator {
    constructor(el) {
        this.el = el
        this.el.addEventListener('click', this.onClick)
    }
    onClick = (e) => {

    }
}


new Calculator(document.querySelector('#calculator1'))