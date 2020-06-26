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

// Funções

// function soma(n1, n2){
//     return n1 + n2;
// }

// alert(soma(5, 10));

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome);
// }

// alert(setReplace("Vai Japão", "Japão", "Brasil"));

// var validar = 0;

// function validaIdade(idade){

//     if(idade >= 18){
//         validar = true;
//     } else{
//         validar = false;
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade? ");
// validaIdade(idade)
// console.log(validar);


// Manipulando elementos da página

// function clicou(){
//     // alert("obrigado por clicar");
//     document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
// }

// function redirecionar(){
//     // window.open("https://web.digitalinnovation.one/"); // abre em outra janela :)
//     window.location.href = "https://web.digitalinnovation.one/"; // não abre em nova janela :(
// }

// function trocar(elemento){
//     // document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse";
//     // alert("Trocar texto")
//     elemento.innerHTML = "Obrigado por passar o mouse";
// }

// function voltar(elemento){
//     // document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
//     elemento.innerHTML = "Passe o mouse aqui"
// }

// function load(){
//     alert("Página carregada!");
// }

// function funcaoChange(elemento){
//     alert(elemento.value);
//     console.log(elemento.value);
// }

