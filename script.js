// Exercicio 1 //


let numeroInteiro1 = parseInt(prompt("Digite um numero inteiro"));
let numeroInteiro2 = parseInt(prompt("Digite outro numero inteiro"));
let diferencaEntreOsNumeros = numeroInteiro1 - numeroInteiro2;

if (numeroInteiro1 > numeroInteiro2) {
    alert(`O maior número é ${numeroInteiro1} e a diferença é ${diferencaEntreOsNumeros}`)
} else {
    alert(`O maior número é ${numeroInteiro2} e a diferença é ${diferencaEntreOsNumeros}`)
};


// Exercicio 2 //


let numero1 = parseFloat(prompt("Digite um numero"));
let numero2 = parseFloat(prompt("Digite outro numero"));

if (numero1 > numero2) {
    alert(`O número ${numero1} é maior que número ${numero2}`)
} else if (numero1 == numero2) {
    alert(`Números iguais`)
} else {
    alert(`O número ${numero2} é maior que número ${numero1}`)
};


// Exercicio 3 incompleto nao aparece o valor correto //

let salarioTrabalhador = parseFloat(prompt("Digite o salario do trabalhador"));
let prestacaoEmprestimo = parseFloat(prompt("Digite o valor da prestação do empréstimo"));

if (prestacaoEmprestimo == 30% salarioTrabalhador) {
    alert(`Empréstimo não concedido`)
} else {
    alert(`Empréstimo concedido`)
};


// Exercicio 4 //

let escolhaDeNumero = parseFloat(prompt("Digite um numero"));

if (escolhaDeNumero %3 == 0 && escolhaDeNumero %5 == 0){
    alert(`Valor inválido`)
} else if (escolhaDeNumero %3 == 0){
    alert(`Valor divisível por 3`)
} else if (escolhaDeNumero %5 == 0){
    alert(`Valor divisível por 5`)
} else if (escolhaDeNumero %2 == 0){
    alert(`É par`)
} else {
    alert(`É impar`)
};


// Exercicio 5 //


let diaDaSemana = parseInt(prompt("Digite um numero de 1 a 7"));

if (diaDaSemana === 1) {
    alert(`Domingo`)
} else if (diaDaSemana === 2) {
    alert(`Segunda-Feira`)
} else if (diaDaSemana === 3) {
    alert(`Terça-Feira`)
} else if (diaDaSemana === 4) {
    alert(`Quarta-Feira`)
} else if (diaDaSemana === 5) {
    alert(`Quinta-Feira`)
} else if (diaDaSemana === 6) {
    alert(`Sexta-Feira`)
} else if (diaDaSemana === 7) {
    alert(`Sábado`)
} else {
    alert(`Numero inválido`)
};


// Exercicio 6 //


let salarioFuncionario = parseFloat(prompt("Digite o salário do funcionário"));
let reajusteSalario = parseFloat(prompt("Digite o reajuste do salário do funcionário"));

if (reajusteSalario <= 5){
    alert(`O salário do funcionário corrigido é de: ${salarioFuncionario + (salarioFuncionario * reajusteSalario) / 100}`)
} else {
    alert(`O reajuste acima de 5% é inválido`)
};


// Exercicio 7 //


let dolar = parseFloat(prompt("Digite o valor em Dólar"));
let cotacaoDolar = parseFloat(prompt("Digite o valor da cotação atual"));
let convercaoReal = dolar * cotacaoDolar;

alert(`${new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(dolar)
        } é equivalente a ${new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(convercaoReal)
        } tendo ${cotacaoDolar} como cotação.`);


// Execicio 8 incompleto nao entendi muito bem //


let tipo1 = 50;
let tipo2 = 100;
let tipo3 = 150;
let tipo4 = 250;
let acre = 1;
let escolhaDetipo = parseInt(prompt("Escolha um tipo de 1 a 4."));
let escolhaEAcre = parseInt(prompt("Escolha a quantidade de acre."));

if (escolhaDetipo === 1) {
    return tipo1
} else if (escolhaDetipo === 2) {
    return tipo2
} else if (escolhaDetipo === 3) {
    return tipo3
} else if (escolhaDetipo === 4) {
    return tipo4
} else {
    alert(`tipo de praga inválida escolha um numero de 1 a 4!`)
};

if (escolhaEAcre >= 1000){
    return escolhaEAcre * 95 / 100
};

alert(`O valor ser pago é de: ${escolhaDetipo * escolhaEAcre}`);

// Exercicio 9 //


let tempo = parseInt(prompt("Digite o tempo da viagem"));
let velocidade = parseInt(prompt("Digite a velocidade percorrida na viagem"));
let distancia = tempo * velocidade;
let litroUsados = distancia / 12;

alert(`Seu veículo percorreu ${distancia} km a ${velocidade} km/h em ${tempo}h de viagem e consumiu ${litroUsados.toFixed(2)}l de gasolina`);


// Exercicio 10 incompleto //