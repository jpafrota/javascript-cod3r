// Functions without returns

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // b will be undefined
imprimirSoma() // a and be will be undefined
imprimirSoma(2, 10, 4, 5, 7, 8) // a and b will have values, the other ones are ignored

/**
 * As you can see, JS does not care this much about
 * the amount of arguments passed to the function.
 * You can, also, pass any type of argument.
 * Be that a number, string, object, etc.
 */

// Funcao com retorno

// b will be 0 whenever he's not passed as an argument in the function call.
function soma(a, b = 0) {

    return a + b

}

console.log(soma(20,10))
console.log(soma(10))