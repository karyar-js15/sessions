// Objects in js
// ویژگی - Property - Attribute - صفت
// یه سری کار انجام می‌ده - رفتار - method - تابع
// خودرو - car // property speed, // method increaseSpeed //
// method decreaseSpeed 
// method brake => decreaseSpeed

// {} Empty Object
// Array is special Object
let car = {
    brand: "BMW",
    options: [
        "Heating Seats",
        "ABS Brakes"
    ],
    speed: 50,
    "owner": {
        firstName: "Hadi",
        lastName: "Tabatabaei"
    },
    increaseSpeed: function() {},
}

let carColor = car.color
// carColor === undefined

// car.hasOwnProperty("color") // false
// car.hasOwnProperty("speed") // true



// Dot Operator (.) A.B // car.speed // car.options // 
// car.owner.firstName
// console.log(car.speed);
// console.log(car.options)
// console.log(car.owner.firstName)
// console.log(console);


car.speed = 100
console.log(car.speed)
car.speed += 50 // car.speed = car.speed + 50
console.log(car.speed)
// console.log()


// Dot Operator ~ Static Property Access 
// Dynamic Property Access ~ Index Access [] options[0] options[1]
// in objects: car["speed"] 
car["speed"] // car.speed
// car."speed"


console.log(car["speed"])
car.owner.firstName // "Hadi"
car["owner"].firstName // "Hadi"
car["owner"]["firstName"] // "Hadi"
car.owner["first" + "Name"] // "Hadi"

car.options[0] // "Heating Seats"
car["options"][0] // "Heating Seats"

// let tmp = "speed"
// car[tmp] // car.speed


let keys = [
    "brand",
    "owner",
    "speed",
    "options",
]

for(let i = 0; i < keys.length; i++) {
    let key = keys[i] // "speed" | "brand" | ...
    let value = car[key] // car["brand"] ~ car.brand

    console.log(value)
}


console.log("Propreties:")

for(let property in car) {
    // property // "speed" "brand" "options" ".."
    console.log(property)
    let value = car[property] // car["brand"] car["speed"]
    console.log(property + " = " + value) // "brand" + " = " + "BMW" // "brand = BMW"
}

// console.log("Values:")
// for(let value of car) TypeError: car is not iterable {
//     console.log(value) 
// }

let carKeys = Object.keys(car) // ["speed", "brand", ...]
console.log(carKeys)
for(let property of carKeys) {
    // "brand"
    // "options"
}
for(let i = 0; i < carKeys.length; i++) {
    let property = carKeys[i] // "brand"
    let value = car[property]
}
let carValues = Object.values(car) // Array of values
console.log(carValues)
// ["BMW", ["heatin..", ""], 50, {}, function() {}]
let entries = Object.entries(car)
/*
[
    ["brand", "BMW"] // entry,
    ["options", ["heating..", "abs.."] ] // entry,
    ["speed", 50],
    ["owner", { firstName: "...", lastName: "..."} ],
    ["increaseSpeed", function() {} ],
]

entries[1][1][1] // "ABS Brakes"

*/

for(let i = 0; i < entries.length; i++) {
    let entry = entries[i]
    // entry === [property, value]
    let property = entry[0]
    let value = entry[1]

    console.log("Property:" + property)
    console.log("Value:")
    console.log(value)
}


// Property Addition 
car.color = "red"
car["color"] = "red"


// Propety Deletion
delete car.color // VS car.color = udnefined


// Object.fromEntries()








// Loops - For of , For in
// Syntax Sugar - همون کار حلقه عادی ولی با سینتکس ساده تر و قابل فهم تر
// let names = ["hadi", "abolfazl", "zeinab"]

// for(let name of names) { // for each
//     console.log(name) // "hadi" "abolfazl" "zeinab"
// }

// for(let i in names) {
//     let name = names[i]
//     console.log(name, i)
// }

// for(let i = 0; i < names.length; i++) {
//     let name = names[i]
//     console.log(name)
// }


// Array, ArrayLike, ArrayList, List, LinkedList