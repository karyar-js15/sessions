// global
// window
// globalThis
// console.log(global)

// Event Loop: Call Stack + Event(Task) Queue + (OS(C++) Apis | Browser Api )


/*
     به محض اجرای کد جاوااسکریپت، یک آیتم اولیه به استک پوش می شه  
    با هر بار فراخوانی یک تابع، اطلاعاتی از اون تابع به استک پوش می‌شه
    به محض اینکه یک تابع اجراش تموم می‌شه، اون آیتم تابع از استک پاپ می‌شه
*/


function getName() {
    return "Hadi"
}

function sayHello() {
    let name = getName()
    console.log("My name is " + name)
}

// sayHello()



// for(let i = 0; i < 5; i++) {
//     console.log("Hello World")
// }


// Recursive Functions
// sum(1,100) = 1 + 2 + 3 + ... + 99 + 100
// sum(1,100) = sum(1,99) + 100
//            = (sum(1,98) + 99) + 100
//            ...
//            sum(1,1) + 2 + 3 ... + 100
//             1


let count = 0;
function sum(start, end) {
    count += 1;
    if(start === end) {
        return start
    }

    return (sum(start, end - 1) + end)
}

// let res = sum(1, 5)
        // = sum(1, 10000)

// Error:
// RangeError: Maximum Call Stack Size Limit Reached.
// Stack Trace
// Size: 6900

// try {
//     let res = sum(1, 10000);
// } catch (e) {
//     console.log('Stack Size', count)
// }


// حداقل بعد از اون زمان، تابع کالبک رو فراخوانی می‌کنه
setTimeout(
    function callback() {
        console.log("Called After 1s.")
    },
    5000
)

// while(true) {}

// console.log(sum(1, 3))

1 + 2;
//..

setInterval(
    function callback() {
        console.log("is calling every 1s.")
    },
    1000
)