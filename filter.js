//Filter

//callback
/*
array.metodo((element, index, array) => {

};)
*/
 //filter

//forEach

/*
const frutas = ["Maçã", "Banana", "Uva"];

// Correção 1: JavaScript diferencia maiúsculas de minúsculas. 
// "Element" com 'E' maiúsculo é diferente de "element" com 'e' minúsculo.
frutas.forEach((element, index) => {
    console.log(index, element);
});

// Correção 2: No loop for, o incremento deve ser "i++" (mais mais) e não "i==".
for (let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i]);
}

*/

/*
const alunos = ["Guilherme", "Maria", "João"];

alunos.forEach((nome, index) => {
    console.log(`${index + 1}º aluno: ${nome}`);
});
*/

/*
const people = [
    {nome: "Guilherme", age: 21},
    {nome: "Maria", age: 17},
    {nome: "João", age: 18},
    {nome: "Ana", age: 22},
];

const maiores = people.filter((person) => {
    return person.age >= 18;
});

console.log(maiores);
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const numeroPares = numeros.filter((numero) => {
    return numero % 2 === 0;
});

console.log(numeroPares)
