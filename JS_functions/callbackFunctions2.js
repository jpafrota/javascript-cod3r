const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// No callback
let notasBaixas = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// With callback
notasBaixas = notas.filter(nota => nota < 7)
/**
 * Or, alternatively, you could do: 
 * 
 * notasMenorQue7 = nota => nota < 7
 * notasBaixas = notas.filter(notasMenorQue7)
 */
console.log(notasBaixas) 