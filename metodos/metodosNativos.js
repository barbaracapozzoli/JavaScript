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

console.log(string.replace('Mundo', 'JavaScript')); // Se o "Olá, mundo!" fossem assim: "Olá, mundooooooooo" no terminal traria "Olá, MundJavascriptoooooo!" porque ele só substitui a primeira vez que o elemento, palavra, aparece.

console.log(string); // Aqui ao utilizar o replace, nós não substituímos o valor original da nossa string, nós só estamos aplicando mas não modifica a nossa string original.

console.log(string.indexOf('Mundo'));
console.log(string.indexOf('JavaScript')); // Aqui o terminal irá trazer o valor de -1 que é para demonstrar que ocorreu um erro, semprpe que não for identificado o valor, apresenta esse erro. O indexOF para determinar a posição de algum elemento e conseguir trabalhar com ela.

// Split(delimiter[, limit] ) O split vai ser utilizado para dividir uma string em um array de substrings. Ele precisa de dois valores de parâmetro mas os DOIS SÃO OPCIONAIS.

let texto = 'maçã, banana, laranja, uvas';
let frutas = texto.split(','); // Aqui "frutas" foi uma nova variável criada, e nós utilizamos "texto" para se referir a variável anterior, o "split" para chamar o método, e a "," para informar que irá dividir por virgulas;
console.log(frutas); // No terminal irá imprimir: [ 'maçã', 'banana', 'laranja', 'uvas' ], então pegou a string e dividiu em um array de SUBSTRINGS

// Outro exemplo mudando a "Maça, banana" para um único elemento:

let texto2 = 'maçãbanana, laranja, uvas';
let frutas2 = texto.split(',');
console.log(frutas2); // No terminal irá imprimir: [ 'maçãbanana', 'laranja', 'uvas' ], então pegou a string e dividiu em um array de SUBSTRINGS

// Terceiro exemplo: Com UMA QUANTIDADE, além do delimitador

let texto3 = 'maçãbanana, laranja, uvas';
let frutas3 = texto.split(',', 2); // Aqui além do delimitador, também especificamos a quantidade de elementos
console.log(frutas3); // No terminal irá imprimir: [ 'maçã', 'banana', 'laranja' ]

// Quarto exemplo:

let texto4 = 'maçã, banana, laranja, uvas';
let frutas4 = texto.split(); // Aqui NÃO ESPECIFICAMOS NEM O DELIMITADOR nem A QUANTIDADE DE ELEMENTOS
console.log(frutas4); // Quando imprimirmos num terminal ele vai trazer como um único ARRAY: 'maçã, banana, laranja, uvas' -- ESSE QUASE NÃO É UTILIZADO POIS NORMALMENTE COLOCAMOS DENTRO DE UMA LISTA MESMO

// Quinto exemplo:

let texto5 = 'maçã                  banana    laranja         uvas';
let frutas5 = texto.split(/\s+/); // Aqui apesar da gente não ter passado um delimitador, fizemos uma EXPRESSÃO REGULAR onde o nosso texto é organizado e sairá no formato de 'maçã, banana, laranja, uvas' e /\s+/ corresponde a qualquer espaço em branco. Isso é pesquisado no google mesmo como "expressão regular javaScript" e existem até documentações que falam sobre isso;
console.log(frutas5);

// Splice(indice, numeroDeItensRemover, item1...) - Este é um outro método utilizado para se interligar com o SPLIT, porque já que houve um armazenamento de uma lista dentro de frutas, temos a opção de usar o SPLICE para modificar esta lista

frutas.splice(1, 1); // Aqui primeiro colocamos o índice e depois a quantidade de elementos que queremos retirar então: 'maçã (elemento 0), banana (elem. 1), laranja (elem. 2), uvas (elem. 3)'.Neste caso especifico, está pedindo para a PARTIR DO INDICE 1, remover 1 ELEMENTO;
console.log(frutas);
