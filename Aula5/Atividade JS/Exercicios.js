//Exercicio 1
console.log("Exercicio 1")

let nome = "Jonas";
let idade = 25;
let almoco = true;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof almoco);

//Exercicio 2
console.log("Exercicio 2")

num1 = 10;
num2 = 5;
soma = num1 + num2;
subtracao = num1 - num2;
multiplicacao = num1 * num2;
divisao = num1 / num2;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);

//Exercicio 3
console.log("Exercicio 3")

cidade = "Barueri";
estado = "São Paulo";

console.log("Eu moro em " + cidade + ", " + estado + ".");
console.log(`Eu moro em ${cidade}, ${estado}.`)

//Exercicio 4
console.log("Exercicio 4")
//const prompt = require("prompt-sync")();

idade = Number(prompt("Qual a sua idade?"));
calculoIdade = 18 - idade;

if (idade>=18){
    console.log(window.alert(`Você pode tirar CNH, pois tem ${idade} anos!`));
}else{
   console.log(window.alert (`Infelizmente faltam ${calculoIdade} ano(s) para que você possa tirar a CNH...`));
}

//Exercicio 5
console.log("Exercicio 5")

numero = prompt("Digite um número para calculo de sua tabuada:");
limite = 10;
resultado = numero;

for (i= 1; i<=limite;i++){
    resultado = i * numero
    console.log(`${numero}x${i} = ${resultado}`);   
}

//Exercicio 6
console.log("Exercicio 6")

numero = 25;
string = "25";

console.log(numero==string);
console.log(numero===string);

//Explicação: o resultado é diferente pois quando utilizamos "==" ele compara apenas o valor,
//sem contar com o seu tipo, mas quando usamos "===" analisamos o tipo da variável, 
// e por se tratar de diferentes tipos (number e string), a comparação por "===" é falsa, porém a comparação "==" é verdadeira.

//Exercicio 7
console.log("Exercicio 7")

numeroDia = Number(prompt("Digite um número de 1 a 7, para descobrir o dia da semana correspodente:"));


switch (numeroDia){
    case 1:
        text = "Domingo";
        console.log(`O número ${numeroDia} corresponde ao dia da semana ${text}!`)
        break;
    case 2:
        text = "Segunda-feira";
        console.log(`O número ${numeroDia} corresponde ao dia da semana ${text}!`)
        break;
    case 3:
        text = "Terça-feira";
        console.log(`O número ${numeroDia} corresponde ao dia da semana ${text}!`)
        break;
    case 4:
        text = "Quarta-feira";
        console.log(`O número ${numeroDia} corresponde ao dia da semana ${text}!`)
        break;
    case 5:
        text = "Quinta-feira";
        console.log(`O número ${numeroDia} corresponde ao dia da semana ${text}!`)
        break;
    case 6:
        text = "Sexta-feira";
        console.log(`O número ${numeroDia} corresponde ao dia da semana ${text}!`)
        break;
    case 7:
        text = "Sábado";
        console.log(`O número ${numeroDia} corresponde ao dia da semana ${text}!`)
        break;

    default:
        text = "Número inválido";
        console.log(`${text}, recarregue a página e digite novamente.`)
        break;
}

//Exercicio 8
console.log("Exercicio 8")

numero = 10;

while(numero<=10){
    console.log(numero);
    numero = numero-1;
    if (numero==5){
        break;}
    
}

//Exercicio 9
console.log("Exercicio 9");

for (i=1;i<=20;i++){
    if (i%2==0){
        console.log(`Encontrei um número par (${i}).`);
    }else{
        continue;
    }

}

//Exercicio 10
console.log("Exercicio 10");

num1 = Number(prompt("Insira o primeiro número para fazer a operação:"));
num2 = Number(prompt("Insira o segundo número para fazer a operação:"));
operacao = prompt("Insira qual será a operação, dentre os seguintes operadores: */+-");

if (operacao=="*"){
    conta = (num1*num2).toFixed(2);
    console.log(`O resultado da multiplicacao de ${num1} e ${num2} é ${conta}!`);

}else if (operacao=="/"){
    conta = (num1/num2).toFixed(2);
    console.log(`O resultado da divisão de ${num1} e ${num2} é ${conta}!`);
}else if (operacao=="+"){
    conta = (num1 + num2).toFixed(2);
    console.log(`O resultado da soma entre ${num1} e ${num2} é ${conta}!`)

}else if (operacao=="-"){
    conta = (num1 - num2).toFixed(2);
    window.alert(`O resultado da subtração de ${num1} - ${num2} é ${conta}!`)

}else{
    window.alert("Operação Inválida");
}
