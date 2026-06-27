// Call by Value X
// Call by Reference X
// Clonning (Deep Copy) X 
// JSON (Javascript Object Notation) X
// JSON.parse X
// JSON.stringify X
// console.log({}) technique X
// function (statement, argument, return value, scope)

// let myName = "Hadi" // Call by Value (Primitive, string, number, ...)
// let student = { // Call by Reference (Object, Array)
//     name: "Hadi",
//     lastName: "Tabatabaei"
// }

// let student2 = student
// let student3 = student2

// let student4 = {
//     name: "Hadi",
//     lastName: "Tabatabaei"
// }

// student.name = "Ali";

// console.log(student.name); // { name: "Ali" }
// console.log(student2.name);// { name: "Ali" }

// if(student === student3 === student2) {}


/*
    0.  1. 2. 3. 4  5. 6.                 10 15 17,  20            1023
    [   ,  ,"Hadi", 6, {name: "Ali"},  ,  6, ,6 20  ,{name: "Hadi"}..., 1023]
*/


let names = ["Hadi", "Ali", "Arvin"]

let newNames = names;

let literaliNewNames = ["Hadi", "Ali", "Arvin"]

console.log(names)
console.log(newNames);
console.log(literaliNewNames)

names.push("Zeinab")

console.log(names)
console.log(newNames);
console.log(literaliNewNames)
console.log(names === newNames)
console.log(names === literaliNewNames)



let myName = "Hadi"
let myName2 = myName;

myName = "Ali"

console.log(myName, myName2)





let hadi = {
    name: "Ali",
    lastName: "Taba",
    sister: {
        name: "Mahsa",
        lastName: "Rezaei"
    }
}
let zahra = {
    name: "Ali2",
    lastName: "Rezaei",
    brother: hadi
}
let student = {
   person: zahra 
}




zahra.brother.name = "Ali"
student.person.name = "Ali2"
hadi.sister.name = "Mahsa"

console.log(zahra.name)
// "Mahsa" X
// "Zahra" X
// "Ali2" Correct
console.log(hadi.name)
// "Ali"
// 

console.log(zahra.brother === hadi)

// console.log(hadi)
// console.log(student)


let myObj = { foo: "salam" }
let myObj2 = myObj

// 

let copyOfMyObj = JSON.parse(JSON.stringify(myObj))
let copyOfMyObj2 = structuredClone(myObj)

console.log('===========')
console.log(myObj2 === myObj) // true
console.log(copyOfMyObj === myObj) // false
console.log(copyOfMyObj2 === myObj) // false

let copiedObj = {}
for(let property in myObj) {
    copiedObj[property] = myObj[property]
}
// copiedObj = { foo: "salam" } 

console.log(copiedObj === myObj) // false



let myObj5 = { foo: "salam", bar: ["hadi"], person: { name: "Hadi "} }
let myObj6 = myObj5

let copiedObj5 = {}
for(let property in myObj5) {
    copiedObj5[property] = myObj5[property]
    // variable = myObj5.bar
}

myObj5.bar.push('Hello')

copiedObj5.bar // ["hadi", "Hello"]
console.log({"isCopiedObj5EqualToMyObj5" :copiedObj5 === myObj5}) // false
console.log(myObj5.bar === myObj6.bar) // true
console.log(myObj5.bar === copiedObj5.bar) // true

// Shallow Clone - کپی کردن سطحی - کم عمق
    // Manual loop
// Deep Clone - کپی کردن عمیق
    // structuredClone, JSON.parse(JSON.stringify()) 



// JSON (JavaScript Object Notation)
// Notation -> دست خط ->‌ string
let person = { name: "hadi" }
let data = '{ "name": "hadi" }'

let str = JSON.stringify(person)
console.log(str, str.length, str.charCodeAt(3))
let obj = JSON.parse('{"name":"hadi"}')

let fromStrPerson = JSON.parse(JSON.stringify(person))

console.log(obj)


// WWW-X-URL-Encoded
// "key1=value1&key2=value2&key3=value3"

// MultiPart-FormData


// Marshall ~ Parse Un-Marshal ~ Stringify


let result = true;

console.log("result:")
console.log(result)

console.log("result:" + result)

console.log("result:", result)

console.log({ booleanResult: result })

console.log({ name: "Hadi" })







// function - توابع
// f(x) = x + 2 Declration - تعریف // x ?
// 4 // 4 // x == 2
// f(5) // 7 // x == 5

function plusTwo(operand) {
    let result = operand + 2

    return result

    // console.log("You Cant See Me!")
    // return
}

let res = plusTwo(5) // () Operator, 1 + 2 3! plusTwo
console.log(res)
console.log(plusTwo(5))
let res2 = plusTwo(10)

let myNum = 5;


function calculate(operator, firstOperand, secondOperand) {
    console.log({ operator, firstOperand, secondOperand })
    
    if(operator !== '+' && operator !== '-') {
        return null
    }

    // secondOperand === undefined
    if(operator === '+') {
        return firstOperand + secondOperand
    } else if (operator === '-') {
        return firstOperand - secondOperand
    }
}

let res5 = calculate('asghar', 10) // 10 + -1 = 9
console.log(res5)

// Missing Argument: Function needs at least 3 arguments!
// Too Many Arguments!


function sumOfItems(listOfNumbers) {
    // [1, 2, 3, 4, 5]
    // [-1, -2, -3, 0]
    let sum = 0;
    for(let item of listOfNumbers) {
        sum += item
    }

    return sum
}

sumOfItems([-1, 1]) // 0
sumOfItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // 55


sum(1)
sum(1, 2)
sum(1, 2, 3, 4, 5)

// Next Session:
// Optional Arguments ( Default Values )
// No Return Value
// Un-Determined number of arguments