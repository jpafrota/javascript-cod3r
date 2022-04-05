// A 'factory' function is a function that returns an object. It is used to instantiate new objects.

function criarPessoa(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
        // you don't need to repeat the name, you can just do:
        // name, 
        // preco
    }
}

console.log( criarPessoa('Geladeira', 1000.00) )
console.log( criarPessoa('Galaxy S22', 1399.90) )
