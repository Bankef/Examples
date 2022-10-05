// create an object - contains properties (value pairs)
let user = {username: 'Victoria', password: 'passw0rd'}

console.log(user.username)
console.log(user['username'])

console.log(user.password)
console.log(user['password'])

let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console.log(user[usernameProperty])

user.password = 'nosering' //changes the value of the password
console.log (user)

user['password'] = 'money'
console.log(user)

user.email = 'vickybanks050@gmail.com' // adds emails to the property 
console.log(user)
console.log(user.email)