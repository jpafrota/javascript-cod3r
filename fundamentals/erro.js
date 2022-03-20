function tratarErroELancar(erro){
    // throw new Error('Processing Error')
    // throw 10
    // throw true
    // throw 'message'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) { 
    
    try{
        console.log(obj.name.toUpperCase() + "!!!!")
    } catch (e) {
        tratarErroELancar(e)
    } finally { // This will be always executed, even if there were no errors.
        console.log('Done')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)