let minhaVariavel = 10;
console.log(minhaVariavel);

minhaVariavel = "Olá, Mundo!!"
console.log(minhaVariavel);

minhaVariavel = true
console.log(minhaVariavel)

let numero = 10;
let texto = "20";

let resultado = numero + texto;
console.log(resultado)

// Isso é um comentário de linham única
/*
    isso é um comentário 
    de múltiplas linhas
 */

console.log("isso vai executar"); // mais isso aqui é ignorado
let nome = "Guilherme";
let Nome  = "Guilherme";
let NOME = "Guilherme";

console.log (nome)
console.log (Nome)
console.log (NOME)

//Palavras Reservadas
// let, const, if, for, else, for, while, function, return, class, new, switch

//Regras de Nomenclatura
//Pode começar com letra, _ ou $
//Pode conter letras, números, _ ou $
//Não pode: começar com número 
//Não pode ter espaços (Precisa por "_"
//Não pode por acentos

let nome2;
let nomeCompleto;
let _contador;
let idade2;

// Nomes de funções começam com verbos:
function calcularMedida(){

}
function buscarUsuario (){

}

//Tipos Primitivos:
//NUMBER - Número 
const preco = 19.9;
console.log(typeof preco);

//STRING - texto
const nome3= "Guilherme";
console.log(typeof nome3);

//BOOLEAN - verdadeiro ou falso
const ativo = true;
console.log(typeof ativo);

//NULL - ausencia intêncional de valor
const vazio = null;
console.log (typeof vazio);

//UNDEFINED -> variável sem valor
let indefinido;
console.log(typeof indefinido);

//BIGINT -> número muito grandes
const grande = 9007199254740993n;
console.log(typeof grande);

//Valores Especiais: naN e Infinity
// INFINITY -> divisão por zero 
console.log (5 / 0);
console.log(-5 / 0);

// naN (Not a Number) -> operação inválida
console.log("abc * 3");
console.log(Math.sqrt(-1));
console.log(0 / 0);

//Checar se é um número ou não
console.log(Number.isNaN("abc * 3"));

function calcularTotal(preco, quantidade) {
    const total = preco * quantidade;

    if (Number.isNaN(total)) {
        console.log("Erro: preço ou quantidade inválidos");
        return 0;
    }
    return total;

}

console.log(calcularTotal("abc", 2));
console.log(calcularTotal(10, 5));

//Springs e Template Literals
// // Aspas simples, duplas ou crase
const nome4 = 'guilherme';
const nome5 = "guilherme";
const nome6 = `guilherme`;

//Propriedades e métodos 
const nomeCompleto2 = "Guilherme Lima"
console.log(nomeCompleto2.length);
console.log(nomeCompleto2.toUpperCase());
console.log(nomeCompleto2.toLowerCase());

// TEMPLATE STRING (crase) -> permite inserir variáveis 
const nome7 = "Guilherme"
const idade = "21"

console.log(`Olá, meu nome é ${nome7} e tenho ${idade} anos.`);

//Conversões de tipo
console.log(Number("123"));
console.log(parseInt("10.9"));
console.log(parseFloat("10.9"));
console.log(String(123));
console.log(Boolean(0));
console.log(Boolean(1));
console.log((""));
console.log(Boolean("oi"));

//const texto2 = prompt("Digite um número:");
//console.log(texto2 + 5);
//alert(texto2 + 5;)

//const numero2 = Number(prompt("digite um número:"));
console.log(numero2 + 5);
