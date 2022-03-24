// Functions in JS are Fist-Class Objects (Citizens)
// Higher Order Functions

// JS treats functions as Data!!

// Literal declaration
function fun1() { }

// Store inside a variable
const fun2 = function () { }

// Store inside an array
const array = [
    fun1, 
    fun2, 
    function (a, b) { 
        return a + b 
    }
]

console.log(array[2](2,3))

// Store inside an object attribute
// Also, this is called a method in OOP. 
const obj = {}
obj.falar = function() { return 'opa' }
console.log(obj.falar())

// Pass function as parameter

function run (fun) {
    fun()
}

run(function () { console.log('Executing...') } )
// or: 
run ( () => console.log('Executing...') )

// A function can return/store another function
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

// calling function that's inside another function
soma(2, 3)(4)

// another example:
const cincoMais = soma(2, 3)
cincoMais(3)