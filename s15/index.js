// Promise
/*
    عدم قطعیت
    - نمی‌دونیم چه زمانی اتفاق میفتن یعنی نمی‌دونیم چقدر براش صبر کنیم
    - نمی‌دونیم کاره موفقه یا نا موفق
    - کار async (asynchronous)

    کاری که همون لحظه براش صبر می‌کنیم و ادامه نمی‌دیم
    تا کار تموم بشه می‌گیم 
    sync (synchronous)
*/

// Promise States:
/*
    Pending - کار شروع شده ولی هنوز تموم نشده
    Resolved/Fulfilled - کار تموم شده و موفق بوده
    Rejected - کار تموم شده و ناموفق بوده
    Settled - کار تموم شده - Resolved(Fullfilled) or Rejected
*/  

// let success = false;
// let error = ''

// setTimeout(() => {
//     const randomNum = Math.random();
//     console.log("Hello World ", randomNum)
//     if(randomNum <= 0.5) {
//         // reject();
//         error = 'Errored'
//     } else {
//         success = true
//         // resolve();
//     }
// }, 1500)

// while(!success) {
//     if(error) {
//         break;
//     }
// }



// if(success) {
//     console.log('Succesed');
// } else if (error) {
//     console.log(error)
// }



function createTimeoutPromise(ms = 1000) {
    return new Promise(
        // executor function
        function(resolve, reject) {
            // کار غیر قطعی رو اینجا بنویس
            setTimeout(() => {
                const randomNum = Math.random();
                if(randomNum <= 0.5) {
                    reject();
                } else {
                    resolve();
                }
            }, ms)
        }
    )
}

let p1 = createTimeoutPromise(1000);
let p2 = createTimeoutPromise(2000);
// let p3 = createTimeoutPromise(1500);
// let p4 = createTimeoutPromise(500);
// let p5 = createTimeoutPromise(2100);

p1.then(() => {
    console.log('P1 Resolved')
}).catch(() => {})

p2.then(() => {
    console.log('P2 Resolved')
}).catch(() => {})

p1.catch(() => {
    console.log('P1 Rejected')
})

p2.catch(() => {
    console.log('P2 Rejected')
})
/*
    من یه پرامیس جدید بهت برمی‌گردونم که:
    اگه همه‌ی ورودی‌ها ریزالو بشن، منم ریزالو می‌شم
    با اولین ریجکتی، منم ریجکت می‌شم
*/
// let pAll = Promise.all([p1, p2])

// pAll.then((result) => {
//     let p1Result = result[0];
//     let p2Result = result[1];

//     console.log('All P1 and P2 Resolved')
// }).catch(() => {})

// pAll.catch((reason) => {
//     console.log('One of P1 or P2 Rejected')
// })

/*
    یه پرامیس جدید برمیگردونه که
    هیچوقت ریجکت نمیشه
    هر موقع تمام پرامیس های ورودی، ریزالو یا ریجکت شدن، اونم ریزالو میشه
    توی ورودی کالبک، به ما اطلاعات نتیجه پرامیس های ورودی رو می‌گه
*/
// let pAllS = Promise.allSettled([p1, p2])

// pAllS.then((result) => {
//     console.log(result)
//     console.log('All P1 and P2 Fullfilled')
// }).catch(() => {})

// pAllS.catch((reason) => {
//     console.log('One of P1 or P2 Rejected')
// })

/*
    یک پرامیس جدید برمیگردونه که:
    اولین پرامیس ورودی که ریزالو بشه، اونم ریزالو می‌شه
    اولین پرامیس ورودی که ریجکت بشه، اونم ریجکت می‌شه
*/
// let pRace = Promise.race([p1, p2])

// pRace.then((result) => {
//     console.log(result)
//     console.log('First P1 or P2 Resolved')
// }).catch(() => {})

// pRace.catch((reason) => {
//     console.log('First P1 or P2 Rejected')
// })



/*
    یه پرامیس جدید برمیگردونه که:
    اولین پرامیس ورودی که ریزالو میشه، اونم ریزالو میشه
    اگه همه ی پرامیسای ورودی ریجکت بشن، اونم ریجکت می شه
*/
// let pAny = Promise.any([p1, p2])

// pAny.then((result) => {
//     console.log(result)
//     console.log('First P1 or P2 Resolved')
// }).catch(() => {})

// pAny.catch((reasons) => {
//     const reasonP1 = reasons[0];
//     const reasonP2 = reasons[1];

//     console.log('All of P1 and P2 Rejected')
// })
// Promise.any();


// let p = Promise.resolve('fefnwefn')

// let p2 = Promise.reject('promise will always reject')


// console.log(p);

// p.then(
//     function callback(resolvedValue) {
//         console.log('Promise is Resolved ', resolvedValue)
//     }
// );

// p.catch(
//     function callback(reason) {
//         console.log('Promise Rejected')
//         console.log(reason)
//     }
// );

// p.finally(
//     function callback() {
//         console.log('Promise Fullfilled')
//     }
// );
