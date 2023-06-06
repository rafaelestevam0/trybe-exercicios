// Exercício 1
// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. É necessário que seu código tenha duas      variáveis, num1 e num2, definidas no começo com os valores que serão operados. Escreva códigos para:

// Adição (num1 + num2)
// Subtração (num1 - num2)
// Multiplicação (num1 * num2)
// Divisão (num1 / num2)
// Módulo (num1 % num2)

const num1 = 20;
const num2 = 23;

console.log("Soma: " +(num1 + num2));
console.log("Subtração: " +(num1 - num2));
console.log("Multiplicação: " +(num1 * num2));
console.log("Divisão: " +(num1 / num2));
console.log("Módulo: " +(num1 % num2));


// Exercício 2
// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

let num1 = 20;
let num2 = 23;

if (num1 > num2) {
  console.log(num1);
} else if (num1 === num2) {
  console.log("Os números são iguais.");
} else {
  console.log(num2);
}
  

// Exercício 3
// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

const num1 = 20;
const num2 = 23;
const num3 = 4;

if (num1 > num2 && num1 > num3) {
  console.log(num1);
  } else if (num2 > num1 && num2 > num3) {
  console.log(num2);
  } else if (num3 > num1 && num3 > num2) {
  console.log(num3); 
  }

  
// Exercício 4
// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

let ang1 = 90;
let ang2 = 50;
let ang3 = 40;

let soma = ang1 + ang2 + ang3;

if (soma = 180) {
  console.log("True");
} else if (soma != 180) {
  console.log("False");
} else 
  console.log("Erro"); 

// Exercício 5
// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.





