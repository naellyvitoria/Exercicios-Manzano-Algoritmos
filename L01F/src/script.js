// Exercício 7F - Trocar valores das variáveis A e B

alert("Troca de valores");

let A = prompt("Informe o valor de A: ");

let B = prompt("Informe o valor de B: ");

let auxiliar = A;

A = B;

B = auxiliar;

alert("Novo valor de A: " + A + 
"\nNovo valor de B: " + B);