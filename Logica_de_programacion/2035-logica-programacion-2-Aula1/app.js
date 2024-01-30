let numSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numSecreto)
    if (numeroUsuario==numSecreto){
        asignarTextoElemento("p", `Acertaste el numero. En ${intentos==1? "1 intento": intentos+" intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    }else {
        // El usuario no acertos
        limpiarCaja();
        if(numeroUsuario>numSecreto){
            asignarTextoElemento("p", "El numero secreto es menor");
        }else {
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
        intentos ++;
    }
    return;
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    intentos = 1;
    numSecreto = generarNumeroSecreto();
}

function reiniciarJuego() {
    //limpiar Caja
    limpiarCaja();
    //indicar el mensaje de incio
    //Generar numero aleatorio
    //Intentos
    condicionesIniciales();
    //desabilitar el boton de nuevo jueg
    document.querySelector(`#reiniciar`).setAttribute("disabled", "true");
    
}

function limpiarCaja() {
    document.querySelector(`#valorUsuario`).value=``;
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    if (numerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", " Ya se sortearon todos los numero")    
    }else{
        // si el numero generado esta incluido en la lista
        if (numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}
condicionesIniciales();