// // Promise, Promise Chain

// function getFoo() {
//     return new Promise((resolve, reject) => {
//         resolve('foo')
//     })
// }

// function doWorkOne() { return new Promise() }

// function doWorkTwo() { return new Promise() }

// // getFoo() => doWorkOne() => doWorkTwo() => .then() => .catch
// // .then() => returns a promise
// getFoo()
//     .then(() => { return doWorkOne() })
//     .then(() => { return doWorkTwo() })
//     .then(() => {

//     })
//     .catch((err) => {
//         // error of getFoo
//         // error doWorkOne
//         // error doWorkTwo
//     })




// Fetch API
// HTTP Request: URL, Method, Headers, Body(Data)

// fetch('https://webhook.site/6418eb28-7b43-4887-8f31-6cc98485fee5')
// URL: 'https://webhook.site/6418eb28-7b43-4887-8f31-6cc98485fee5'
// Headers: {}
// Method: 'GET'
// Body(Data): null
// fetch('https://webhook.site/6418eb28-7b43-4887-8f31-6cc98485fee5', 
//     { method: 'post', headers: { 'X-Custom-Name': 'Hadi'}, body: JSON.stringify({ name: 'hadi' }) }
// )

const BASE_URL = 'https://api.uptimesignal.io';
const ENDPOINT_TEST_1 = BASE_URL + '/test/200';
const ENDPOINT_TEST_2 = BASE_URL + '/test/400';
const ENDPOINT_SLOW = BASE_URL + '/test/slow'

let isLoading = false;
document.getElementById('http').addEventListener('click', () => {
    if (isLoading) {
        return;
    }

    isLoading = true;
    fetch(ENDPOINT_TEST_2)
        .then((response) => {
            console.log(response)
            console.log(response.status)
            console.log(response.ok) // status !== 4** || status !== 5**
            const contentType = response.headers.get('content-type')
            console.log('Content Type:', contentType)
            response.json()
                .then((responeDataObj) => {
                    console.log(responeDataObj)
                    console.log(responeDataObj.powered_by)
                })
                .catch(() => {

                })
            // response.text()
        })
        .catch(() => {
            // مرورگر تضمین کنه که امکان ارسال درخواست وجود نداره
            console.log('Fetch Rejected')
        })
        .finally(() => {
            isLoading = false;
        })
})





function enhancedFetch(url, options) {
    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then((response) => {
                if (response.ok) {
                    response.json()
                        .then((responseObj) => {
                            resolve({
                                status: response.status,
                                body: resopnseObj
                            })
                        }).catch((error) => {
                            reject({ status: null, body: null, reason: 'Malformed JSON body' })
                        })
                } else {
                    response.json()
                        .then((responseObj) => {
                            reject({
                                status: response.status,
                                body: resopnseObj
                            })
                        }).catch((error) => {
                            reject({ status: null, body: null, reason: 'Malformed JSON body' })
                        })
                }
            })
            .catch((error) => {
                reject({ status: null, body: null, reason: 'Network Error' })
            })
    })
}

enhancedFetch(ENDPOINT_TEST_1)
    .then(response => {
        const status = response.status
        const body = response.body
        // Work with body
    })
    .catch((error) => {
        const status = error.status
        if(status) {
            const body = error.body
            // Work with body
        } else {
            const reason = error.reason
            // Work with Reason
        }
    })