function classificarTriangulo(a, b, c) {

    if (a == b && b == c) {
        console.log("Triângulo Equilátero")
    }

    else if (a == b || a == c || b == c) {
        console.log("Triângulo Isósceles")
    }
        
    else{
        console.log('Triângulo Escaleno')
    }

}

classificarTriangulo(2, 2, 2)
classificarTriangulo(1, 2, 2)
classificarTriangulo(2, 1, 2)
classificarTriangulo(2, 2, 1)
classificarTriangulo(2, 2, 2)
classificarTriangulo(1, 2, 3)