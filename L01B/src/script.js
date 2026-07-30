// Exercício 7B - Converter temperatura Fahrenheit para Celsius

alert("Conversão de Fahrenheit para Celsius");

let fahrenheit = parseFloat(prompt("Informe a temperatura em Fahrenheit: "));

let celsius = (fahrenheit - 32) * (5 / 9);

alert("A temperatura em Celsius é: " + celsius);