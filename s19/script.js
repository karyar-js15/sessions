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

let grandParentElem = document.getElementById('grandparent'); // div
let parentElem = document.getElementById('parent'); // div
let childElem = document.getElementById('child') // button



/*
    Default event listener:
        Terget is in Bubbling
*/

/* 
    TextNode
    HTMLElementNode
    AttributeNode

    Event
    PointerEvent
    KeyboardEvent
    ScrollEvent
*/
// grandParentElem.addEventListener("click", (event) => {
//     console.log("Grand parent clicked.")
// })

// parentElem.addEventListener("click", () => {
//     console.log("Parent clicked.")
// })

// childElem.addEventListener("click", (event) => {
//     event.stopPropagation();
//     console.log("Child clicked.")
// })

// grandParentElem.addEventListener("click", (event) => {
//     console.log("Grand parent clicked on capturing.")
// }, { capture: true })

// parentElem.addEventListener("click", () => {
//     console.log("Parent clicked capture.")
// }, { capture: true })

// childElem.addEventListener("click", () => {
//     console.log("Child clicked capture.")
// }, { capture: true })


// let listItemElements = document.querySelectorAll('ul#list li');
// console.log(listItemElements)

// for(let i = 0; i < listItemElements.length; i++) {
//     const listItemElem = listItemElements.item(i);

//     listItemElem.addEventListener('click', () => {
//         console.log('Item Index ' + i + ' Clicked')
//     })
// }

// let listElem = document.querySelector('ul#list');

// Event Delegation

// listElem.addEventListener('click', (event) => {

//     if(event.target.tagName === 'LI') {
//         // some item click
//         console.log(event.target.textContent)
//     }

//     // console.dir(event.target)
//     console.log('Something in the list clicked')
// })


// let linkElem = document.getElementById('link');

// linkElem.addEventListener('click', (event) => {
//     event.preventDefault();

//     event.defaultPrevented
//     console.log("google link clicked.")
// })


let modalElem = document.querySelector("#modal");


function openModal() {
    modalElem.style.display = "flex";
}

function hideModal() {
    modalElem.style.display = "none";
}

let openModalButton = document.querySelector("#modal-open");
openModalButton.addEventListener("click", (event) => {
    console.log("Button Clicked")
    event.stopPropagation();
    openModal(event);
})

document.addEventListener('click', () => {
    console.log("All document Clicked");
    hideModal();
})

modalElem.addEventListener('click', (event) => {
    event.stopPropagation();
})