// Optional Arguments, = 
// No Supply OR undefined
function sum(a, b = {}) {
    if(b !== null && typeof b === 'object' ) {
        b.name = 'hadi'
    }
}

// sum(10, null) // b == null
// sum(10) // b == 0
// sum(10, undefined) // b == 0
// sum(10, 20)

function log(a, b, c) {
    let actualA = a;
    let actualB = b;
    let actualC = c;
    if(a === undefined) {
        actualA = ''
    }

    console.log('Argument is ' + actualA)
}   

// log(10) // a == 10
// log() 



// let res = calc("salam", "chetori")
// let res2 = calc(10, 20)

function calc(a, b) /* number | void */ {
    // Early Return - ریترن زودهنگام
    if(typeof a !== 'number' || typeof b !== 'number') {
        return;
    }







    // Un Reachable Code
    console.log('Hello')
}

function foo() {
    console.log('Foo function is called');
}

// return udefined ~ return; ~ No Return


let res = foo()
// console.log(res)


// console.log('My Name is Hadi');


function myManyArgFunc(a, b, ...numbers) {
    // numbers: []
    console.log(numbers)
    let sum = 0;
    for(let number of numbers) {
        sum += number;
    }
    console.log(sum)
    return sum;
}

// myManyArgFunc(1) // 1 // numbers == [1]
// myManyArgFunc(1, 2) // 3 // [1, 2]
// myManyArgFunc(1, 2, 3) // 6 // [1, 2, 3]
// myManyArgFunc(-1, 0, 1, 1, 2) // 3 // [-1, 0, 1, 1, 2]


function calculate(operator, ...operands) {
    if(operator === '+') {
            console.log(operands)
            let sum = 0;
            for(let operand of operands) {
                sum += operand;
            }
            console.log(sum)
            return sum;
    }

    if(operator === '-') {
                    console.log(operands)
            let sum = 0;
            for(let operand of operands) {
                sum -= operand;
            }
            console.log(sum)
            return sum;
    }

    if(operator === 'x') {
                    console.log(operands)
            let sum = 0;
            for(let operand of operands) {
                sum *= operand;
            }
            console.log(sum)
            return sum;
    }
}


// calculate('+', 1, 2, 3, 4, 5, 6) // 21
// calculate('*', 2, 4, 6, -1) // -48

// function TitleBox(title, ...restProps) {
//     return <p {...restProps}>{title}</p>
// }



// Functions are Objects
// توابع یک نوع آبجکت هستن

function func2() {

    return {
        name: "Hadi"
    }
}
/*
    Object:
        add a property.
        remove a property.
        get a property.
        list of properties.
        pass between functions
        return value of a function
*/
// فانکشن‌ها آبجکت‌هایی هستن که یک بدنه‌ی قابل اجرا دارن، که با اوپراتور پرانتز اجرا می‌شه

func2()
let myName = func2.name

func2.customHadiProperty = 'Javascript'
console.log(func2.name)
console.log(func2)


func2().name // "Hadi"
func2.name // "func2"



function bar() {
    let res = {
        name: "hadi"
    }

    return res;
}

// console.log({ name: "Hadi" })




// Higher Order Function - توابع مرتبه بالاتر - Functional Programming
// Higher Order Something- یه چیزی مرتبه بالاتر
// اگه یه موجودی، از جنس خودش، برگردونه
// اگه تابعی، یک تابع برگردونه

function func1() {
    console.log("Function1 Called.")
    return function func12() {
        console.log('Function 1-2 Called.')
    }
}

let resFunc1 = func1()
resFunc1()

let numbers = [1, 2, 3, 4, 5, 6]

numbers.filter(
    function() {
        //efijweiofgj
    }
)

numbers.map(function(num) { return num + 2 })
numbers.map((num) => num + 2)

// addEventListener('click', function() {})

// setTimeout( function() {} )
// setTimeout( () => {} )



function createSummation(operand) {
    return function(targetNumber) {
        return targetNumber + operand;
    };
}

let sumByTwo = createSummation(2);
console.log(sumByTwo(5)) // 7
console.log(sumByTwo(10)) // 12
console.log(sumByTwo(-1)) // 1

// func1(5)("salam").folan
// Higher Order Component (HOC) - کامپوننت مرتبه بالاتر

// Array Method (.forEach, .filter, .map, .reduce, .every, .some, .find)


