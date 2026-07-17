/*
    // TODO:
    - Scope (Global Scope, Function Scope, Block Scope)
    - Var 
    - Let VS Const VS Var

    - Context (this)
    - Function Context
    - Object Method Context
    - Arrow Function Context 
    - .bind. .call .apply

    - Call Stack (Stack?) - Event Loop

    - Promise
    - setTimeout/clearTimeout setInternal/clearInterval
*/







// Scope
// Scope Chain
// دیده شدن - دیدن

// Global Scope
let firstName = "Hadi"

// Function Scope
function foo() {
    // function scope

    function baz() {
        // function scope
    }
}

let bar = () => {
    // function scope
}

// Block Scope
// If, Else, For, While , Switch -> Block Scope


// Global Scope

if(true) {
    // IF Block Scope
} else {
    // IFElse Block Scope
}



function foobar() {
    // Function Scope
    // for() {
    //     // ForBlock scope
    //     if() {
    //         // IF block scope
    //     }
    // }

    // if() {
    //     // If Block scope
    // }
}




// Global

function calculate(a, b) {
    // Function Scope
    if(a > b) {
        // If Block
        return a + b
    }

    return a - b
}

const res = calculate(10, 20);
if(res < 10) {
    // If Block
    let foo = {
        name: "hadi"
    }
    console.log(foo)
}






let a = 20;
// Scope Global
function printName() {
    // Function Scope
    let b = 10;
    let d = 20;
    let person = {
        a: "10",
        name: "Hadi",
        lastName: "Tabatabaei",
        getName: function() {
            // Function Scope
            if(person.name && person.lastName) {
                let a = 50;
                // IF Block
                return person.name + ' ' + person.lastName
            } else {
                let c = 50;
                let foo = b * d - a + c
                // IFELSE Block
                return ''
            }
        },
        score: {
            deepScore: {
                getScorer: function() {
                    // Function Scope
                    return 10
                }
            }
        }
    }
    console.log(person.getName())
}

// پیدا کردن متغیرها یا دیده شدن متغیر‌ها
// یعنی آیا من می‌توانم متغیری که تعریف کردم را ببینم و استفاده کنم ؟

/*
    متغیر در یک اسکوپ، می‌تواند متغیر‌ها در همان اسکوپ را ببیند.
    متغیر در اسکوپ عمیق‌تر/پایین‌تر، می‌تواند متغیر در اسکوپ‌های بالاتر/سطحی‌تر از خودش را ببیند
*/


// let VS var VS const

// let => متغیر با اسکوپ بلاک تعریف می‌کنه
// var => متغیری با اسکوپ تابع تعریف می‌کنه
// const => متغیری با اسکوپ بلاک تعریف می‌کنه

function foo() {
    let c = 40;

    if(true) {
        let a = 10;
        var d = 50;
    } else {
        let b = 20;
        console.log(d)
    }
}

function foo() {
    let c = 40;
    var d;

    if(10 > 2) {
        let a = 10;
        d = 50;
    } else {
        let b = 20;
        // console.log(d)
    }
}









function foo() {
    let c;
    c = 40;
    let a = 25;

    if(false) {

        let a = 10;
        var d = 50; // Hoisted to the scope of the foo function
    }

    function inner() {
        let b = 20;
        let a = 30;
        // Variable Shadowing
        console.log({ a })
        // console.log({ d })
    }

    inner();

}

foo();



// Let:
/*
    Let:
        Block Scope
        Can Re-Assign
        TDZ (Temporal Dead Zone)
        // شما قبل از اینکه متغیر رو برای بار اول بخونید،
        // حتما باید بهش اساین کرده باشید
        // Can not read/access a before initialization
    
    Var: 
        Function Scope
        Can Re-Assign
        Hoisted
        No TDZ
    Const:
        Block Scope
        Can't Re-Assign
        TDZ (Temporal Dead Zone)

*/
