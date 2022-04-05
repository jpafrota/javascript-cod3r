function bhaskara (a, b, c) { 

    let delta = Math.pow(b, 2) - 4 * a * c
    
    if (delta < 0) return 'Delta < 0.'
    
    let x1 = (-b + Math.sqrt(delta)) / 2 * a
    let x2 = (-b + Math.sqrt(delta)) / 2 * a
    
    let raizes = [x1, x2]
    
    return raizes
    
}
console.log(typeof bhaskara)
console.log(typeof bhaskara(1, 6, 9))
console.log(bhaskara(1, 6, 9))
console.log(bhaskara(3, -5, 12))