// the word function is used to define functions in Javascript
function shout(text){
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}

console.log(shout('hello world'))

let message = shout('hello web programmers')
console.log(message)

//function to convert fahrenheit to celsius
function f_to_c(f, decimalPlaces) {
    let celsius = (f - 32) * 5 / 9
    if (decimalPlaces) { // undefined values are considered to be false
        return celsius.toFixed()
    } else {
        return celsius
    }
}

let todayTemp = 75
todayCelsis = f_to_c(todayTemp, 2)
console.log(todayCelsis)

