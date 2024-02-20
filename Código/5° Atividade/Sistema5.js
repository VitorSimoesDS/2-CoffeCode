function numeroDiasNoMes(x) {
    x = x.toLowerCase();

    switch(x) {
        case "janeiro":
        case "março":
        case "maio":
        case "julho":
        case "agosto":
        case "outubro":
        case "dezembro":
            return 31;
        case "abril":
        case "junho":
        case "setembro":
        case "novembro":
            return 30;
        case "fevereiro":
            return 28;
        default:
            return -1;
    }
}

var month = prompt("Digite o nome de um mês: ");
var days = numeroDiasNoMes(month);

if(days === -1) {
    console.log("Nome do mês inválido.");
} else {
    console.log(`O mês de ${month} tem ${days} dias.`);
}
