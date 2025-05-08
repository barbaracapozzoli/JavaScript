// Objeto - Permite que a gente modele o mundo real de forma mais organizadas, no lugar de criar várias variáveis. É possível criar um objeto "carro" com muitas informações sobre ele que são mutáveis.

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024,
    cor: "Prata",
    airbag: true,
    itens: ["abs", "4 portas", "step"],
}

// Assim como o Array o objeto é mutável, podemos alterar um valor de uma chave e também a chave de fato.
// Acessar os valores das nossas propriedades(chaves): Tem a opção de fazer "carro.marca" ou por colchetes "carro["marca"]"

console.log(carro.marca);
console.log(carro.ano);
console.log(carro.cor);

console.log(carro["modelo"]);

carro.cor = "Rosa"; // Como alterar o valor da variável, ou seja, atualizar mas permanecer com a referência do nosso objeto
console.log(carro.cor);

carro.kmRodados = 14000;
console.log(carro);

// O objeto normalmente representa algo que temos no mundo real

let livro = {
    titulo: "JavaScript para iniciantes",
    autor: "João Silva",
    ano: 2021,
    genero: "Programação",
}

console.log(livro.titulo);

livro.paginas = 300;
console.log(livro)

livro["Idioma"] = "Português"; // Esta é outra forma de incluir mais uma informação dentro do meu objeto
console.log(livro);

// No object temos como delatar ou remover uma propriedade

delete livro.Idioma;
console.log(livro); // Agora quando dermos o console.log não terá mais o idioma.

console.log("idioma" in livro);

