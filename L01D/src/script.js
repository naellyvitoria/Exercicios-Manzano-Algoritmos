// Exercício 7D - Calcular combustível gasto em uma viagem

alert("Cálculo de combustível da viagem");

let tempo = parseFloat(prompt("Informe o tempo gasto na viagem: "));

let velocidade = parseFloat(prompt("Informe a velocidade média: "));

let distancia = tempo * velocidade;

let litrosUsados = distancia / 12;

alert(
    "Velocidade média: " + velocidade +
    "\nTempo gasto: " + tempo +
    "\nDistância percorrida: " + distancia +
    "\nLitros usados: " + litrosUsados
);