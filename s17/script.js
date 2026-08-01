/* Web API */
/* 
    - DOM (Document Object Model)
    - CSSOM (CSS Object Model)
    - localStorage
    - cookie
    - fetch API (Http Request)
    - XHR (XMLHttpRequest => Http Request)
    - History API
    - Navigation API
    - Camera
    - Screen API
    - GeoLocation API
    - Internationalization API
*/

/*
    DOM API:
        - Read => Web Scraping
        - Write/Change => DOM Manipulation
*/

// window.document
// document
/*

*/

// Element => HTMLElement(Node)
// [] => NodeList, HTMLCollection

let containerElem = document.getElementById("cards") // HTMLElement
console.dir(containerElem)
console.log(containerElem.className) // attr class
console.log(containerElem.id) // attr id
console.log(containerElem.nodeName) // UPPERCASE Node name, ATTRIBUTE 
console.log(containerElem.tagName) // UPPERCASE HTML Tag e.g SECTION
console.log(containerElem.nodeType) // number, element, attribute, comment,
console.log(containerElem.parentElement) // Parent HTMLBodyElement
console.log(containerElem.parentNode) // Parent Node
console.log(containerElem.title) // title attr
console.log(containerElem.childElementCount) // 4
console.log(containerElem.childNodes) // NodeList (ArrayLike) => List of element child nodes (Text Node, Attribute Node, HTMLELement Node)
console.log(containerElem.children) // HTMLCollection (ArrayLike) =>  List of element child HTMLElement nodes (HTMLElement Node)
console.log(containerElem.textContent) // تمام محتوای متنی خودش و فرزاندنش رو به هم می‌چسبونه و برمی‌گردونه
console.log(containerElem.innerText) //
console.log(containerElem.getAttribute("class"))
console.log(containerElem.getAttribute("id"))
// console.log(containerElem.getAttribute("class"))
// containerElem.parentElement.parentElement
// if(containerElem.nodeType === document.ELEMENT_NODE) {
    
// } else if(containerElem.nodeType === document.ATTRIBUTE_NODE) {

// }
// document.ELEMENT_NODE
// document.getElementById()
let cardElems = document.getElementsByClassName("card")
// HTMLCollection
// cardElems.filter() // X
// cardElems.map() // X
// cardElems.length // 4
// cardElems.item(1)

console.dir(cardElems)
// for(let i = 0; i < cardElems.length; i++) {
//     const cardElem = cardElems.item(i);

// }

// document.getElementsByTagName("div")
// document.getElementsByName("salam") // HTMLCollection


let elem = document.querySelector("section.container .card"); // Node Selector Path // HTMLElement
let collectionOfElems = document.querySelectorAll("section.container .card"); // HTMLCollection



// result [ { text: "Status: 404", imgUrl: "" } ]

const cardElements = document.querySelectorAll("#cards .card")
let result = []

for(let i = 0 ; i < cardElements.length; i++) {
    const cardElem = cardElements.item(i);
    let text = cardElem.textContent.trim()
    console.dir(cardElem)
    let imageURL = cardElem.children.item(0).getAttribute('src');
    let item = {
        text,
        imageURL
    }

    result.push(item)
}

console.log(result)