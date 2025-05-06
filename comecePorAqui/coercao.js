// Coerção Implícita

console.log(5 == "5"); // FAZ EXATAMENTE A COERÇÃO IMPLÍCITA, OU SEJA,
console.log(5 === "5");
console.log(5 + "5"); // Automáticamente o NUMBER é convertido em STRING, então o resultado é "55" e não "10".
console.log("10" - 5); // Neste caso não é possível "Somar" então automáticamente a STRING é convertida em NUMBER, gerando uma coeção implícita, e o resultado ficando de forma correta "5".
console.log("3" * "2"); // Neste caso também os dois STRINGS serão convertidos em NUMBERS, gerando uma coeção implícita. 

console.log(null == undefined); // Se for executar apenas essa operação de IGUALDADE, então sempre é necessário pensar super bem antes de fazermos as operações