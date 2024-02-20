let number1 = parseInt(prompt("Ensira o primeiro valor: "));
let number2 = parseInt(prompt("Ensira o segundo valor: "));
let number3 = parseInt(prompt("Ensira o terceiro valor: "));

if (number1 > number2 && number1 > number3) {
    console.log("O primeiro número (" + number1 + ") é o maior.");
} else if (number2 > number1 && number2 > number3){
    console.log("O segundo número (" + number2 + ") é o maior.");
}else{
    console.log("O terceiro número (" + number3 + ") é o maior.")
}

