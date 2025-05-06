// Comentário OU Atalho CTRL + ;
// Declaração do tipo + nome da variável = informação

let mensagem = 'Olá, impressionador!';
console.log(mensagem);

// Mais um exemplo de declaração do tipo "Let"

let cor = 'Vermelha';
console.log(cor);

// Como reatribuir o valor a variável "Let", basta colocar apenas o nome da variável e o valor
// Ou seja, não é permitido criar uma nova varárivel com o mesmo nome, mas reatribuir o nome é possível

cor = 'Azul';
console.log(cor);

// Agora vamos utilizar um exemplo "Const"

const segundaMensagem = 'Bem vindo ao curso, impressionador!';
console.log(segundaMensagem);

// Na variável CONST nós não podemos realizar alterações, diferente do LET ela não é mutável. Não é possível reatrivuir o nome.

// Um exemplo de uso de CONST é o "PI = 3,14" como sabemos que não irá alterar, nós utilizamos a variável CONST para casos de um valor que terá que permanecer o mesmo até o fim do código para não correr o risco de sofrer alterações.

// TYPE VAR: É possível substituir no meio do código, é possível reatribuir também. Se durante o código não atribuir o tipo ex "VAR, CONST ou LET" automáticamente será considerada VAR, porém não é o indicado pois pode gerar erro. Abaixo exemplos do que funciona:

var fruta = 'Uva';
console.log(fruta);

var fruta = 'Banana';
console.log(fruta);

fruta = 'Laranja';
console.log(fruta);

//Redeclarações

let name = 'Bárbara'; // ERRO NA HORA DE REDECLARAR - NÃO É POSSÍVEL
const nameProfessor = 'Thiago'; // ERRO NA HORA DE REDECLARAR - NÃO É POSSÍVEL

var novaVariavel = 'Hey there';
console.log(novaVariavel);
var novaVariavel = 'Seja bem vindo';
console.log(novaVariavel);

// Reatribuição

name = 'Luana'; // EXEMPLO LET
console.log(name);

novaVariavel = 'Como você está?';
console.log(novaVariavel);

// nameProfessor = "Ribeiro"; // VARIÁVEL CONST NÃO É POSSÍVEL REATRIBUIR VALOR

// Hoisting - Quando o terminal executa o código mesmo não tendo atribuindo o valor a uma variável do tipo VAR como "undefined". Já quando tentamos fazer isso com a LET E CONST isso não ocorre, o código apresenta um erro imediato. EX:

console.log(terceiraMensagem);
var terceiraMensagem = 'Testing Hoisting';
console.log(terceiraMensagem);

// Visibilidade - EX (NÓS AINDA NÃO APRENDEMOS FUNÇÃO, IF)

// VAR - Tem escopo de função X LET E CONST - Tem escopo de bloco, ou seja, só funciona se estiver dentro do "{}"

if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // ✅ Funciona — var tem escopo de função
console.log(b); // ❌ Erro — let tem escopo de bloco
console.log(c); // ❌ Erro — const também tem escopo de bloco

