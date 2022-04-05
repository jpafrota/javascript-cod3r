function Carro (maxSpeed = 200, delta = 5) {

    // private attribute, due to 'let' prefix
    let velocidadeAtual = 0

    // when using 'new' keyword, all the code inside this Function (Class) is executed
    console.log('Created new Carro!')

    // public method (due to 'this.' prefix)
    this.acelerar = function() {

        if (velocidadeAtual + delta <= maxSpeed) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = maxSpeed
        }

    }

    // public method (due to 'this.' prefix)
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }

    /**
     * You could also use 'const' or 'let' keyword to make methods 'private'.
     * Ex.:
     * 
     * const getVelocidadeAtual = function () { }
     */

}

// when using New, you can (if you want) call 'Carro' without parenthesis
const uno = new Carro
console.log(uno.getVelocidadeAtual())
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
console.log(ferrari.getVelocidadeAtual())
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
