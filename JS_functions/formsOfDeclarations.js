console.log(soma(1, 2)) // works due to function hoisting.

// function declaration
function soma(x, y) { 
    return x + y
}

// function expression (storing anonymous function)
const sub = function (x, y) {
    return x - y
}
// hoisting does not work with function expressions
console.log(sub(1, 2))

// named function expression (not very common)
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 2))
