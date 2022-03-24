function soma() {
    
    let soma = 0

    // 'arguments' is an array object which contains all the arguments passed to the function
    for(i in arguments) {
        soma += arguments[i]
    }

    return soma
}

console.log(soma(1,2))
console.log(soma(1,3,4))
console.log(soma(1))

