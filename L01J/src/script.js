// Exercício 7J - Converter dólar para real

alert("Conversão de dólar para real");

let cotacao = parseFloat(prompt("Informe a cotação do dólar: "));
let dolar = parseFloat(prompt("Informe a quantidade de dólares: "));

let reais = dolar * cotacao;

alert("Valor em reais: R$ " + reais);