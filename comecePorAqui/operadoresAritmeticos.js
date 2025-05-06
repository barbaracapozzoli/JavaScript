// Quando falamos de operadores Aritméticos se tratam apenas de valores do tipo number em alguma operação com outro valor tipo number. Ex:
// Adição

let valor = 10;
let segundoValor = 43;

console.log(valor + segundoValor);

let mensagem = "55";
console.log(valor + mensagem); // Esse tipo de operação "Number" + "String" se trata de uma concatenação - NÃO É OPERAÇÃO ARITMÉTICA

// Subtração

console.log(valor - segundoValor); // Aqui teremos um resultado negativo
console.log(segundoValor - valor);

// Multiplicação

console.log(valor * segundoValor);

// Divisão

console.log(valor / segundoValor);
console.log(segundoValor / valor);

// Módulo - É o resto da divisão, exemplo: 5 / 2, o módulo será 1.

console.log(valor % segundoValor);

// OPERADORES ARITMÉTICOS AVANÇADOS 
// Exponenciação **

let base = 2;
let expoente = 3;
let resultadoExponenciacao = base ** expoente; // 2 elevado a 3 = 2 * 2 * 2
console.log(resultadoExponenciacao);

// Incremento (++ ADICIONA O VALOR 1) e Decremento (-- SUBTRAI O VALOR 1)

let controle = 0;
console.log(controle ++); // Neste primeiro momento, o valor que meu terminal vai imprimir ainda será ZERO, porque aqui eu não dei o comando de atualizar o valor controle
console.log(controle); // A partir do momento que eu escrever novamente a variável, aí sim o valor apresentado terá a soma de 1
console.log(controle ++); // Aqui vai repetir que agora o meu controle é 1
console.log(controle); // E só aqui vai mostrar o controle atualizado com o comando que dei antes

// O contrário é verdadeiro pra uso do DECREMENTO --

// Uma outra opção para não termos que utilizar essa questão de sempre dar o comando para atualizar é o colocar os sinais "++" e "--" antes da operação, por exemplo:

console.log(++controle); // Neste caso no meu terminal já apresentou o resultado sem eu precisar colocar um novo "CONSOLE.LOG(CONTROLE)"
