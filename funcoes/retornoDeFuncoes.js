// Retorno de uma função

let pedido = {
  id: 1234,
  nome: 'Thico',
  email: 'thi_rib@example.com',
  lanche: 12,
  batataFrita: 6,
  suco: 4,
};

// Exemplo abaixo: Envio de notificação por e-mail para pedido de um lanche.
function enviarNotificacao(nome, idPedido, email) {
  console.log(
    `Enviando email para ${email} confirmando o pedido de número ${idPedido}.`
  );
  console.log(`Mensagem: ${nome} pedido confirmado!`);
}
enviarNotificacao(pedido.nome, pedido.id, pedido.email);

// Teremos um exemplo abaixo de uma função principal que irá calcular e retornar o valor do pedido:

function processarPedido(id, item1, item2, item3) {
  let totalPedido = item1 + item2 + item3;
  console.log('Pedido: ' + id + 'Processado');
  console.log('O total do pedido é: ' + totalPedido); // Aqui é um exemplo antes do return mostrando que funciona

  return totalPedido;

    console.log('O total do pedido é: ' + totalPedido); // Se observarmos depois do return a solicitação fica com uma cor mais clara pois não é mais executada quando colocada após o return, apenas antes

}
processarPedido(pedido.idnode, pedido.lanche, pedido.batataFrita, pedido.suco);

let retornoDaFuncao = processarPedido(
    pedido.id,
    pedido.lanche,
    pedido.batataFrita,
    pedido.suco,
)

console.log(retornoDaFuncao);
// Outro exemplo é que conseguimos fazer operações matemáticas e funções com os retornos:

console.log(retornoDaFuncao + retornoDaFuncao);