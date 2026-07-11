function generate() {
    function result(num) {
        console.log("Result Called")
        return num;
    }

    return result
}

const generatedResult = generate()

let resultNumber = generatedResult(10)
console.log({ resultNumber })



// Array Methods
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newArrLength = numbers.push(11)
// let newNewArrLength = numbers.push(12, 13, 14, -1)
// let removedNumber = numbers.pop()

function callbackFn(item, index, originalArray) {
    console.log("Callback Function Called", item , "IDX:", index)
}
/*
    تابع ورودی را به ازای هر عضو آرایه فراخوانی می‌کنه
*/
numbers.forEach(
   callbackFn
)

/*
    تابع ورودی را به ازای هر عضو آرایه فراخوانی می‌کنه
*/
numbers.forEach(
    function caller(item, index, originalArray) {
        console.log("Callback Function Called", item , "IDX:", index)
    }
)

numbers.forEach(
    (item, index, originalArray) => {
        console.log("Callback Function Called", item , "IDX:", index)
    }
)

// callbackFn(1)
// callbackFn(2)
// callbackFn(3) ...

for(let i = 0; i < numbers.length; i++) {
    const item = numbers[i];

    console.log("For Iteration Called." , item, "IDX:", i)
}





let names = [
    "Arvin",
    "Abolfazl",
    "Razieh",
    "Zeinab"
]

let firstChars = []

names.forEach(
    function callback(name) {
        const firstChar = name[0];
        firstChars.push(firstChar)
        console.log(firstChar)
    }
)
console.log(firstChars)


// forEach, map, filter, every, some, reduce

// forEach, input: callbackFn, thisArg | returnVal: undefined
// map, input: callbackFn, thisArg | returnVal: new Array

/*
    به ازای هر عضو آرایه، تابع کالبک را فراخوانی می‌کند، خروجی تابع کالبک را
    به عنوان عضو متناظر در آرایه جدید قرار می‌دهد
*/
let newNumbers = numbers.map(
    function callbackFn(item, index) {
        return item * 3
    }
)

console.log(numbers)
console.log(newNumbers)
// 1 => let res1 = callbackFn(1, 0) => [res1, ]
// 2 => let res2 = callbakcFn(2, 1) => [res1, res2, ... ]

let newNewNumbers = []
for(let i = 0; i < numbers.length; i++) {
    let item = numbers[i];
    let newItem = item * 3;
    newNewNumbers.push(newItem)
}
console.log(newNewNumbers);


// .filter
/*
    به ازای هر عضو آرایه اصلی، تابع ورودی فراخوانی می شه.
    اگه تابع ورودی، مقدار توروثی برگردونه، اون عضو توی آرایه جدید لحاظ می‌شه
    اگه مقدار فالسی برگردونه، اون عضو توی آرایه جدید لحاظ نمی‌شه.
*/
let filteredNumbers = numbers.filter(
    function callbackFn(item, index) {
        return item % 2 === 0;
    }
)

let filteredNumbers2 = numbers.filter(
    function callbackFn(item, index) {
        return true
    }
)

let filteredNumbers2 = numbers.filter(
    function callbackFn(item, index) {
        return false
    }
)

console.log(filteredNumbers)

// some, every: input: same as before, output: true | false

let evenNumbers = [0, 2, 4, 6, 8, 10]
let res3 = evenNumbers.some(
    function callbackFn(item, idx) {
        return item % 2 === 1
    }
)

let res4 = evenNumbers.every(
    function callbackFn(item) {
        return item % 2 === 0;
    }
)



function multiplyByTwo(item) {
    return item * 2
}

function isGreaterThanTen(item) {
    return item >= 10
}

function isGreaterThanTwentyFive(item) {
    return item >= 25
}

// [1, 2, ..., 9, 10]
let finalResult = numbers
.map(multiplyByTwo)
.filter(isGreaterThanTen)
.some(isGreaterThanTwentyFive)
// [2, 4, 6, 8, ..., 16, 18, 20]

// [10, 12, 14, 16, 18, 20]




// reduce INPUT: callbackFn, initialValue Output: Anything!

let result = numbers.reduce(
    function callbackFn(accum, item, index) {
        return accum + item
    },
    0
)

let newReducedNumbers = numbers.reduce(
    function callbackFn(accum, item) {
        accum.push(item * 2)

        return accum
    },
    []
)
console.log(newReducedNumbers)
// Item: 1 Accum: 0 => Accum= 0 + 1 = 1
// Item 2 Accum: 1 => Accum=1 + 2 = 3
// Item 3 Accum: 3 => Accum=3 + 3 = 6
// Item 4 Accum: 6 => Accum=6 + 4 = 10
// ...
// Item 10 Accum: 45=>Accum=45 + 10 = 55
// return 55


// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// let accumulator = -1;
// accumulator = callback(accumulator, 1, 0)
// accumulator = callback(accumulator, 2, 1)
// return accumulator




let foundNumber = numbers.find(
    function callback(item) {

    }
)

let foundIndex = numbers.findIndex(
    function callback(item) {

    }
)


