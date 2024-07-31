let notas = [100, 99, 84, 71, 62, 53, 44, 36, 37, 38, 39, 29]


function arredondar(nota) {

    // (5 - (nota % 5)) tells how much is left for 'nota' to reach 5. in case it is possible, note will be changed. (except when it is zero)
    if ((5 - (nota % 5)) < 3) {
        nota += (5 - (nota % 5))
    }
    
    return nota;

}

for (let nota of notas) {

    // In case the grade is less than 38, approval is not possible. Thus, the grade won't be changed.
    let notaCorrigida = nota
    if(nota >= 38) {
        notaCorrigida = arredondar(nota)
    }

    console.log(`Nota: ${nota}. Nota corrigida: ${notaCorrigida}`)

    if (notaCorrigida >= 40) { 
        console.log('Aprovado :)')
    }
    else {
        console.log('Reprovado :(')
    }

}