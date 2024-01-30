let titulo = document.querySelector("h1");
titulo.innerHTML="Hora del desafio";

function console1(){
    console.log(`El boton fue cliciado`);
}

function prom(){
    let nombre = prompt("Dame el nombre de una ciudad");
    alert(`Estuve en ${nombre} y me acorde de ti`);
}

function aler(){
    alert("Yo amo JS");
}

function sum(){
    let num1 = parseInt(prompt("Dame el primer numero"));
    let num2 = parseInt(prompt("Dame el segundo numero"));
    alert(`El resultado de tu suma es ${num1+num2}`);
}