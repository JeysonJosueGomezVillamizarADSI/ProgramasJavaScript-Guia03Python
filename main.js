let cont=1

let cantidadVehi=Number(prompt("Ingrese la cantidad de vehiculos que ingresaron a bogota : "))
while (cont<=cantidadVehi) {
    let placa=Number(prompt("Digite el ultimo digito de la placa "))

    if (placa==1 || placa==2) {
        alert("La calcomania es amarilla")
    }else if (placa==3 || placa==4) {
        alert("La calcomania es rosa")
    }
    if(placa==5 || placa==6 ){
        alert("La calcomania es roja")
    }else if (placa==7 || placa==8) {
        alert("La calcomania es verde")
    }
    if (placa==8 || placa==9) {
        alert("La calcomania es azul")
    }else{
        alert("Error al digitar la placa")
    }

    cont+=1
}

alert("Programa Finalizado")
