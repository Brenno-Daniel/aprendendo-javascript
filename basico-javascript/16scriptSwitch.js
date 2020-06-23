x = prompt("Digite um valor no intervalo de 0 a 3: ");

switch(x){
    case "0":
        document.write("Número é 0.");
        break;
    case "1":
        document.write("Número é 1.");
        break;
    case "2":
        document.write("Número é 2.");
        break;
    case "3":
        document.write("Número é 3.");
        break;
    default:
        document.write("Número digitado não está no intervalo proposto.");
        break;
}