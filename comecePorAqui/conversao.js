// Conversão Explícita

// NUMBER --> STRING
let number = 123; // Neste primeiro caso vamos transformar um NUMBER em uma STRING
console.log(typeof number);
number = String(number);
console.log(typeof number); // Aqui se rodarmos o código, em nosso terminal ainda sim o TYPEOF dará number, mesmo eu alterando para String

let numero2 = 45; // Este é um outro exemplo de como converter um number para String, neste caso é utilizando o toString
console.log(numero2);
console.log(numero2,toString()); // Quando utilizamos a funcionalidade "toString" no Java, nós conseguimos CONVERTER PARA STRING

// STRING --> BOOLEAN
let string = "Meu texto"; // Aqui eu vou pegar um string e transformar em um boolean, neste primeiro exemplo dará verdadeiro pois só irá entender que há algum valor
console.log(Boolean(string));
let num = 0;
console.log(Boolean(num));

// STRING --> NUMBER
let stringNumero = "5646540"; // Neste caso nós iremos converter um String num Number, mas é necessário que o conteúdo seja números
console.log(Number(stringNumero));
console.log(Number(string)); 

// BOOLEAN --> STRING
let booleano = true;
console.log(String(booleano));