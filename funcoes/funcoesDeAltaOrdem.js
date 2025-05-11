// Funções de Alta Ordem
// - Recebem uma ou mais funções como argumento: Permitem a aplicação de operações mais complexas e maias reutilizável.
// OU recebem uma função como resultado: Permitem a criação de funções mais personalizadas com padrões e abstrações.

// EXEMPLO DE FUNÇÃO COMO ARGUMENTO:

function aplicarOperacao(x, operacao) {
  return operacao(x);
}

function dobrar(numero) {
  // Recebeu a função dobrar como um argumento
  return numero * 2;
}

const resultado = aplicarOperacao(5, dobrar); // Aqui o JS entende que nós temos 5 que é o X de aplicarOperacao, e operacao é a função "Dobrar", então neste caso o JS irá pegar o valor 5 e substituir o numero em dobrar e fazer * 2
console.log(resultado);

// EXEMPLO FUNÇÃO COMO RESULTADO:

function criarIncrementador(incremento) {
  return function (numero) {
    return numero + incremento;
  };
}

const incrementoPor2 = criarIncrementador(2);
console.log(incrementoPor2); // Aqui vai dar um retorno anonymous no terminal porque o dado de entrada é desconhecido - Não colocamos o numero. A correção:

// const incrementoPor2 = criarIncrementador(2(5));
