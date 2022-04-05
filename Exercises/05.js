function formatarValorDecimal(valor) {

    console.log(`R$ ${valor.toFixed(2)}`.replace('.',','))

}

formatarValorDecimal(0.1 + 0.2)
formatarValorDecimal(0.234234)
formatarValorDecimal(0.05)