// Storing a function inside a variable

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Storing an arrow function inside a variable
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

// retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

// 'renaming' console.log function
const imprimir = a => console.log(a)

imprimir('Oiii' + 1)