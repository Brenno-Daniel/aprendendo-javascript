
function addBola(){
    //Criando uma div e colocando atributos class e bola
    //<div class="bola"></div>
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    //Calcular as duas posições para a bola
    var p1 = Math.floor(Math.random() * 1200);
    var p2 = Math.floor(Math.random() * 500);

    //Gerar cor de fundo aleatória
    /*var c1 = Math.floor(Math.random() *10);
    var c2 = Math.floor(Math.random() *10);
    var c3 = Math.floor(Math.random() *10);
    var c4 = Math.floor(Math.random() *10);
    var c5 = Math.floor(Math.random() *10);
    var c6 = Math.floor(Math.random() *10);*/

    //Gerar tamanhos aleatórios
    //var width = Math.floor(Math.random()* 100);
    //var height = Math.floor(Math.random()* 100);

    //Colocar um CSS livre
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
    //+ "background-color:#"+c1+c2+c3+c4+c5+c6+";");
    
    bola.setAttribute("onclick", "estourar(this)");

    //Adicionar o elemento na tela
    document.body.appendChild(bola);

}
function estourar(elemento){
    //Remover o elemento da tela
    document.body.removeChild(elemento);
}
function iniciar(){
    //Setar o intervalo de tempo
    setInterval(addBola, 1000);//Cada mil é um segundo
}


