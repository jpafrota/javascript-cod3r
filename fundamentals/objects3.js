console.log(Math.ceil(6.1))

const obj1 = {}

obj1.nome = 'Bola'
//obj1['nome'] = 'Bola' // this notation is also valid for creating or changing attribute value

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

console.log(Obj)

const obj2 = new Obj('cadeira')
console.log(obj2)