let numTrabajadores=Number(prompt("Ingresa el numero de trabajadores : "));
let cont=1;
let comision=0;

while (cont<=numTrabajadores) {
    let sueldo=Number(prompt("Ingrese el sueldo del trabajador : "));
    let venta1= Number(prompt("Ingrese la primera venta : "));
    let venta2=Number(prompt("Ingrese la segunda venta : "));
    let venta3=Number(prompt("Ingrese la tercera venta : "));

    comision=(venta1+venta2+venta3)*0.10;

    alert("El trabajador tiene un sueldo mensual de " + sueldo + "con una comision mensual de " + comision );
    alert("El sueldo total mas la comision es de " + (sueldo+comision));
}

alert("Programa Finalizado");
