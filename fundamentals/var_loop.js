funcs = []


/**
 * When using 'var', the variable i is defined only once
 * and it changes it's value throughout the program
 * when storing i inside the array, it keeps the updated value
 * for the variable.
 */

for(var i = 0; i < 10; i++){

    funcs.push(function (){
        console.log(i)
    })

}

funcs[0]()
funcs[1]()
funcs[2]()