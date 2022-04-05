function potencia(base, expoente) {

    if (expoente == 0) return 1;

    let res = base
    for(let i = 1; i < expoente; i++) {
        res *= base
    }

    return res

}

console.log(potencia(2, 0))
console.log(potencia(2, 1))
console.log(potencia(2, 2))
console.log(potencia(2, 3))