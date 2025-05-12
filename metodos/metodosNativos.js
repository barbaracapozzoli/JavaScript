// String - Sequência de caracteres
let string = 'Olá, mundo!';
console.log(string.toUpperCase()); // Colocar em letras maiúsculas.
console.log(string.toLowerCase()); // Colocar em letras minúsculas. Ou seja, o console é um objeto, log é um método desse objeto. string é uma variável do tipo String, e toUpperCase() e toLowerCase() são métodos do objeto String usados para transformar o texto."

// Agora vamos utilizar o Slice para determinar o inicio e o fim do que vai ser refletido no meu terminal, O START É OBRIGATÓRIO, o end é opcional. Exemplo:

console.log(string.slice(0, 5)); // Aqui estou dizendo que: Quero que apareça no meu terminal da letra 0 até a 5, sendo 0 o "O" e 5 o "espaço"; Irá refletir "Olá, "; Aqui definimos o start e o end. Aqui o que não entra é RETIRADO.

console.log(string.slice(-6)); // Aqui vai entender que vai vir de trás pra frente em nossa string: "Mundo!"; definimos apenas o start.

// Substring(start,end)

console.log(string.substring(0, 5)); // Aqui traz a contagem, mas ao invés de retirar o que não entra do 0 ao 5, ele fatia do 0 ao 5, ou seja, retira o "Olá, "
console.log(string.substring(-6)); // Aqui ele trará toda a string "Olá, Mundo" porque ele não aceita valores negativos, ou seja, ele só conta de 0 em diante; Não funciona com números negativos.
console.log(string.substring(7, 3)); // O elemento 7 não existe, neste caso especifico ele inverte, então fica 3, 7.

// Slice(start, end); Extrai uma parte da string (apaga uma parte);
// SubString(start, end); Retorna um pedaço da string(pega um pedaço que retornamos);
// Replace(search, replaceWith); No search nós procuramos o que queremos substituir, e no replaceWith colocamos por qual valor queremos substituir.

console.log(string.replace('Mundo', 'JavaScript')); // Vai tirar o mundo e substituir por JavaScript, esse metódo substitui apenas a PRIMEIRA OCORRÊNCIA. E neste caso não substituímos o valor original, então quando usamos altera naquele momento mas não altera em definitivo.

console.log(string.indexOf('Mundo'));
console.log(string.indexOf('JavaScript')); // Aqui o terminal irá trazer o valor de -1 que é para demonstrar que ocorreu um erro, semprpe que não for identificado o valor, apresenta esse erro. O indexOF para determinar a posição de algum elemento e conseguir trabalhar com ela.
