// Observações:
// - O nome de cada variável criada deve respeitar as regras de nomenclatura de variáveis.
// - Se uma variável não tiver seu valor alterado depois da inicialização, ela deve ser do tipo const .
// - Comece cada resolução com o comentário em texto "Resolução do exercício X", sendo X o número do exercício em questão.

// 1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do cálculo).

function medAntesPf(nota1, nota2, nota3) {
  const somaNotas = nota1 + nota2 + nota3;
  const medAntesPf = somaNotas / 3;
  console.log(
    `Resolução do exercício 1: A média das notas dos últimos 3 meses é: ${medAntesPf}`
  );
  return medAntesPf;
}

// 2 - Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está de prova final. Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3 primeiras provas + a nota da prova final. O cálculo deve ser o seguinte: média_final = (média_antes_da_pf + pf)/2 Você deve usar a função do exercício 1 para calcular a média final. Faça as modificações que julgar necessário. Ao término do processo, devemos ter a mensagem "a média final desse aluno é x" (sendo x o resultado do cálculo).

function mediaFinal(medAntesPf, provaFinal) {
  const somaNotasFinais = medAntesPf + provaFinal;
  const mediaFinal = somaNotasFinais / 2;
  console.log(
    `Resolução do exercício 2: A média final deste aluno é: ${mediaFinal}`
  );
  return mediaFinal;
}
const mediaParcial = medAntesPf(7, 8, 9);
mediaFinal(mediaParcial, 10);

// 3 - Escreva uma função que recebe do usuário um valor de temperatura em graus Celsius e escreve na tela o texto: A temperatura correspondente em Farenheit é de xºF (sendo x o resultado da conversão.) Obs: temperatura em Farenheit = (9/5)*( temperatura em Celsius ) + 32

function conversaoTemperatura(temperaturaCelsius) {
  const temperaturaFarenheit = (9 / 5) * temperaturaCelsius + 32;
  console.log(
    `Resolução do exercício 3: A temperatura correspondente em Farenheit é de ${temperaturaFarenheit}`
  );
  return temperaturaFarenheit;
}
conversaoTemperatura(30);

// 4 - Quando estava passeando em Nova York, Bruno se surpreendeu com uma realidade diferente da que conhecia. Ao tentar pagar um produto, ele percebeu que o valor cobrado era sempre um pouco maior do que o que estava presente na etiqueta da prateleira onde o achou. Isso acontece porque a etiqueta não contém o valor do imposto pago sobre o produto, que é calculado no caixa. Esse imposto é de 8,875% em cima do valor do produto. Faça uma função que recebe o valor do produto presente na etiqueta e registre na tela a frase: O valor a ser pago é x (sendo x o resultado do acréscimo dos impostos sobre o valor inicial).

function valorReal(valorEtiqueta) {
  const valorComImposto = valorEtiqueta * 0.08875 + valorEtiqueta;
  console.log(
    `Resolução do exercício 4: O valor a ser pago é ${valorComImposto}.`
  );
  return valorComImposto;
}
valorReal(10.0);
