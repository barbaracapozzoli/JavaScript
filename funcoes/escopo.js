// ESCOPO = Existem 3 tipos: GLOBAL / LOCAL(FUNÇÃO) / BLOCO
// Escopo serve para entender como as variáveis e funções são acessíveis e visíveis em diferentes etapas do nosso código.

// No escopo GLOBAL é o conceito mais amplo, ou seja, é acessível de lugar do código, a partir do momento que eu criar uma variável solta, ela será do escopo GLOBAL. Seja para ser utilizada em uma função:

let global = 'Sou do escopo Global';

function mensagem() {
  console.log(global);
}
mensagem();
console.log(global); // Se dermos apenas um console.log, sem colocar ela numa função, também será executada.

// No escopo LOCAL(FUNÇÃO) a variável será criada quando uma função for definida, ou seja, serão declaradas dentro da função e só podem ser acessadas a partir dessa função.

function mensagem() {
    let local = "Sou local da função";
    console.log(local); // Aqui irá dar certo no terminal pois é uma variável que foi criada dentro do escopo da minha função 
}
mensagem();
// console.log(local); // AQUI IRÁ APRESENTAR UM ERRO DE VARIÁVEL NÃO DEFINIDA. Pois, é como se ela estivesse válida apenas dentro da função.

// Escopo de BLOCO = Irá receber um IF - Se a variável foi declarada dentro do bloco não teremos visibilidade dessa variável fora do bloco
// EXEMPLO ABAIXO - Não é uma função, é apenas para entender o escopo de um bloco

if(true) {
    let bloco = "Sou do bloco do IF";
    console.log(global);
}

// EXPLICAÇÃO CHAT GPT - Escopo de Bloco (introduzido com let e const). É o escopo que existe dentro de blocos {} — como em if, for, ou while.
// Let e const respeitam esse escopo, enquanto var ignora e escapa para o escopo da função (ou global se fora de função).

if (true) {
  let x = 10;
  const y = 20;
  var z = 30;
  console.log(x, y, z); // Funciona dentro
}

// console.log(x); // ❌ Erro: x não está definido
// console.log(y); // ❌ Erro: y não está definido
console.log(z); // ✅ Funciona, pois var ignora escopo de bloco
