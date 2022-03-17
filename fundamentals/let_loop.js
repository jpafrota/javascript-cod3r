funcs = []


/**
 * When using 'let', for each instance of the loop, a new
 * i is created and 'stored' in the array.
 */
for(let i = 0; i < 10; i++){

    funcs.push(function (){
        console.log(i)
    })

}


funcs[0]()
funcs[1]()
funcs[2]()