let animals = ['lion', 'tiger', 'cheetah']

console.log(animals)
console.log(animals[1])
console.log(animals[1000])

animals[3] = 'giraffe'
console.log(animals)
console.log(animals[5])

animals[1] = 'zebra'
console.log(animals[1])

animals.push('elephant') //adds item to the end of the array
console.log(animals)

let lastAnimal = animals.pop() //removes item at the end of the array
console.log(lastAnimal)
console.log(animals)

animals.unshift('deer') //adds item to the beginning of the array
console.log(animals)

animals.reverse()
console.log(animals) //shows the list in reverse

animals.sort()
console.log(animals) //sort the list in alphabetical order

let numberOfAnimals = animals.length
console.log(numberOfAnimals)  //display the number of items in the array

console.log(animals.indexOf('lion')) //display the index of the named animal in the list

console.log(animals.indexOf('walrus'))
if (animals.indexOf('walrus') == -1){
    console.log('walrus is not in the array')
}

if (animals.includes('cheetah')) {
    console.log('cheetah is in the array')
}

console.log(animals.join(' * ')) // joins animals by the * sign

animals.forEach( function(animal){
    console.log(animal.toUpperCase())
})

//can you print the length of each animal name

animals.forEach(function(animal){ // displays the length of letter doe each animal
    console.log(animal.length)
})

// make a new array with the lengths of each animal name

let animalNameLength = []
animals.forEach( function (animal) {
    let length = animal.length
    animalNameLength.push(length)
})

console.log(animalNameLength)