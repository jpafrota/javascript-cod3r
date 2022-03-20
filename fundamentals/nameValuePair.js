// name/value pair
const saudacao = 'Opa' // lexical context 1

function exec(){

    const saudacao = 'Falaaaa' // lexical context 2

    return saudacao

}

// Objects are nested groups of key/value pairs
// Note that you can have keys with the same name, if they're from
// different contexts
const cliente = {
    nome: 'Pedro',
    idade: 32,
    endereco: {
        logradouro: 'Nice Stree',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)