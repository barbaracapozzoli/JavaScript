// Exercícios Array and Objects:

// Exercício 1: Manipulação de Array - parte 1
// a. Crie um array chamado produtos contendo três nomes de produtos.
// b. Acesse e imprima o segundo produto.
// c. Modifique o terceiro produto para "Notebook" e imprima o array atualizado.

let produtos = ['Coca-cola', 'Pepsi', 'Sprite'];
console.log(produtos[1]);
produtos[1] = 'Notebook';
console.log(produtos[1]);

// Exercício 2: Manipulação de Array - parte 2
// a. Crie um array chamado clientes contendo três nomes de clientes.
// b. Adicione um quarto cliente ao array.
// c. Remova o último cliente e imprima o array atualizado.

let clientes = ['Bárbara', 'Thiago', 'Helen'];
clientes[3] = 'Neto';
console.log(clientes);
clientes.length = clientes.length - 1;
console.log(clientes);

// Exercício 3: Manipulação de Objetos - parte 1
// a. Crie um objeto chamado produto com as propriedades nome, preco e quantidade.
// b. Acesse e imprima o nome do produto.
// c. Modifique o preço do produto e imprima o objeto atualizado.

let sapato = {
  nome: 'Bota',
  preco: 300,
  quantidade: 60,
};
console.log(sapato.nome);
sapato.preco = 400;
console.log(sapato);

// Exercício 4: Manipulação de Objetos - parte 2
// a. Crie um objeto chamado venda com as propriedades cliente, produto e valor.
// b. Adicione a propriedade data ao objeto.
// c. Remova a propriedade produto e imprima o objeto atualizado.

let venda = {
  cliente: 'Concessionária',
  produto: 'Carro',
  valor: 120000,
};
venda.data = '04.02.2025';
delete venda.produto;
console.log(venda);

// Exercício 5: Manipulação dos Tipos Referências
// a. Crie um array estoque e atribua seus valores para um novo array novoEstoque.
// b. Modifique um elemento de novoEstoque e mostre que estoque não foi alterado.
// c. Crie um objeto funcionario e atribua seus valores para.
// d. Modifique uma propriedade de novoFuncionario e mostre que funcionario não foi alterado.

let estoque = ['Tijolo', 'Areia', 'Pincel'];
novoEstoque = { ...estoque };
novoEstoque[1] = 'Cimento';
console.log(estoque);
console.log(novoEstoque);

let funcionario = {
  horasTrabalhadas: 8,
  faltas: 1,
  metaAtingida: true,
};
novoFuncionario = { ...funcionario };
novoFuncionario.faltas = 7;

console.log(novoFuncionario);
console.log(funcionario);
