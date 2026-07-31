// Exercício 7I - Quadrado da diferença entre dois valores

alert("Quadrado da diferença");

let A = parseFloat(prompt("Informe o primeiro valor: "));
let B = parseFloat(prompt("Informe o segundo valor: "));

let resultado = Math.pow(A - B, 2);

alert("O quadrado da diferença é: " + resultado);