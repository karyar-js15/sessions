/* Web API */
/* 
    - DOM (Document Object Model)
    - CSSOM (CSS Object Model)
    - DOM Interactions (Events) (Click, Keyboard Navigation, ...)
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
containerElem.classList.add("jeijewf")
containerElem.classList.toggle("jeijewf")
containerElem.classList.toggle("jeijewf")
// containerElem.classList.remove("jeijewf")
// containerElem.classList.toggle("jeijewf")
let hasClass = containerElem.classList.contains("cards")
console.log({ hasClass })
// containerElem.className // "container salam hello chetori"

// containerElem.style.backgroundColor = "red"

// let containerStyles = getComputedStyle(containerElem)
// console.log(containerStyles.backgroundColor)


// Create Element
// Attribute Setup
// Child Management
// Style Management
// Add/Insert/Inject Element
// Remove Element




function createButton(text) {
    let btnElement = document.createElement("button")
    btnElement.classList.add("button", "button--primary")
    btnElement.setAttribute("type", "button")
    btnElement.setAttribute("aria-label", "Action Button")
    
    // let btnText = document.createTextNode("Click Me")
    btnElement.append(text)

    return btnElement
}


let clickMeButton = createButton("Click Me");

document.body.append(clickMeButton)
// containerElem.append(createButton("I'm Here"))



clickMeButton.remove()

// containerElem.innerHTML = "<button type='button' class='button button--primary'>Click Me</button>"
// containerElem.insertBefore(/* Node to add */, /* Some Child Node */)
// containerElem.insertAdjacentElement("", createButton())

/*
    <button> => <button class="button button--primary" type="button" aria-label="Action Button">
    

<button ....>
    Click Me
</button>
*/


function createBox() {
    let elem = document.createElement("div");
    elem.style.width = "100px"
    elem.style.height = "100px"

    // 0, 255 Math.random() => 0, 1, * 255 0, 255 Math.floor(24.349438535) 24

    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let backgroundValue = "rgb(" + red + "," + green + "," + blue + ")";
    
    elem.style.backgroundColor = backgroundValue

    return elem;
}

function fillPage() {
    containerElem.innerHTML = "";

    for(let i = 0; i < 100; i++) {
        let box = createBox();
        containerElem.append(box);
    }
}

// setInterval(() => {
    fillPage()
// }, 2000)

// Event - رویداد
// Event Listener - شنونده‌ رویداد
// Event Handler - واکنش دهنده به رویداد

// HTMLElement .addEventListener .removeEventListener

function handleClick(event) {
    console.log("Document Clicked")
    console.log(event)
    fillPage();
}

document.addEventListener("click", handleClick)

document.removeEventListener("click", handleClick)
//

























// console.dir(containerElem)
// console.log(containerElem.className) // attr class
// console.log(containerElem.id) // attr id
// console.log(containerElem.nodeName) // UPPERCASE Node name, ATTRIBUTE 
// console.log(containerElem.tagName) // UPPERCASE HTML Tag e.g SECTION
// console.log(containerElem.nodeType) // number, element, attribute, comment,
// console.log(containerElem.parentElement) // Parent HTMLBodyElement
// console.log(containerElem.parentNode) // Parent Node
// console.log(containerElem.title) // title attr
// console.log(containerElem.childElementCount) // 4
// console.log(containerElem.childNodes) // NodeList (ArrayLike) => List of element child nodes (Text Node, Attribute Node, HTMLELement Node)
// console.log(containerElem.children) // HTMLCollection (ArrayLike) =>  List of element child HTMLElement nodes (HTMLElement Node)
// console.log(containerElem.textContent) // تمام محتوای متنی خودش و فرزاندنش رو به هم می‌چسبونه و برمی‌گردونه
// console.log(containerElem.innerText) //
// console.log(containerElem.getAttribute("class"))
// console.log(containerElem.getAttribute("id"))
// // console.log(containerElem.getAttribute("class"))
// // containerElem.parentElement.parentElement
// // if(containerElem.nodeType === document.ELEMENT_NODE) {
    
// // } else if(containerElem.nodeType === document.ATTRIBUTE_NODE) {

// // }
// // document.ELEMENT_NODE
// // document.getElementById()
// let cardElems = document.getElementsByClassName("card")
// // HTMLCollection
// // cardElems.filter() // X
// // cardElems.map() // X
// // cardElems.length // 4
// // cardElems.item(1)

// console.dir(cardElems)
// // for(let i = 0; i < cardElems.length; i++) {
// //     const cardElem = cardElems.item(i);

// // }

// // document.getElementsByTagName("div")
// // document.getElementsByName("salam") // HTMLCollection


// let elem = document.querySelector("section.container .card"); // Node Selector Path // HTMLElement
// let collectionOfElems = document.querySelectorAll("section.container .card"); // HTMLCollection



// // result [ { text: "Status: 404", imgUrl: "" } ]

// const cardElements = document.querySelectorAll("#cards .card")
// let result = []

// for(let i = 0 ; i < cardElements.length; i++) {
//     const cardElem = cardElements.item(i);
//     let text = cardElem.textContent.trim()
//     console.dir(cardElem)
//     let imageURL = cardElem.children.item(0).getAttribute('src');
//     let item = {
//         text,
//         imageURL
//     }

//     result.push(item)
// }

// console.log(result)