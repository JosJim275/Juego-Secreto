let titulo = document.querySelector("h1");
titulo.innerHTML="Hora del desafio dos";

function FN(){
    console.log(`Hola mundo`);
}

function FP(nombre="Eduar"){
    console.log(`Hola ${nombre}`);
}

function doble(num){
    return 2 * num;
}

function prom(num1, num2, num3){
    return (num1+num3+num2)/3;
}

function mayor(num1, num2) {
    if (num1 > num2){
        return num1;
    }else if (num2>num1){
        return num2;
    }else {
        console.log("Son iguales")
    }
}

function cuadrado(num) {
    return Math.pow(num, 2);
}
console.log("Función doble: ");
console.log(doble(2));
console.log("Función promedio: ");
console.log(prom(10, 8, 8));
console.log("Función mayor: ");
console.log(mayor(8, 9));
console.log("Función cuadrado: ");
console.log(cuadrado(10));