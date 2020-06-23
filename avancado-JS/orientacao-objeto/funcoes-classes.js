function Animal(){

	this.raca = "Cao";
	this.nome = "Lulu";
	this.idade = 2.0;
	this.peso = 5.0;

	//MÉTODOS DOS OBJETOS - AÇÕES

	this.fazerXixi = function(){
		console.log("fazendo xixi...");
	}

	//MÉTODO PARA QUANDO COMER, GANHAR PESO
	this.comer = function(kg){
		console.log("comendo...");
		this.peso = this.peso + (kg/2);
	}

	this.andar = function(metros){

		console.log("andando...");

		if(metros <= 1){

			this.peso = this.peso - (metros/0.5);

		}if(metros <=5){

			this.peso = this.peso - (metros/2.5);

		}if(metros <= 10){

			this.peso = this.peso - (metros/5);

		}else{

			console.log("verifique o peso...");

		}

	}

}

var lulu = new Animal();
lulu.raca = "Gato";
lulu.nome = "Lulu";

var xuxu = new Animal();
xuxu.raca = "Cao";
xuxu.nome = "Xuxu";

