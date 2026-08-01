// Exercício 7L - Soma dos quadrados de três valores

alert("Soma dos quadrados");

let A = parseFloat(prompt("Informe o valor de A: "));
let B = parseFloat(prompt("Informe o valor de B: "));
let C = parseFloat(prompt("Informe o valor de C: "));

let resultado = Math.pow(A, 2) + Math.pow(B, 2) + Math.pow(C, 2);

alert("A soma dos quadrados é: " + resultado);