// Operadores Lógicos OU OPERAÇÕES BOOLEANAS - São usados para combinar e manipular os valores booleanos, a saída da operação sempre será "True" ou "False". São usados para lógicas mais condicionais e existem 3.

// && (AND) - Ambas as condições são verdadeiras

let idade = 20; // Exemplo no cadastro de um site, onde o usuário tem que ser maior de 18 anos
let codigoPromocional = true; // E o usuário possui um código promocional

let segundaIdade = 15;

let podeFazerLogin = idade >= 18 && codigoPromocional; // Neste caso tendo a idade + código promocional é TRUE
console.log(podeFazerLogin);

let podeFazerLogin2 = segundaIdade >= 18 && codigoPromocional; // Neste caso ele tem a idade menor que 18 anos mas tem o código promocional, então como tem apenas UMA das duas exigências, é false
console.log(podeFazerLogin2);

// || (OR) - Uma operação é verdadeira

let loginOr = idade >= 18 || codigoPromocional; // Neste caso como é OU o || tem função de OU, ou seja sendo maior ou igual a 18 anos OU tendo o código promocional está tudo ok, aqui tem os dois.
console.log(loginOr)

let loginOr2 = segundaIdade >= 18 || codigoPromocional; // Aqui não tem a idade mas tem o código então mesmo assim é TRUE
console.log(loginOr2);

let promocional = false
console.log(segundaIdade >= 18 || promocional); // Para o OR apresentar FALSE as duas precisam ser falsas, como neste caso

// ! (NOT)- Vai inverter o valor booleano

let perfilConfigurado = true; // Quando aqui apresenta o TRUE é porque o perfil ESTÁ CONFIGURADO. → O perfil está configurado.

let alerta = !perfilConfigurado; // Em seguida o NOT (!) irá demonstrar o contrário, então vai apresentar FALSE (Significa que não é necessário mandar um alterta para o MODERADOR, pois o PERFIL ESTÁ CONFIGURADO). false → Não precisa de alerta.

console.log(alerta); // O alerta será FALSE pois o perfil ESTÁ configurado e NÃO (FALSE) precisa emitir sinal de alerta

// OUTRA POSSIBILIDADE:

let perfilConfigurado2 = false; // Neste caso o sistema pergunta: "O perfil está configurado?" - "False (Não)". → O perfil não está configurado.

let alerta2 = !perfilConfigurado2; // Aqui o alerta pergunta "Precisa emitir o alerta?" - "Sistema responde TRUE (Sim)". true → Precisa de alerta.

console.log(alerta2); // Aqui vai escrever TRUE porque o perfil NÃO ESTÁ CONFIGURADO
