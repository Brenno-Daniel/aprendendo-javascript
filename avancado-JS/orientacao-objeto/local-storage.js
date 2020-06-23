//SALVAR O NOME LOCALMENTE
if(typeof localStorage.nome == "undefined"){
	localStorage.nome = prompt("Qual é o seu nome?");
}

document.getElementById("info").innerHTML = localStorage.nome;

