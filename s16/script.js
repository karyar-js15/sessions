console.log("Hello World")

function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3))

console.table({ name: "Hadi"})
console.log({ name: "Hadi", interests: ["JS", "HTML"]})

/* 
    Browser         VS                          Node JS
    (window Obj === globalThis).                --
    (localStorage, history, ...).               --
    ---                                         os
    ---                                         fs
    ---                                         child_process
    window === globalThis                       global === globalThis
    Users different versions(Browser Support)   Single version of where code runs
    setTimeout: number (id)                     setTimeout: NodeJS.Timeout (Object)
*/