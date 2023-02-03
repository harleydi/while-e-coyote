const prompt = require('prompt-sync')({sigint: true})

let n = prompt('Enter you number: ')
let total = 0
let num1 = 0
let num2 = 1

while (n >= 0) {
    console.log(num1)
    total = num1 + num2
    num1 = num2
    num2 = total
    n--
}