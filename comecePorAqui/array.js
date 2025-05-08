// Array - Sempre entre colchetes [] e serão separados por vírgulas.

let lista = ["Banana", 23, true, "Maçã"]; // Sempre terão índices, e serão iniciados por 0, primeiro elemento será 0 e assim por diante, exemplo: Banana = 0, 23 = 2, true = 3, maçã = 4.
lista = ["Banana", "Maça", "Pera"]; // Aqui é possível alterar os elementos que estão presentes na lista
console.log(lista); // Já irá aparecer a lista atualizada
console.log(lista[0]); // É possível pedir para imprimir apenas um elemento quando identifica o número (posição)

lista[0] = "uva"; // Aqui solicitei alterar o elemento "0" (Banana) por Uva
console.log(lista[0]);
console.log(lista); // Aqui ele já vai imprimir o Banana como Uva

// Outro exemplo:

let lista2 = ["Monitor", "Teclado", "Mouse"];
console.log(lista2[0]);
console.log(lista2[1]);
console.log(lista2[2]);

lista2[0] = "WebCam";
console.log(lista2);

lista2[3] = "Monitor"; // Neste exemplo é possível adicionar elementos que ainda não existem. 
console.log(lista2)

lista2[6] = "Placa de vídeo"; // INCLUÍ O SEXTO ITEM DA LISTA mesmo que eu não tenha os dois itens anteriores.
console.log(lista2);
console.log(lista2.length); // LENGTH É USADA PARA MEDIR O TAMANHO DA NOSSA LISTA - Neste caso são 7 itens pois são considerados os dois EMPTY ITEMS (Ainda não foram definidos)

lista2.length = lista2.length - 3 // Neste caso é para exemplificar que por enquanto se a gente pede para tirar da lista Length sempre irá começar de trás pra frente
console.log(lista2);
console.log(lista2.length);

// ARRAYS MULTIDIMENSIONAIS

let matrizVendas = [
    [100,200,300],
    [500,300,400],
    [811,522,975],
]; // Neste caso podemos observar que temos Arrays dentro de outros arrays
console.log(matrizVendas); // Aqui vai imprimir todos os Arrays
console.log(matrizVendas[1]); // Aqui vai apenas imprimir o segundo Array (posição 1)

matrizVendas[1][2] = 500; // Aqui vai imprimir o segundo array, que no caso é o 1, e dentro desse array vai pegar a terceira variável (valor 2) para alterar o valor
console.log(matrizVendas[1]); // Aqui quando eu pedir para aparecer o array 1 completo no terminal, o valor da terceira variável já estará atualizado

let resultadoLojaB = matrizVendas[1][0] + matrizVendas[1][1] + matrizVendas[1][2] 
console.log(resultadoLojaB); // Como somar os valores dentro das listas