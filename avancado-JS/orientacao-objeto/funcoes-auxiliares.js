function Animal(){

	this.raca = "Cao";
	this.nome = "Lulu";
	this.idade = 2.0;
	this.peso = 5.0;

	//MÉTODOS DOS OBJETOS - AÇÕES

	this.fazerXixi = function(){
		console.log("fazendo xixi...");
	}

	
	this.comer = function(kg){

		for(var i=1; i<=kg; i++){
			this.mastigar(i);
		}

		console.log("comendo...");
		//CÓDIGO PARA QUANDO COMER, GANHAR PESO
		this.peso = this.peso + (kg/2);
	}

	//FUNÇÃO AUXILIAR PARA QUANDO COMER, MASTIGAR
	this.mastigar = function(i){
		console.log(i + " - Nhoc...");
	}

}

var lulu = new Animal();
lulu.raca = "Gato";
lulu.nome = "Lulu";

var xuxu = new Animal();
xuxu.raca = "Cao";
xuxu.nome = "Xuxu";

