/*
    LocalStorage 
    Cookie
    SessionStorage
*/

/*
    LocalStorage

    window.'localStorage'.setItem()
                         .getItem()
                         .clear()
                         .removeItem()

    5~10 MB
*/


let formElem = document.getElementById("form");
formElem.addEventListener('submit', handleSubmit)

document.getElementById('show-cookies').addEventListener('click', showCookies)

function handleSubmit(event) {
    event.preventDefault();
    const nameVal = event.target.name.value;
    console.log({ nameVal })
    localStorage.setItem('nameValue', nameVal)

    document.cookie = "name=hadi; max-age=3600; Secure; HttpOnly"
    document.cookie = "lastname=taba; max-age=3600"

    sessionStorage.setItem('submitted', 'true');
}

function showCookies() {
    console.log(document.cookie)
}

function init() {
    localStorage.removeItem('nameValue')
    // formElem.name.value = localStorage.getItem('nameValue')
}

init();


let person = { name: "hadi" }

localStorage.setItem('p', JSON.stringify(person))


let readValue = JSON.parse(localStorage.getItem('p'))
console.log(readValue)

// Theme
// Cache
// Some Form Data



// Cookie
/*
    Data Storage Between Client and Server
    Client (Browser) => HTTP Request => Sends Cookie to Server
    Server => Http Response (Set-Cookie: name="hadi") => Browser Sets Cookie

    // divar.ir => app.divar.ir
    // divar.ir => digikala.com

    // name, value
    // Domain: 'app.divar.ir' => app.divar.ir OK, foo.divar.ir NO, hadi.divar.ir NO
    // Path: '/admin' 
    // Expires 1PM
    // Max-Age 3h
    // HttpOnly (true | false)
    // HttpOnly: true => Use and modify(Send to server and Receive from server) this cookie ONLY FROM HTTP REQUESTS AND NOT JS (document.cookie)
    // Secure: true | false    

    ~4KB
*/



