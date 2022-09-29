let vehiculo=4;
let turismo=0;
let pert=0;
let autobus=0;
let camioneta=0;
let motocicleta=0;
let cont=1;

while (cont<=vehiculo) {
    let tipoVehiculo=prompt("Ingrese el tipo de vehiculo que esta pasando (turismo, autobus, camion o motocicleta.: )");
    cont+=1

    if (tipoVehiculo=='turismo'){

        let per=int(input('Cantidad de personas: '))
        turismo+=1
        pert=per+pert}

    if(tipoVehiculo=='autobus'){

        autobus+=1}

    if(tipoVehiculo=='camion'){

        camioneta+=1}
    
    else{

        motocicleta+=1}
}
alert('Cantidad de autobuses',aut)
alert('Cantidad de camiones',cam)
alert('Cantidad de motocicletas',mot)
alert('Cantidad de turismo',tur)
alert('Cantidad de personas en vehiculos de turismo',pert)



alert("Programa Finalizado")
