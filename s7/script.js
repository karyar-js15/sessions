// Strings
// Each Char => Char Code 

let str = "jfwioef9r2u9. 9jf23f0"
        // 012.................20
let str2 = ''
let myName = "Hadi Tabatabaei"
let firstName = "Hadi"

console.log(str.length)
console.log(str2.length)
console.log(str[2]) // "w"

let countOfNine = 0;

for(let i = 0; i < str.length; i++) {
    let char = str[i];
    if(char === '9') {
        countOfNine++
    }
}
console.log(countOfNine)


console.log(str.at(0), str.charAt(10)) // []
console.log(myName.endsWith("ei"))
console.log(myName.endsWith("ie"))

console.log(firstName.startsWith("ha")) // false
console.log(myName.startsWith("Ha")) // true

console.log(myName.includes("adi"))
console.log(myName.indexOf("a"), myName.lastIndexOf("a"))

myName.indexOf("taba") // 9 // Hadi Tabatabaei

let newStr = firstName.padEnd(20, "*")
let newStr2 = firstName.padStart(20, " ")
console.log(newStr)
console.log(newStr2)
console.log(firstName)



console.log(firstName.toLowerCase())
console.log(firstName.toUpperCase())

// replace x
// replaceAll x
// slice x
// substring x
// trim 
// trimEnd

let sentence = "Hello World World"; // "lo W"

console.log(sentence)
let result = sentence.replace("World", "Donya")
console.log(sentence)
console.log(result)

let result2 = sentence.replaceAll("World", "Donya")
console.log(result2)

let str3 = "abcdefghijk"
let resSlice = str3.slice(1, 5) // start index: Inclusive شامل می‌شه
                             //  End index: Exclusive شامل نمی‌شه
let resSlice2 = str3.slice(1)

let resSlice3 = str3.slice(-1);

let resSlice4 = str3.slice(-3, -1);

let resSubStr = str3.substring(1, 5)

console.log(resSlice4)
console.log(resSlice3)
console.log(resSlice2)
console.log(resSlice)
console.log(resSubStr)
console.log(str3)
// sentence.splice()


// Leading: شروع شونده - اولیا
// Trailing: تموم شونده. - آخریا
// Traling Zeros - صفرای آخر
// 1938r90000
// Leading Zeros: 000032587285
let hadiWithSpace = "      hadi.      "
let noSpaces = hadiWithSpace.trim()
let noEndSpaces = hadiWithSpace.trimEnd() // Trailing ONLY
let noStartSpaces = hadiWithSpace.trimStart() // Leading ONLY

console.log(noSpaces)
console.log(noSpaces.length)
console.log(noEndSpaces)
console.log(noStartSpaces)


// let doesEndWithEi = myName.endsWith("ei");

// if(myName.endsWith("ei")) {

// }
// if(doesEndWithEi) {

// }

// String Comparison
// char code
// let res = "a" < "b";
//        97  < 98
// let result2 = "abcd" < "aFjk";
//             97 < 101
//             98 ?< 70

let alphabet = "abcdefghijklmnopqrstuvwxyz";
for(let i = 0; i < alphabet.length; i++) {
    let char = alphabet[i];
    console.log(char, alphabet.charCodeAt(i))
}

// Concat

let myFirstName = "Hadi"
let myLastName = "Tabatabaei"
let fullName = myFirstName.concat(myLastName) // +
console.log(fullName)
let myFullName = "Hadi" + " " + "Tabatabaei"

//  let enlgishA = String.fromCharCode(97)
//  console.log(enlgishA)
    

// if("a" < "b") {

// }


let res = firstName.repeat(3)
console.log(firstName)
console.log(res)

let firstName2 = "Hadi"
let result10 = ""
for(let i = 0; i < 3 ; i++) {
    // 0, 1 , 2
    result10 += firstName2 // "" + "Hadi" => "Hadi"
                           // "Hadi" + "Hadi" => "HadiHadi"
}
console.log(result10)
// hello helo