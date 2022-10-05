function isMinnesotaZip(code) {
    // All MN zip are between: 55001 and 56763
    if (code >= 55001 && code <= 56764) {
        return true
    } else {
        return false
    }
}

console.log(isMinnesotaZip('55403'))
console.log(isMinnesotaZip('55001'))
console.log(isMinnesotaZip('56671'))
console.log(isMinnesotaZip('7.89'))
console.log(isMinnesotaZip('-12'))

// GPA parameter function
function noGPA(gpa) {
    // return true if number is between 0-4, otherwise false
    if (gpa >= 0 && gpa <= 4) {
        return true
    } else {
        return false
    }
}

console.log(noGPA(2.3))
console.log(noGPA(4.1))
console.log(noGPA(-3.3))
console.log(noGPA(3.8))
console.log(noGPA(0.78))
console.log(noGPA(5.0))

// Function that joins a city and a state
function cityStateAddress (city, state) {
    let address =`${city}, ${state.toUpperCase()}` // turns state into uppercase letter. // `${}` turns the function into a template string
    return address
}
console.log(cityStateAddress('Minneapolis','mn' ))
console.log(cityStateAddress('Madison','wi' ))
console.log(cityStateAddress('Des monies','iw' ))
let address = cityStateAddress('Seattle', 'wa')
console.log(address)

//Create variables and template string to console log the message
let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'

console.log(`This class is ${department} ${classCode} ${className}`)
