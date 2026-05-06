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

/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const numeroPares = numeros.filter((numero) => {
    return numero % 2 === 0;
});

console.log(numeroPares)

const produtos = ["Mousse", "teclado", "monitor"];

const frases = produtos.map((produto) => {
    return `Produtos: ${produto}`
})
console.log(frases)

//use map para transformar um array de preços em preços com desconto de 10%


const precos = [100, 200, 300];


const desconto = precos.map((numero)=> {
    return numero * 0.9
});
console.log(desconto)

/*
//use map para transformar: [1,2,3,4] em ["número 1, "número 2"...]
const numeros = [1, 2, 3, 4];
const resultado = numeros.map((numero) => {
    return `Número ${numero}`
});
console.log(resultado);





//find


/*
const item = Array.find((Element) => {
    return condicao;
})





const maria = people.find((person) => {
    return person.name === "Maria"
});


const numeros = [5, 8, -2, 10, 7];
const negativo = numeros.find((numero) => {
    return numero < 0;
});

//Reduce
array.reduce((acc, element) =>{
    return novoACC;

}, valorInicial);

const numeros = [10, 20, 30];

const soma = numeros.reduce((acc, numero) =>{
    console.log("ACC:", acc)
    console.log("Numero atual", numero)
    return acc + numero
}, 0);
console.log(soma)


//reduce


const totalIdade = people.reduce((acc, person) => {
    return acc + person.age;
}, 0)
console.log(totalIdade)

*/
/*
const people = [
    {nome: "Lucas", age: 35},
    {nome: "Maria", age: 17},
    {nome: "João", age: 18},
    {nome: "Ana", age: 22},
];

const nomes = people.reduce((acc, person) => {
    return acc + " " + person.nome;
}, "");
console.log(nomes)

const numeros = [2,3,4]

const soma = numeros.reduce((acc, numero) =>{
    return acc * numero;
}, 1)


console.log(soma)
/*

*/
//Reduce
//Somar preços dos produtos

/*
const carrinho = [
    {produto: "mousse", preco:50 },
    {produto: "teclado", preco:100 },
    {produto: "mousse", preco:900 },
]

const total = carrinho.reduce((acc, produto) =>{
    return acc + produto.preco
}, 0)
console.log(total)

const palavra = ["oi", "javascript", "html"]

const contador = palavra.reduce((acc, letra) =>{
    return acc + letra.length
}, 0)
console.log(contador)
*/

//Reduce 
//Use reduce para descobrir: qual o maior número do array.
/*
const numeros = [10, 45, 7, 99, 32];

const maior = numeros.reduce((acumulador, atual) => {
    if (atual > acumulador) {
        return atual;
    }
    return acumulador;
});
console.log (maior);
*/

//Reduce 
/*
const produtos = [ 
    {nome: "Mouse", preco: 50 },
    {nome: "teclado", preco: 200 },
    {nome: "Monitor", preco: 900 },
    {nome: "Notebook", preco: 900 },
];

const resultado = produtos.filter((produto) => {
    return produto.preco > 100;
})
.map((produto) => {
    return produto.nome;
});
console.log(resultado);
*/

 //reduce
 /*
 const filmes = [
    {nome:"Vingadores", nota:9 },
    {nome:"Batman", nota:7 },
    {nome:"Dragon Ball", nota:10 },
    {nome:"Matrix", nota:8 },
 ];
 //use filter para pegar notas >= 8
const filmesBons = filmes.filter(filme => filme.nota >= 8);
console.log(filmesBons);

 //Use map para pegar nomes
 const nomes = filmes.map(filme => filme.nome);
console.log(nomes);

 //Use find para encontrar "batman"
 const batman = filmes.find(filme => filme.nome === "Batman");
console.log(batman);

 //Use reduce para somar todas as notas
 const somaNotas = filmes.reduce((acc, filme) => {
  return acc + filme.nota;
}, 0);

console.log(somaNotas);
*/

//Switch
/*
const dia = 3;

switch (dia) {
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda")
        break;
    case 3:
        console.log("Terca")
        break;

    default:
        console.log("Dia invalido!")
        break;
}
        */
//calculadora
/*
 const n1 = 10;
 const n2 = 5;

 const operacao = "+";

 switch (operacao) {
    case "+":
        console.log(n1 + n2);
        break;
    case "-":
        console.log(n1 - n2);
        break;
    case "*":
        console.log(n1 * n2);
        break;
    case "/":
        console.log(n1 / n2);
        break;
    default:
        console.log("Operacao invalida")
        break;
 } 
        */

 //Faca um sistema de notas:
 //A -> Excelente
 //B -> Bom
 //C -> Regular
 //D -> Ruim
/*
 const nota = prompt("Digite uma nota: A, B, C ou D");

 switch (nota) {
    case 'A':
        console.log("Excelente");
        break;
    case 'B':
        console.log("Bom");
        break;
    case 'C':
        console.log("Regular");
        break;
    case 'D':
        console.log("Ruim");
        break;
    default:
        console.log("Nota inválida");
        break;
}
*/

//Crie um sistema de menu de videogame:

//1 -> Jogar
//2 -> Configurações
//3 -> Créditos
//4 -> Sair

/*
let opcao;
do {
    opcao = Number(prompt(`
        === Menu ===
        1 - Jogar
        2 - Configurações
        3 - Créditos
        4 - Sair
        `)); 

        switch (opcao) {
            case 1:
                console.log("Iniciando jogo...")
                break;
            case 2:
                console.log("Abrindo configurações...")
                break;
            case 3:
                console.log("Criado por Guilherme Lima...")
                break;
            case 4:
                console.log("Saindo...")
                break;
        
            default:
                console.log("Operação Inválida!")
                break;
        }
    
} while (opcao !== '4')
 */

//Exercicios 05/05

// 1 - Dado o array const notas = [4, 7, 9, 3, 10, 5];, filtre apenas as notas maiores ou iguais a 7.

const notas = [4, 7, 9, 3, 10, 5];

const notasAprovadas = notas.filter((nota) => {
  return nota >= 7;
});

console.log(notasAprovadas);

// 2 -  Dado o array const palavras = ["sol", "mar", "computador", "lua", "código"];, filtre apenas as palavras com mais de 4 letras.

const palavras = ["sol", "mar", "computador", "lua", "código"];

const palavrasLongas = palavras.filter(palavra => palavra.length > 4);

console.log(palavrasLongas); 

// 3 - Dado o array const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];, filtre apenas os animais cujo nome começa com a letra "c".

const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];

const animaisComC = animais.filter(animal => animal.startsWith("c"));

console.log(animaisComC);

