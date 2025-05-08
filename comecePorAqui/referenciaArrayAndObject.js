// Array

let listaA = [1, 2, 3];
let listaB = listaA;
listaB[0] = 99;

console.log(listaB);
console.log(listaA);

// let string = "Olá";
// let mensagem = string;
// mensagem = "Olá, bem vindo";

// console.log(string); // Aqui não vai ser alterado, e continuará aparecendo olá
// console.log(mensagem); // Aqui vai aparecer Olá, bem vindo

let objA = { nome: "Bárbara"};
let objB = objA;
objB.idade = 23;
console.log(objA);
console.log(objB);

let listaC = [...listaA];
console.log(listaC);
listaC[3] = 100;

console.log(listaC);
console.log(listaA);

let objC = { ...objA};
objC.corDeCabelo = "Castanho";
console.log(objC);
console.log(objA);