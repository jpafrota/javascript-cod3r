const prod1 = {} // empty object

prod1.nome = 'Cellphone 1' // attribute created dynamically

// In JS, an object is a collection of keys and values

console.log(prod1)

// You can have String-named attributes using []. See below:
// This is NOT recommended
// You should avoid string-named attributes
prod1['Charger Type'] = 'Type C'
console.log(prod1)

// You can create an object
const prod2 = {
    nome: 'Camisa Polo', 
    preco: 79.90
}

// Please note that, although an object is very similar to a JSON, it is not the same.
// JSON is a textual notation, which is made primarily of Strings.
// Check out a JSON Example below:
// '{"nome": "Camisa Polo", "preco": 79.90}'

console.log(prod2)