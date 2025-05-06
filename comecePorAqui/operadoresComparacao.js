// Igualdade (==) - Não costuma ser uma boa prática. Exemplo abaixo com tipo NUMBER e STRING:

console.log(5 == "5"); // Não é bacana porque só é possível fazer uma CONCATENAÇÃO, se eu precisasse eu não poderia fazer uma operação aritmética com esses valores. MAS MESMO ASSIM, no meu terminal vai trazer o VALOR TRUE. Porque nós não vemos o TIPO e sim apenas o valor.

// ESTRITA IGUALDADE (===) - Neste modo sim, é eficiente, pois observa o VALOR (numeral 5) e o TIPO (STRING E NUMBER):

console.log(5 === "5"); // Irá apresentar "FALSE" em meu terminal. BOA PRÁTICA

// Desigualdade (!=) - Quando queremos saber se um valor é diferente do outro. Mas também NÃO É UMA BOA PRÁTICA. Ele não difere STRINGS DE NUMBERS, não separa tipos.

console.log(5 != "5"); // No terminal irá apresentar o valor "False", pois entende que 5 não é diferente de "5", mas nós sabemos que é pois são dois tipos diferentes.

// ESTRITA DESIGUALDADE (!==) - Verifica toda a informação, tipo e valor.

console.log(5 !== "5"); // É UMA BOA PRÁTICA, aqui vai apresentar o valor TRUE pois são tipos diferentes. A pergunta é "x é DIFERENTE de y?".

// MAIOR E MENOR - Sempre trará um valor booleano

console.log(10 > 20); // Terá que trazer um valor de "False"
console.log(10 > 10); // Aqui ainda entenderá que o valor é "False", pois para ser "True" deveria ser:
console.log(10 >= 10); // Aqui agora sim, trará o valor "True", pois eu especifiquei que é "MAIOR OU IGUAL"

// EXEMPLO COM SENHA:

let senha = 2356;
let senhaDigitada = 5646;
let comparativo = senha === senhaDigitada;
console.log("A senha digitada é: " + comparativo); // Irá apresentar valor false pois a senha está incorreta.
