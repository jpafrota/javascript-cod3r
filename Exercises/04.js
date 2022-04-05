function divisao(dividendo, divisor) {

    let resto = dividendo % divisor
    let resultado = dividendo / divisor

    console.log(`Resultado: ${Math.floor(resultado)} | Resto: ${resto}`)

}

divisao(4, 2)
divisao(4, 1)
divisao(4, 3)