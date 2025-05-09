//Funções

// Iniciamos com um exemplo de acesso a um site, o inicio da explicação é que diversas pessoas podem acessar um site e imagine só se houvesse a necessidade de criar um "Console.log" com apenas o nome sendo alterado toda vez que houvesse o acesso ao site. Não seria um programa viável.

// Conceitualmente, uma função será um bloco de código que irá executar uma tarefa especifica sempre que houver um comando.

console.log('Olá, Bárbara. Bem vindo ao nosso site!');
console.log('Olá, Thiago. Bem vindo ao nosso site!');

function saudacao(nome) {
  console.log(`Olá, ${nome}. Bem vindo ao nosso site!`);
} // Quando vamos utilizar uma função iniciamos por "function" depois o nome que vamos dar a ela, neste caso o escolhido foi "salvacao" e em seguida abre parentêses com a variável (nome), abre chaves e escreve o console.log e dentro dele com crases e na hora de ciar a variável usamos ${}

saudacao('Bárbara');
saudacao('Thiago');
saudacao('Helena');
saudacao('Adam');

// SINTAXE BÁSICA = PALAVRA CHAVE function SEGUIDA POR UM nome. ex:

// function nomeFuncao(){
// instrução
// }

// Exemplo - 1 Mensagem para iniciar o cadastro:

function enviarMensagem() {
  console.log('Para continuar você precisa informar o seu nome para cadastro.');
}
enviarMensagem();

// 2 Agora iremos criar o cadastro do usuário:

function cadastrar(nome, sobrenome) {
  console.log(
    `Olá, ${nome} ${sobrenome}, seu cadastro foi concluído com sucesso!`
  );
}
cadastrar('Thiago', 'Ribeiro');

// 3 É possível utilizar operações matemáticas dentro das funções:

function banco(deposito, saque) {
  let saldo = deposito - saque;
  return saldo;
}
console.log(banco(1000, 50)); // Aqui colocamos que fizemos um depósito de R$1000,00 e sacamos R$50,00

// Agora teremos uma função PRINCIPAL:

function main() {
  enviarMensagem();
  cadastrar('Thiago', 'Ribeiro');
  let saldo = banco(10000, 540);
  console.log(`O saldo atual da sua conta é de ${saldo} reais`);
}

main();
