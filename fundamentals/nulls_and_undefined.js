/**
 * When we assign a variable value to another one, JS
 * passes it's Reference value. 
 * However, when working with PRIMITIVE TYPES, JS uses
 * passing by value.
 * 
 */

// Passing by reference example

let a = {}
let b = a

b.name = "Jorge"

console.log(b)
console.log(a)

// Passing by value example:

let c = 3
let d = c
d = 4

console.log(c)
console.log(d)

/**
 * Note that it prints a different value because we passed
 * c to d as a value, due to c having a primitive type (integer)
 * 
 * JavaScript has the primitive types: number , string, 
 * boolean, null, undefined, symbol and bigint 
 * and a complex type: object.
 * 
 * NOTE: Pass by reference in JS is treated as a pass by value.
 * Why? because it passes the variable's address as an argument.
 * In C++, however, when you pass a variable by reference, it actually
 * passes the variable itself, not a reference to it!.
 * In C, the behavior is similar to Js, where passing by reference
 * passes a pointer (reference) to a variable. 
 */

// undefined: non-initialized variables.
let valor 
console.log(valor)

valor = null // points to null
console.log(valor)
// console.log(valor.toString()) // throws an exception

console.log("Moving on...")
const produto = {}
console.log(produto.preco)
// console.log(produto.preco.a) // throws an exception because preco is not yet declared.
produto.preco = 3.45
console.log(produto.preco)
console.log(produto.preco.a) // now, produto.preco is declared.

// 'null' and 'undefined' both returns null
console.log(!!null)
console.log(!!undefined)