const prompt = require('prompt-sync')({sigint: true})

let intro = prompt('Enter your string: ')

let newStr = ''

while (newStr.length <= 10) {
    newStr += intro
    console.log(newStr)
}