const prompt = require('prompt-sync')({sigint: true})

let intro = prompt('Enter your number: ')

let total = intro

while (total < 100) {
    total *= 2
    console.log(total)
}