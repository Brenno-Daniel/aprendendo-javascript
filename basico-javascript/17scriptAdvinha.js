function verificar(){
    var n1 = document.getElementById("num1").innerHTML;
    var n2 = document.getElementById("num2").value;

    if(n1 == n2){
        alert("Está igual.");
    }else{
        alert("O número digitado é diferente.");
    }
    resetar();
}

function resetar(){

    document.getElementById("num2").value = "";

    var r = Math.floor(Math.random() * 100);
    document.getElementById("num1").innerHTML = r;

}
