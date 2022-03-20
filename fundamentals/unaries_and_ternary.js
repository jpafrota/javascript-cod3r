let num1 = 1
let num2 = 2

console.log(num1)
num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // num2 will be decremented after the comparison
console.log(num1 === num2)

// Below is the ternary operator.
let nota = 5
const stats = nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(stats)