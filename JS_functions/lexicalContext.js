const valor = 'Global'

function minhaFuncao() {

    // becase 'valor' was not declared locally, the interpreter looks for the global declaration.
    // it cannot read exec()'s 'valor' variable since it does not have access to it's context
    console.log(valor)

}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

/**
 * When declaring functions, besides it's values and behaviors, it also stores the
 * function's declaration context. This is a 'closure' concept.
 */