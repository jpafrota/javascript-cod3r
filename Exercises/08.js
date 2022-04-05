relatorio = function (listaDePontos) {

    listaDePontos = listaDePontos.split(', ')

    let maiorPontuacao = listaDePontos[0]
    let menorPontuacao = listaDePontos[0]
    let qtdQuebraRecordes = 0
    let piorJogo = 1

    for(i = 1; i < listaDePontos.length; i++) {

        if(listaDePontos[i] > maiorPontuacao) {
            maiorPontuacao = listaDePontos[i]
            qtdQuebraRecordes++
        }
        else if (listaDePontos[i] < menorPontuacao) {
            menorPontuacao = listaDePontos[i]
            piorJogo = i + 1
        }

    }

    return [qtdQuebraRecordes, piorJogo]

}

console.log(relatorio("1, 30, 40, 20, 4, 51, 25, 42, 38, 56, 1"))