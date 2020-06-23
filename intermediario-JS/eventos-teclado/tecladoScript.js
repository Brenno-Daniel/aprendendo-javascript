function apertouTecla(evento){
    //Pegar quando uma tecla for precionada
    //console.log("Apertou uma tecla: "+ evento.keyCode);

    //Pegar quando o Shift for precionado
    if(evento.shiftKey == true){
        console.log("Apertou alguma tecla com Shift");
    }

    //Pegar quando o Ctrl for precionado
    if(evento.ctrlKey == true){
        console.log("Apertou alguma tecla com Ctrl");
    }
}