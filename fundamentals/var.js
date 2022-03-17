// Variable declarations with var produces Global or Function scoped variables.

{
    {
        {
            var a = 32
        }
    }
}

console.log(a)

function teste(){
    // We can change the variable's value inside the function
    // and it will not reflect on the global scope.
    var a = 2
    console.log(a)
}

teste()
console.log(a)