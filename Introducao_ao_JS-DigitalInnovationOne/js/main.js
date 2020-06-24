// alert("meu primeiro JS! (novamente)")
// Trabalhando com variáveis
// var nome = "Brenno Daniel";
// var idade = 22;
// var idade_str = "20";
// var idade_str2 = "2";
// var frase = "Japão é o melhor time do mundo!";

// var n1 = 5;
// var n2 = 3;


// alert("Bem vindo " + nome + "você tem " + idade + " anos de idade.");
// alert(idade_str + idade_str2);
// console.log(frase.replace("Japão", "BRasil"));
// alert(frase.replace("Japão", "BRasil"));
// console.log(frase.toUpperCase()); // Maiusculo
// console.log(frase.toLowerCase()); // Minusculo
// console.log(n1 + n2);

// Arrays

// var lista = ["maça", "pera", "laranja"]

// console.log(lista); // exibir a lista
// alert(lista[1]); // exibir um elemento pelo índice
// lista.push("uva"); // adicionar um elemento na lista
// console.log(lista);
// lista.pop(); // remover o último elemento da lista
// console.log(lista);
// console.log(lista.length) // ver o tamanho da lista
// console.log(lista.reverse()) // trazer os elementos da lista na ordem inversa
// console.log(lista.toString()) // transformar a lista em string
// console.log(lista.join(" - ")) // join também transforma em string mas você consegue também transformar ele


// Dicionário

// var fruta = {nome: "maça", cor: "vermelha"}

// console.log(fruta);
// console.log(fruta.nome)
// alert(fruta.cor)

// Lista de dicionários

// var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
// console.log(frutas)
// alert(frutas[1].nome)


// Condicionais

// IF

// Prompt exibe uma pergunta pro usuário e será gravada na variável indicada
// var idade = prompt("Qual sua idade?");

// if (idade >= 18){
//     alert("maior de idade");
// }else{
//     alert("menor de idade");
// }

// Laços de repetição

// WHILE

// var count = 0;

// while (count <= 5){
//     console.log(count);
//     count += 1;
//     // count ++; // mesma coisa que count += 1;
// };

// FOR

// var count;

// for(count = 0; count <= 5; count ++){
//     alert(count);
// }

// Trabalhando com data em JS
// var d = new Date();
// alert("Completo: " + d); // informações de data, dia, mes, ano, hora
// alert("Mês: " + (d.getMonth() + 1)); // por padrão o Month inicia em 0 então temos que adicionar um +1
// alert("Minutos: " + d.getMinutes()); // minutos
// alert("Horas: " + d.getHours()); // hora
// alert("Dia: " + d.getDay()); // dia

