function validarSenha(x) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(x);
}

var password = prompt("Insira sua senha: ");

if (validarSenha(String(password))) {
    console.log("Senha válida");
} else {
    console.log("Senha inválida")
}
