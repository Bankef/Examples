// Pre-requisites for Android programming - C# or Java

let takenCSharp = true
let takenJava = false

if (takenCSharp || takenJava) {
    console.log('You meet the pre-requisites for Android')
} else {
    console.log('You must take C# of Java')
}

//To be a US senator, there are three requirements:
// You must be at least 30 years old
// You have to have been a US citizen for 9 or more years
// You must live in the state you want to represent

let age = 25
let usCitizenTime = 12
let stateOfResidence = 'Minnesota'
let stateWantToRepresent = 'Minnesota'

if (age >= 30 && usCitizenTime >= 9 && stateOfResidence === stateWantToRepresent) {
    console.log('You qualify to be a US senator')
} else {
    console.log('Sorry,you do not qualify to be a US senator')
}

//falsy values = undefined, null, empty objects, 0, false
if ('' === 0) {
    console.log('the same!')
} else {
    console.log('not the same!')
}

