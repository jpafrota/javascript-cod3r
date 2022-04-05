function aplicacaoJurosSimples(capitalInicial, taxaJuros, tempo) {

    let rendimento =  capitalInicial * (taxaJuros / 100) * (tempo / 12);
    let aplicacao = capitalInicial + rendimento;

    console.log(`Apicação inicial: R$${capitalInicial} | Juros: ${taxaJuros}% ao ano (simples) | Total após ${tempo} meses: R$${aplicacao.toFixed(2).toString().replace('.',',')}`)

}

aplicacaoJurosCompostos = (capitalInicial, taxaJuros, tempo) => {

    // M = C(1 + i)^t
    let aplicacao = capitalInicial * Math.pow((1 + (taxaJuros/100)), tempo / 12)

    console.log(`Apicação inicial: R$${capitalInicial} | Juros: ${taxaJuros}% ao ano (compostos) | Total após ${tempo} meses: R$${aplicacao.toFixed(2).toString().replace('.',',')}`)

}

aplicacaoJurosSimples(4000, 10, 2)
aplicacaoJurosSimples(4000, 10, 12)
aplicacaoJurosCompostos(4000, 11.75, 2)
aplicacaoJurosCompostos(4000, 11.75, 12)