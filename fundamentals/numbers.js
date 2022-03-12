const peso1 = 1.0
const peso2 = Number('2.0') // Casting

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // retorna true devido ao casting

const nota1 = 9.7532
const nota2 = 8.7634

console.log(nota1)
console.log(Number.isInteger(nota1)) // apesar de ser Number, numeros decimais não são integers.

const total = (nota1 * peso1 + nota2 * peso2)
const media = total/(peso1 + peso2)
console.log(media)

console.log(media.toFixed(2)) // Controle de casas decimais usando toFixed
console.log(media.toString(2)) // Transformar o número em binário
