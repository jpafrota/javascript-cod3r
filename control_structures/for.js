let contador = 1

while (contador <= 10) {
    console.log(`contador: ${contador}`)
    contador++
}

for (let i = 0; i <= 10; i++) {
    console.log(`i: ${i}`)
}

// const notas = [1.2, 4.5, 6.7, 8.5]
// for (let i = 0; i < notas.length; i++){
//     console.log(`nota: ${notas[i]}`)
// }

// Iterates every 'slot' of the array, where 'i' is the value inside the indexes.
const notas = [1.2, 4.5, 6.7, 8.5, , 7.6]
for (nota of notas){
    console.log(`nota: ${nota}`)
}

/**
 * for...in loop where 'i' is the position
 * Note: for...in must NOT be used with array iteration, since the
 * order is arbitrary
 */
for (i in notas){
    console.log(`posicao: ${i}`)
}

const pessoa = { 
    nome: 'Joao', 
    idade: 23,
    peso: 3.45
}

/**
 * It makes more sense to use for..in when iterating objects
 */
for(let atributo in pessoa) {
    console.log(`${pessoa[atributo]}`)
}

/**
 * When creating iterative variables in loops, don't forget to use
 * 'let' so that the variable can't be accessed outside the loop
 */

console.log(i)
console.log(atributo) // throws exception