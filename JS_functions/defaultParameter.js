// #### GENERATING DEFAULT PARAMETER VALUES ###

// Strategy 1
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(
    soma1(),
    soma1(3),
    soma1(1, 2, 3),
    soma1(0,0,0) // when comparing 0s and 1s, the default parameter expression becomes a boolean expression. so this returns 3
)

// Strategy 2, 3 and 4
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // checks if the second argument is present in the function. otherwise, b = 1.
    c = isNaN(c) ? 1 : c // this is the best strategy (excluding ES2015 below)
    return a + b + c
}

console.log(
    soma2(),
    soma2(3),
    soma2(0,0,0),
    soma2(1, 2, 3)
)
    
// ES2015 default parameter strategy
    
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
    
console.log(
    soma3(),
    soma3(1, 2),
    soma3(3),
    soma2(0,0,0),
    soma3(1, 2, 3),
    soma3(1, 2, 3, 4)
)