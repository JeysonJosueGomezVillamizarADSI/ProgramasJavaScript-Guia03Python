let cantidadGallinas=Number(prompt("Ingrese la cantidad de gallinas"));
let cont=1;

while (cont<=cantidadGallinas) {
    let peso=Number(prompt("Ingrese el peso de la gallina"));
    let altura=Number(prompt("Ingrese la altura de la gallina en cm"));
    let numHuevo=Number(prompt("Ingrese el numero de huevos que pone la gallina"));

    let calidad=(peso*altura)/numHuevo;
    alert("La calidad del huevo que puso la gallina es de "+calidad);
    let precio=calidad*1000;
    alert("El precio de venta por cada kilo de huevo es"+precio);
    cont+=1;
}
alert("Programa Finalizado");