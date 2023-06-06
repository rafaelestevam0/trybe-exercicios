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





// Exercício 6: Há um par entre nós
// Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false. Faça esse exercício utilizando somente um if.

const num4 = 10
const num5 = 5
const num6 = 13


if (num4 % 2 === 0 || num5 % 2 === 0 || num6 % 2 === 0) {
  console.log("True");
  } else {
  console.log("False");
}


// Exercício 7
// Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).
// ⭐️ A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10.
// Para as faixas de impostos, use as seguintes referências:
// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%;
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%;
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%;
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.
// IR
// Até R$ 1.903,98: isento de imposto de renda;
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto;
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto;
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto;
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// O cálculo deve ser o demonstrado a seguir
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:
// R$ 2.670,00 - salário com INSS já deduzido;
// 7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25;
// R$ 142,80 - parcela a ser deduzida do imposto de renda.
// Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.
// Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

