// Exercício 7E - Calcular valor da prestação em atraso

alert("Cálculo da prestação em atraso");

let valor = parseFloat(prompt("Informe o valor da prestação: "));

let taxa = parseFloat(prompt("Informe a taxa de juros: "));

let tempo = parseFloat(prompt("Informe o tempo de atraso: "));

let prestacao = valor + (valor * taxa / 100) * tempo;

alert("O valor da prestação é: " + prestacao);