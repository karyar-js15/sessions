// Statement - دستور
// Conditional - دستورات شرطی
// Loop - دسوترات حلقه
// Expression - عبارت

// if
// if else
// if else if ...

// if (/* Expression */) {
    // If Block
// }
let MIN_AGE = 18;

let age = 20;

let isOld = age >= MIN_AGE

if(isOld) {
    console.log('You are old enough')
}

if(age > 17) {

}

if(isOld) {
    console.log('You are old enough')
} else {
    console.log('You are young!')
}

if(age <= 10) {
    // age <= 10

} else if (age <= 17) {
    // age > 10 && age <= 17

} else if (age <= 25) {
    // age > 17 && age <= 25

} else {
    // age > 25
}

// toBoolean => 10 => true
// if("d=wfijwef") {

// }

let value = "salam";
// value !== 0 !== null !== undefined
// value !== ""
if(value) {

}

if(0) {

}
// if (true) { }

// Switch Case

// switch (age) {
//     case 10:
//         console.log('Age is 10')
//         break;
//     case 20:
//         console.log('Age is 20')
//     case 30:
//         console.log('Age is 30')
//     default:
// }

// mode == 'Req' || 'Warn'
let mode = 'Req'

switch (mode) {
    case 'Req':
        console.log('efijwef')
        break;
    case 'Warn':
        console.log('eofwf')
        break;
    default:
        console.log('Mode is not valid')  
}

switch (mode) {
    case 'Req':
    case 'Required':
        console.log('Required')
        break;
    case 'Warn':
        console.log('Warning')
        break;
    case 'Nothing':
    default:
        console.log('mode is empty')
}

if(mode === 'Req') {

} else if (mode === 'Warn') {
    
} else {

}


// Loop (for, while, do while) - حلقه
// یک کار رو به دفعات زیاد/نامشخص

// شمارنده - counter
// شرط خروج بر اساس شمارنده
// خود فرمول
// خود کاری که باید انجام بشه

// How many times my code executes ? 10 9 10 10
for(let counter = 1; counter <= 10 ; counter += 1 ) {
    // My Code
}
// c = 1
// c = 2
// c = 3
// c = 4
// c = 5
// c = 6 => Break

// 7 7 1
for(let counter = -3; counter <= 3 ; counter += 1 ) {
    // My Code
    console.log('Run!')
}
// c = -3
// c = -2
// c = -1
// c = 0
// c = 1
// c = 2
// c = 3
// c = 4 => Break

// How Many Times ? 6 6 6 
for(let c = 0; c <= 10; c += 2) {
    // MyCode
}

// c = 0
// c = 0 + 2 = 2
// c = 2 + 2 = 4
// c = 6
// c = 8
// c = 10
// c = 12 => Break

// 100 بار
for(let c = 0; c < 100; c++) {
    // MyCode
}
// 100 بار
for(let c = 0; c <= 99; c++) {
    // MyCode
}

// 5 0 1 2 Infinite 1
for(let c = 5; c > 10; c++) {
    // MyCode
}

// Infinite 4
// for(let c = 0; c < 5; c -= 1) {
//     console.log(c)
// } // Infinite Loop - حلقه بینهایت

for(let c = 1; c < 100; c++) {
    if(c === 50) {
        break;
    }

    if(c % 2 === 0) {
        continue;
    }
    // console.log(c)

    // continue; // یک بار رو می‌پره
    // break; // از کل حلقه می‌پره بیرون
}

// for(let c = 1; c <= 49; c += 2) {
//     console.log(c)
//     // continue; // یک بار رو می‌پره
//     // break; // از کل حلقه می‌پره بیرون
// }

// console.log('Loop Broke.')

// یک شرط
// let c = 1;
// while (c < 99) {
//     // MyCode
//     // c++;
// }

// let c2 = 10;
// while (true) {
//     if(c2 <= -30) {
//         break;
//     }
//     c2 -= 1;
//     console.log(c2)
// }


// جمع ۱ تا ۱۰
let sum = 0;
for(let c = 1; c <= 10; c++) {
    sum = c + sum
}
// c = 1 sum = 0 => sum = 1
// sum = 1 + 0 => 1
// c = 2 sum = 1 => sum = 3
// sum = 2 + 1 = 3
// c = 3 sum 3 => sum = 6
// sum = 3 + 3 = 6
// c = 4 sum 6 => sum = 10
// sum = 4 + 6 = 10
// c = 5 sum = 10 => sum = 15
// c = 6 sum = 15 => sum = 21
// c = 7 sum = 21 => sum = 28
// c = 8 sum = 28 => sum = 36
// c = 9 sum = 36 => sum = 45
// c = 10 sum = 45 => sum = 55

// جمع اعداد فرد ۱ تا 50
// 1 + 3 + 5 + 7 + ... + 49 = ?
let sum = 0;
// Times ? 25
for(let c = 1; c <= 50; c += 2) {
    sum = c + sum
}

let sum = 0;
// Times ? 50
for(let c = 1; c <= 50; c++) {
    if(c % 2 === 1) {
        sum = c + sum
    }
}

// Times ? 50
for(let c = 1; c <= 50; c++) {
    if(c % 2 === 0) {
        continue;
    }

    sum = c + sum
}

console.log(sum)