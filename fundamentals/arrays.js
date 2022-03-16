// In JS, the array is heterogenic: it accepts more than one type.
// But having more than one type in the array is heavily NOT recommended.

// The array does not have a fixed size.

const valores = [2.3, 3.2 , 4.9, 5.67]

// JS does not gives an error when the program tries to access invalid indexes.
console.log(valores[2], valores[4])

// you can easily add a new index to the array
valores[4] = 15
console.log(valores[4])

// if you add new values to a farther index, and JS will tell you that there are empty slots.
valores[10] = 7.85
console.log(valores)

console.log(valores.length)

// push adds new elements at the end of the array.
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// removes the last value from the array
valores.pop()

// removes a given position
delete valores[0]

console.log(valores)
console.log(typeof valores)