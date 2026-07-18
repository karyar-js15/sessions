// this
console.log(this)
// Context 


function funcInGlobal() {
    console.log("FunctionInGlobal called");
    console.log(this)
}

let person = {
    name: "Hadi",
    getLastName() {
        console.log("getLastName Called");
        console.log(this)
        this.age = 26;
        return "Tabatabaei"
    },
}

funcInGlobal();
person.getLastName()
console.log(person)

let originalGetLastName = person.getLastName;

originalGetLastName()

// Function Declaration: function() {}
/*
    مقدار دیس بر اساس جا/نحوه‌ی فراخوانی تابع تنظیم می‌شه
    به شکل متد روی آبجکت فراخوانی کنم:
    this === object
    person.getLastName()

    به شکل خام فراخوانی بشه، مقدار دیس می‌شه آبجکت گلوبال
    let originalGetLastName = person.getLastName;

    originalGetLastName()
*/

// Arrow Function: () => {}
/*
    مقدار دیس می‌شه مقدار دیس اسکوپ بالا سرش

*/
    // Global Scope

    function foo() {
        // Function Scope
        // this = { hello: "World" }
        this.hello = "World"

        let foo = () => {
            // Function Scope
            console.log(this);
        }
    }

// Function Scope
// Block Scope
// Global Scope

// Global

this.target = "Ali"
function printCourse() {
    this.target = "Morteza"

    let person2 = {
        student: {
            course: {
                print: () => {
                    console.log(this.target)
                }
            }
        },
        target: "Mehman",
        getName() {
            console.log(this.target)
        },
        setName: () => {
            this.target = "Morteza"
        }
    }

    person2.setName()
    person2.student.course.print() // Correct: "Morteza"
    person2.getName() // "Mehman"
}

printCourse()




let names = ["Hadi", " Abolfazl", "Razieh", "Saeed"]
// Global Scope
function printAllValues() {
    // Function Scope
    this.hello = "World"
    names.forEach(
        (item) => {
            // Function Scope
           console.log(item)
           console.log(this) 
        }
    )
}

printAllValues()




// call, apply, bind
function sum(a, b) {
    console.log(this)
    console.log(a + b)
    return a + b
}


// call(thisArg, arg1, arg2, arg2, ...)

// sum(1, 2)
let res1 = sum.call({ name: "Hadi"}, 1, 2)
let res2 = sum.apply({ name: "Asghar"}, [1, 2])
let newSum = sum.bind({ name: "Taghi"})

let res3 = newSum(1, 2)
//






Queue - صف
// FIFO Queue = First In First Out
// <= Tail.      Head =>
// [third, second, first]
// enqueue به موجود به ته صف اضافه کن
// dequeue سر صف رو بردار
enqueue("A")
enqueue("B")
enqueue("C")
size() // 3
// [C, B, A]
dequeue()
size() // 2
    // [C, B]
dequeue()
size() // 1
    // [C]
dequeue()
size() // 0
    // []
dequeue() // 


// LIFO ~ Stack ~ پشته
// Last In First Out
// push ~ به سر صف یه موجود اضافه کن
// pop ~ اون موجودی که سر صف هست رو بنداز بیرون
// peek ~ اون موجودی که سر صف رو برگردون
// size ~ چند نفر توی صف هستن


// Call Stack

function bar() {
    console.log("Hello")
}

function foo() {
    baz()
    //
}

function baz() {
    bar()
}

foo()


// Global => Foo => Baz => Bar => console.log()

/*
    Global
*/