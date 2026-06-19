// array (List of Anything):
// length - طول: number of array items (تعداد اعضای آرایه)
let myList = [] // Empty Array - آرایه خالی - length: 0
let myList2 = [1, 2, 3, "hadi", "salam", -10, [1, 2] ] 
             //0, 1, 2, 3,    , 4.     , 5,   6
// length: 7
// index, اندیس, i: شماره جایگاه‌های موجود در آرایه
// starts with 0,
let res = myList2[2] // Array Index Accessor Operator 
let first = myList2[0] // First Item
let last = myList2[6] // Last Item
console.log(res)
console.log(first)
console.log(last)

let res3 = myList2[10]

console.log(myList2[10])

myList2[3] = "Hanie"
console.log(myList2)

/*
    in many languages: Array length is fixed
    // Add more items => Throws Error
    // Access out of range index => Throws Error

    Javascript:
*/


let names = ["Hadi", "Arvin", "Abolfazl", "Razieh"]

for(let i = 0; i < 4; i++) {
    let name = names[i] // names[0] // names[1]
    console.log('Hi ' + name)
}

// DOT (.) operator
names.push("Saeed"); // PUSH

console.log(names) // [..., Saeed]

names.pop() // POP
    // [...]

console.log(names)

let numbers = []
for(let num = 1; num <= 10; num++) {
    numbers.push(num)
}
console.log(numbers)

let numbers2 = []
for(let i = 0; i < 10 ; i++) {
    numbers2.push(i + 1)
}
console.log(numbers2)

// length
let arr1 = ["salam", "chetori"]
let numLength = numbers.length // index last + 1
console.log(arr1.length) // 2

let arr2 = ["salam", "chetori"]
// arr2.length => 1 (last idx) + 1 => 2
console.log(arr2, arr2.length)
arr2[5] = "morteza"
console.log(arr2, arr2.length)
// ["salam", "chetori", EMPTY , EMPTY , EMPTY, "morteza"]
// arr2.lenth => 5 (last idx) + 1 => 6

let arr3 = ["a", [1,2,3,4], "c"]
arr3[1].length // 4
// 2D Array - Matrix
// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// [
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9]
// ]

// [
//     [0, 255, 0],
//     [100, 100, 100,],
//     [0, 0, 255]
// ]

// [
//     [255, 255, 0],
//     [255, 100, 100,],
//     [255, 0, 255]
// ]


let names5 = ["hadi", "Ali", "Mahsa"]

for(let i = 0; i < names5.length; i++) {
    // i = 0;
    // i = 1;
    // ... 
    let item = names5[i] // item
    console.log(item)
}
// 7 Items
// 0 1 2 ... 6 (.length - 1)
// 6 (.length - 1) 5 4 ... 0

console.log('------')
for(let i = names5.length - 1; i > -1 ;i--) {
    // i = 6
    // i = 5
    // i = 4
    console.log(names5[i])
}




