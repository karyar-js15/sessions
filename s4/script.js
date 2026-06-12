// Arithmetic
let x = 2 + 2;
let y = 3.25 * -740
let z = 5;
z++;

console.log(y)
console.log(2 ** -5)
console.log(1 / 3)
console.log(10 / 2)
console.log(10 % 3) // 3 * 3 + 1
console.log(z)

let result = "salam" * 2

let result2 = "5" * 2
// result2 type? number
// result2 ? 10

// Evaluation "5" * 2
// Evaluation toNumber("5") * 2
// toNumber("5") // 5
// Evaluation 5 * 2
// 10
// result2 = 10

// String => Number
// "salam" => NaN (Not a Number)
NaN * 2 // NaN
// result NaN
// NaN

"12" // 12
"1" // 1
"-3434" // -3434
"1salam" // NaN

// console.log(result)

// 1 930 843 895

// let x
// =
// 2 + 2 (Evaluation - ارزیابی)
// let x = 4
// x = 4

// operand1 + operand2 + operand3
// !, 3!, ++, 4++ // 5, 


// String Concatenation (Concat)
let name = 'Hadi Tabatabaei'
let result3 = "My Name Is: " + name

console.log(result3)
// "salamchetori"


// && (AND) 
// || (OR)
// ! (NOT)

let v = true
let res = true && true && false
let res2 = true || true || false

// let isOk = isString && isOkText


console.log((!v));
console.log(res)
console.log(res2)

// Comparison Operators (result: number, input: any)
// let x = 5 >= 1; // Semi-Colon

// let x = true
// == ()
/// === (both type AND value)
5 === 5 // true
5 === "5" // false // Strict Equal

"abc" == "lmno" // true or false
1 == 10 // Loose Equal

4 == "4234"
4 == 4234 // false
4 == "4" // 4 == 4 // true

// Assignment Operator
let myVar = 10

myVar -= 1 // myVar = myVar - 1
myVar /= 2 // myVar = myVar / 2
myVar += 2.25

// Declaration: let myVar;
// Assignment = myVar = 5

// (3 + 1 + "salam" + 2) 
// (5) // 5

// Precedence - اولویت و ترتیب

let myRes = ((5 * 3) + 7) && 2 || (3 / 2)
// 5 * 3 + 6++ && 2 || 1.5
// 5 * 3 + 7 && 2 || 1.5
// 15 + 7 && 2 || 1.5
// 22 && 2 || 1.5
// 2 || 1.5
// 2
// myRes = 2
// myRes will be 2

console.log(myRes)


// (string, boolean) => toNumber
// (boolean, number) => toString
// (string, number) => toBoolean

// Falsy Values
null // false
undefined // false
0 // false
"" // false
false // false

// Truthy Values
"    " // true
"false" // true
"0" // true
"true" // true
33358932 // true
-23423 // true

// 2 && "dekfjf" && 3 && 2324 // 2324
// 2 && "eijfewi" && null // null
// 2 || "dekfjf" || 3 || 2324 // 2
// 2 || "eijfewi" || null // 2
// null || 0 || "" // ""

