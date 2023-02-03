const prompt = require('prompt-sync')({sigint: true})

let intro = Number(prompt('Enter your numbers (type 0 when done): '))
let sum = 0

while (intro !== 0) {
    sum += intro
    console.log('Sum: ' + sum)
    intro = Number(prompt('Enter your more numbers: '))
}
