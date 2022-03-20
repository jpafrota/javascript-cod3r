// new resource of ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC', 
        numero: 1000
    }
}

// destructuring operator
/**
 * Destructuring extracts the attributes from an object
 * and stores in new variables with the same name as the object's attribute
 */
const { nome, idade } = pessoa

console.log(nome)
console.log(idade)

// You can change the name of the output variables.
const { nome: n, idade: i } = pessoa
console.log(n)
console.log(i)

// extracting nested attributes
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)