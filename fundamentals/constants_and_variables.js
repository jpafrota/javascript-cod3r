// Existem 3 formas diferentes de declarar variáveis no JS
// let - melhor maneira de declarar variáveis.
// as variáveis declaradas com let tem escopo de bloco.

// var - maneira antiga e não mais utilizada.
// as variáveis declaradas com var tem escopo global ou de função.
// isso pode causar erros no programa.

// const - declara constantes.
// constantes não podem ser alteradas posteriormente no código
// *obs: comportamento diferente quando se trata de objetos.

var a = 3;
let b = 4;
const c = 5;
console.log(a, b, c);

// let não deixa a variável ser redeclarada.
// var não tem tratativas contra isso.

var a = 2;
//let b = 6; // erro
b = 7;

console.log(a, b, c);