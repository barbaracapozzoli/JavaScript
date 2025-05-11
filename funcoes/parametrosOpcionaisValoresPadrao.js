// Paramêtros opcionais e valores padrão: Nem sempre é necessário fornecer todos os argumentos que uma função pode aceitar, podemos definir valores padrão para os nossos parâmetros, ou seja, se nenhum argumento foi inserido ao chamar a função, vai vir um valor definido padrão.

function cumprimentar(nome, saudacao) {
  console.log(`Olá, ${nome}. ${saudacao}`);
}
cumprimentar();

// É importante se atentar em definir os valores padrão sempre que fizer sentido não ter valores como UNDEFINED OU NULL. Abaixo está explicado que, se chamarmos o cumprimentar() sem nenhum valor definido ele trará as mensagens "Visitante" e "Boa tarde" de forma automatica.

function cumprimentar(nome = 'Visitante', saudacao = 'Boa tarde!') {
  console.log(`Olá, ${nome}. ${saudacao}`);
}
cumprimentar();

// Outro ponto IMPORTANTE é que a ordem que eu chamo os valores padrão, porque se for o primeiro por exemplo, vai dar erro:

function cumprimentar(nome = 'Visitante', saudacao) {
  // Exemplo de função que o valor padrão é o primeiro valor
  console.log(`Olá, ${nome}. ${saudacao}`);
}
cumprimentar('Bem-vindo!'); // Aqui vai dar erro porque o sistema vai entender que "Bem-vindo!" é o "Nome" e não a "Saudacao".

// Sugestão de solução:

function cumprimentar(saudacao, nome = 'Visitante') {
  // Uma sugestão é alterar a ordem dos valores, porque aí conseguimos delimitar que o primeiro sempre será saudação. Mesmo que na hora de trazer o "Console.log" ou o "Return" nós coloquemos o nome antes.
  console.log(`Olá, ${nome}. ${saudacao}`);
}
cumprimentar();
