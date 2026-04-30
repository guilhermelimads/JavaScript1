//exercicio 2

/*
// 1 Contagem de 1 a 10:
for (let i = 1; i <= 10; i++){
    console.log(i)
}

*/

/*
// 2 Tabuada de um número:
const numero = Number(prompt("Digite um número:"));
for (let i2 = 1; i2 <= 10; i2++) {
    const resultado = numero * i2;
    console.log(`${numero} x ${i} = ${resultadoo}`);
}
*/

/*
// 3 soma de 1 até N

const N = Number(prompt("Digite um número:"));
let soma = 0;

for (let i = 1; i <= N; i++) {
  soma += i;
}

console.log(`Soma de 1 até ${N} = ${soma}`);

*/

//nivel intermediario

/*
//1 Exibir os números pares de 1 a 50:
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
*/



/*
// 2 Jogo de adivinhação:

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let palpite = 0;

while (palpite !== numeroSecreto) {
    palpite = Number(prompt("Adivinhe o número (1 a 100):"));

    if (palpite > numeroSecreto) {
        console.log("O número é menor")
    } else if (palpite < numeroSecreto) {
        console.log("O número é maior");
      }  else {
            console.log("Acertou!!!");
        }    
}
*/
/*
// 3 Contagem regressiva:
let numero = Number(prompt("Digite um numero:"));

while (numero >= 0 {
    console.log(numero);

    numero--;
}
*/

//Soma dos digitos
let numero = Number(prompt("Digite um número inteiro:"));

let soma = 0;

while (numero > 0) {
    let digito = numero % 10
    soma += digito
    
    numero = Math.floor(numero/10);
}

console.log("Soma dos dígitos:", soma);