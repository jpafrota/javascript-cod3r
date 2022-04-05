function Pessoa (nome = '') {

    // if you do not use this attribution, you won't be able to directly acces 'nome' variable anymore.
    this.nome = nome

    this.falar = function() {
        console.log(this.nome)
    }

}

const p1 = new Pessoa('Jorge')
p1.falar()

console.log(p1.nome)