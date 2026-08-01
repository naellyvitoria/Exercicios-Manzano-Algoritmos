// Exercício 7M - Quadrado da soma de três valores

alert("Quadrado da soma");

let A = parseFloat(prompt("Informe o valor de A: "));
let B = parseFloat(prompt("Informe o valor de B: "));
let C = parseFloat(prompt("Informe o valor de C: "));

let resultado = Math.pow(A + B + C, 2);

alert("O quadrado da soma é: " + resultado);