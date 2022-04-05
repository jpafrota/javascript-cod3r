const valor = 'Global'

function minhaFuncao() {

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