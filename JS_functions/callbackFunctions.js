const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(elemento, indice) {
    console.log(`${indice + 1}. ${elemento}`)
}


/**
 * 'forEach' is a callback function that wil apply, in this case, 'imprimir' to each element of the array.
 * it will automatically pass the array element, and its index as arguments to the 'imprimir' function.
 */
fabricantes.forEach(imprimir) 