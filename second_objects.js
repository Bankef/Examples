//create an object
var user = {
    name: 'Victoria',
    password: 'passw0rd',
    email: 'victori@gmail.com',
    roles: ['programmer', 'administrator', 'developer'],
    contact: {
        phone: '123-456-7890',
        office: 'M1234'
    }
}

//Add salary
user.salary = 6065
user.roles.push('server admin')
user.contact.location = 'Minneapolis'

console.log(user)

console.log('User roles are: ', user.roles) //print roles array
console.log('User roles are: ', user['roles'])  //print roles, array, other syntax
console.log('Users first role is: ', + user.roles[0])  //first role


console.log('User phone number is ' + user.contact.phone) //access nested values


