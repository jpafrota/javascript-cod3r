const fs = require("fs")

const promise1 = new Promise(
    
)

const promise_um = fs.readFile('./1.txt', function(error1, data1) {
    return data1
})
const promise_dois = fs.readFile('./2.txt', function(error2, data2) { 
    return data2
})
const promise_tres = fs.readFile('./3.txt', function(error3, data3) {
    return data3
})

// Promise.all([promise_um, promise_dois, promise_tres]).then(soma) => {
//     console.log(soma)
// }

console.log(um + dois + tres)