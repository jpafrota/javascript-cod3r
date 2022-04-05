class Pessoa {

    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é: ${this.nome}`)
    }

}

const p1 = new Pessoa('João')
p1.falar()

// one advantage of using factory functions is that we are not bound to 'this' scope management.
// it always has the scope of it's initial declaration.
const criarPessoa = nome => {

    return {
        falar: () => console.log(`Meu nome é: ${nome}`)
    }

}

const p2 = criarPessoa('Jorge')
p2.falar()