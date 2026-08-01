// Exercício 7K - Converter real para dólar

alert("Conversão de real para dólar");

let cotacao = parseFloat(prompt("Informe a cotação do dólar: "));
let reais = parseFloat(prompt("Informe o valor em reais: "));

let dolar = reais / cotacao;

alert("Valor em dólar: US$ " + dolar);