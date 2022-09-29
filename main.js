let noTienenDerecho=0;
let cont=0;

while (cont<=40) {
    let nt1 = Number(prompt("Digite la primera nota : "));

    let nt2 = Number(prompt("Digite la segunda nota : "));

    let nt3 = Number(prompt("Digite la tercera nota : "));

    let nt4 = Number(prompt("Digita la cuarta nota : "));

    let nt5 = Number(prompt("Digite la quinta nota : "));

    let pro = (nt1 + nt2 + nt3 + nt4 + nt5) / 5;
    cont += 1;

    if (pro<=3) {
        noTienenDerecho+=1;
    }
    alert("La cantidad de alumnos que no tienen derecho al examen de nivelacion son : "+noTienenDerecho)
}

alert("Fin del Programa")