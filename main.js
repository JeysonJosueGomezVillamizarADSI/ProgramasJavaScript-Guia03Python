let cont=1;
let materiaFundamentos=Number(prompt("Digite los creditos de la materia fundamentos : "));
let materiaBd=Number(prompt("Digite los creditos de la materia BD : "));
let materiaEtica=Number(prompt("Digite los creditos de la materia Etica"));
let cantidad=Number(prompt("Digite la cantidad de estudiantes"));

while (cont<=cantidad) {
    let caliFundamentos=int(input('Digite la calificacion de la materia de fundamentos: '))
    let caliBD=int(input('Digite la calificacion de la materia de BD: '))
    let caliEtica=int(input('Digite la calificacion de la materia de etica: '))

    let materia1=caliFundamentos*materiaFundamentos;
    let materia2=caliBD*materiaBd;
    let materia3=caliEtica*materiaEtica;

    let sumaCreditos=materiaFundamentos+materiaBd+materiaEtica
    let ponderacion(materia1+materia2+materia3)/sumaCreditos;

    alert('Su promedio ponderado es de',ponderacion)

    cont+=1;
}

alert("Programa Finalizado");
