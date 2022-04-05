// Closure is the scope created when a function is declared.
// It allows the function to access and manipulate external variables.

// Lexical context in action
const x = 'Global'

function fora() { 
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())