let birds = ['Owl', 'Robin', 'Eagle']
console.log(birds)

//concise loop function
birds.forEach( function(bird, index){
    //repeat once for each object in the array
    //function will be called once for each object in the array
    console.log(index, bird.toUpperCase())
})

// Traditional for loop
for (let x = 0 ; x < birds.length ; x = x+1){ //could also be x++
    let bird = birds[x]
    console.log(x, bird)
}

//the replace function
let text = 'The classes are itec 1150, itec 1250, itec 2560'
let replaced = text.replace('itec', 'ITEC')
console.log(replaced)

let replacedAll = text.replace(/itec/g, 'ITEC')
console.log(replacedAll)

let message = 'The classes are 1150, 1250, 2560'
let replaceRegex = message.replace(/\d{4}/g, 'ITEC $&')
console.log(replaceRegex)