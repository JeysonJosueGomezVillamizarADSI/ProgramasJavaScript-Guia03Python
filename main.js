let segundos=0;
let avion=222222;
let misil=222222;
let aceleracionAvion=20;
let aceleracionMisil=10;

while (aceleracionAvion-aceleracionMisil<=10000) {
    aceleracionAvion+=20+aceleracionAvion;
    aceleracionMisil+=10+aceleracionMisil;
    segundos+=1

    alert ('segundo ' + segundos)
    alert('distancia del avion ' +aceleracionAvion)
    alert('distancia del misil ' +aceleracionMisil)
}

alert("Programa Finalizado");
