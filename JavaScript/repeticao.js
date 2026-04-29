/*
// contagem de 1 a 5


let contador = 1
while (contador <= 5) {
    console.log("contagem: ", contador);
    contador++
}


//contagem regressiva
console.log("Contagem regressiva");
let tempo = 10;
console.log(" contagem regressiva em...");
while (tempo > 0) {
    console.log(tempo);
    tempo--;
}
console.log("Feliz ano novo!");


//validação de Senha
const senhaCorreta = "123456";
let tentativa = "";
while (tentativa !== senhaCorreta) {
    tentativa = prompt("Digite a senha: ")
    if (tentativa === senhaCorreta) {
        alert("Senha correta")
    } else {
        alert("Senha incorreta")
    }
}


//somar numeros até ultrapassar 100
let soma = 0;
let numero = 1;
console.log("Somando numeros até passar de 100")
while (soma < 100) {
    soma += nnumero;
    console.log(`${numero} Soma parcial: ${soma}`)
    numero++
}
console.log(`\n precisou de ${numero - 1} numeros para ultrapassar 100`)
   
console.log(`\ soma final:  `+soma)


const numero = Number(prompt("qual numero: "))


if (Number.isNaN(numero)) {
    console.log("Digite um numero válido")
} else {
    let multiplicador = 1;
    alert(`Tabuada do ${numero} \n`)


    while (multiplicador <= 10) {
        const resultado = numero * multiplicador
        alert(resultado)
        multiplicador++;
    }
}


let x = 10
while (x < 5) {
    console.log("isso não vai aparecer")
}


let y = 10
do {
    console.log("Isso vai aparecer uma vez")
} while (y < 1);


//Me3nu interativo


let option;


do {
    console.log("\n=======MENU=======")
    console.log("1 - ver saldo")
    console.log("2 - fazer depósito")
    console.log("3 - fazer saque")
    console.log("0 - sair")
    console.log("====================\n")
    option = prompt("Digite a opção desejada:")


    if (option === "1") {
        console.log("se saldo é de: 10,99")
    } else if(option === "2"){
        console.log("Depósito realizado")
    }else if (option === "3") {
        console.log("saque realizado")
    }else if (option === "0") {
        console.log("Bye")
    }
} while (option !== "0");


*/


//jogo: adivinhe um numero
/*


const numeroSecreto = Math.floor(Math.random() * 10) +1;
//Math.random 0.0 0.9999999...
//* 10 0.0 9.99999999
//math.floor 0 - 9
// + 1 0 = 1 - 10
let palpite;
let tentativa = 0;
alert("Adivinhe um numero de 1-10");


do {
    palpite = Number(prompt("Seu palpite: "))
    tentativa++
    if (Number.isNaN(palpite)) {
        alert("Digite apenas numeros válidos")
    } else if (palpite < numeroSecreto) {
        alert("Muito baixo, tente novamente")
    }else if (palpite > numeroSecreto){
        alert("muito alto")
    }else {
        alert(`Acertou! limpe a cueca! Numero de tentativas ${tentativa}`);
    }
} while (palpite !== numeroSecreto); 

//for
//for (let index = 0; index < Array.length; index++) {
/*console.log("Contando de 1 a 10:/n");
for (let i = 1; i <= 10; i++ ) {
    console.log(`Número: ${i}`)
}
*/

/*Tabuada
const numero = Number(prompt("Tabuada de qual número"));
if (Number.isNaN(numero)) {
    console.log("Número Inválido!")
} else {
    console.log(`/n Tabuada do ${numero}\n);
        for (let i = ); i <= 10; i++) {
        const resultado = numero * i;
        console.log (`${numeroi} x ${resultado})
        
}*/


//Números pares (0 a 20)
/*
console.log("Números pares de 0 a 20\n")

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

for (let i2 = 0; i2 <= 20; i += 2) {
    console.log(i2)
}*/

/*console.log("Contagem regressiva")
for (let i = 10; >= 1; i--){
    console.log(`${i}...`)
}*/

/*const altura = 5;

 for (let linha = 1; linha <= altura; linha++) {
    let asteriscos = "";

    for (let i = 1; i <= linha; i++) {
        asteriscos += "* "
    }
    console.log(asteriscos);
 } */

// Array  (lista)
   /* const frutas = ["Maçã", "Banana", "Laranja", "Uva"]

    console.log(frutas[0]);
    console.log(frutas[1]);
    console.log(frutas[2]);
    console.log(frutas[3]);

    console.log(frutas.length);

    // for of
    for (const fruta of frutas) {
        console.log(`- ${fruta}`)
    } */

    //Soma de todos os números de array

   /* const numeros = [10, 25, 8, 42, 15, 7];

    let soma = 0;
    for (const num of numeros) {
        console.log(soma += num); 
    } */

//Objetos

/*
const pessoa = {
    nome: "Guilherme", 
    idade: 21,
    cidade: "São Paulo",
    profissao: "Professor"
}

console.log(pessoa.nome)
console.log(pessoa["idade"])
*/

// for in 
//for (const chave in objeto) 

/*
const aluno = {
    nome: "Guilherme Lima",
    matricula: "19052004",
    curso: "Desenvolvedor Web",
    nota: 9.5
};

console.log("Dados do Aluno:\n");
for (const chave in aluno) {
    const valor = aluno [chave]
    console.log(`${chave}: ${valor}`)
};
 */

//Estoque de produtos

/*
const estoque = {
    "notebook": 15,
    "Mouse": 50,
    "Teclado": 30,
    "Monitor": 8,
    "Webcam": 22
}

console.log("Estoque:\n");
for (const produto in estoque) {
    const quantidade = estoque [produto];

    if (quantidade < 10) {
        console.log(`${produto}: ${quantidade} unidades (estoque baixo!)`)
    } else {
        console.log(`${produto}: ${quantidade}: unidades`)
    }
}*/

//carrinho de compra

//array
/*
const carrinho = [
    {produto: "Camiseta", preco: 49.90, quantidade: 2},
    {produto: "Calça Jeans", preco: 129.90, quantidade: 1},
    {produto: "Tenis", preco: 590.90, quantidade: 1},
];

let total = 0;

console.log("Carrinho de Compras: \n");

for (const item of carrinho) {
    const subtotal = item.preco * item.quantidade;

    total += subtotal

    console.log(`${item.produto} (${item.quantidade}x) - R$ ${subtotal.toFixed(2)}`)
}

console.log("\n" + "=".repeat(40));
console.log(`TOTAL: R$ ${total.toFixed(2)}`);
*/

//break
/*
const numeros = [5, 12, 8, 3, 19, 7, 25]

const procurado = 19;

console.log("Procurando o número", procurado )

for (const num of numeros) {
    console.log("Verificando:", num)

    if (num === procurado) {
        console.log("Encontrado!!");
        break;
    }
}
console.log("Loop terminou");
*/

//senha com limite de 3 tentativas

/*
const senhaCorreta = "abc123";

const maxTentativas = 3;

for (let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
    const senha = prompt(´Tentativa ${tentativa}\${maxTentativas} - Digite sua senha:´);

    if (senha === senhaCorreta) {
        console.log("Acesso Liberado!")
        break;
    } else {
        console.log("Senha Incorreta!");

        if (tentativa === maxTentativas) {
            console.log("Conta Bloqueada!")
        }
    }
}
*/

//continue

/*
for (let i = 1; i <= 10 i++) {
    if (i % 2 === 0) {
        continue; 
    }
    console.log(i);
}*/

/*
const alunos = [
    {nome: "Ana", nota: 8.5},
    {nome: "Bruno", nota: 5.0},
    {nome: "Carlos", nota: 9.0},
    {nome: "Diana", nota: 4.5},
    {nome: "Eduardo", nota: 7.5},
];
console.log("Alunos Aprovados: \n");
for (const aluno of alunos); {
    if (aluno.nota < 7) {
        continue;
    }
    console.log(´${aluno.nome} - Nota: ${aluno.nota}´);

}*/
/*
const frase = prompt ("Digite uma frase:");

const vogais ="aeiouAEIOU";

let contador = 0;

let vogaisEncontradas = [];

for (const letra of frase) {
    if (vogais.includes(letra)) {
        contador++
        vogaisEncontradas.push(letras)
    }
}
console.log(`\nFrase: ${frase}`);
console.log(`Vogais encontradas: ${contador}`);
console.log(`Vogais encontradas: ${vogaisEncontradas}`);
*/

//exercicio 
//soma de 1 até N

const N = Number(prompt("Digite um número:"));
let soma = 0;
for (let i = 1; i <= N; i++) {
    soma +=  i;

}

console.log(´Soma de 1 até ${N} = ${soma}´);