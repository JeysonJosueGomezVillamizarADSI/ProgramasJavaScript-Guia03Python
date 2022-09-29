let cont=1;
while(cont<=5){
    let nombre=prompt("Escribe el nombre del estudiante : ");
    let apellido=prompt("Escribe el apellido del estudiante: ");
    let edad=Number(prompt("Escribe la edad del estudiante: "));

    let nota1=Number(prompt("Escribe la primera nota del estudiante: "));
    let nota2=Number(prompt("Escribe la segunda nota del estudiante: "));

    let promedio=(nota1+nota2)/2;
    alert(" El estudiante " + nombre + apellido + " su edad es de " + edad + " tiene una nota promedio  de " + promedio);
    cont+=1
}


alert("Fin del Programa")