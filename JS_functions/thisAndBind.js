const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()

// Code blow prints 'undefined' because the 'this' keyword has been changed
// in this case, 'this' belongs to the scope of the function call (global)
const falar = pessoa.falar
falar()

// you can bind the 'this' from 'pessoa' with 'bind' function.
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

// arrow functions are always binded with the scope it had when it was first declared
const pessoa2 = {
    saudacao: 'Boa tarde',
    falar: () => console.log(this.saudacao) // undefined, becase 'this' scope is from the anonymous function, not the object
}
pessoa2.falar()

const falar2 = pessoa2.falar
falar2()