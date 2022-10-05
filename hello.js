console.log('Hello World!')

// Three ways to create variables
let color = 'blue' //Best choice
var size = 'medium' //Not recommended
const language = 'JavaScript' // key word used in making a final value
let quantity = 5
let distance = 4.5
let text = 'Hello World'
console.log('There are ' + quantity + ' programmers')

//Use variables to console log today's temperature
let todayTemp = 79
console.log('Today\'s temperature is ' + todayTemp + 'F')

//Convert temp to celsius
let tempC = (todayTemp - 32) * 5/9
console.log('Today\'s temperature is ' + tempC.toFixed(2) + 'C') //Change the decimal to two places