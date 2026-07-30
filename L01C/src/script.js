// Exercício 7C - Calcular volume de uma lata de óleo

alert("Volume da lata de óleo");

let raio = parseFloat(prompt("Informe o valor do raio: "));

let altura = parseFloat(prompt("Informe o valor da altura: "));

let volume = Math.PI * Math.pow(raio, 2) * altura;

alert("O volume da lata é: " + volume);