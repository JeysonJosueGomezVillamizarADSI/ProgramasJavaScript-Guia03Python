let cont=0;
while (cont<=10) {
    let n1=Number(prompt("Escribe el primer numero: "))
	let n2=Number(prompt("Escribe el segundo numero: "))
	let sum=n1+n2
	alert("El resultado de la suma es " +sum)
	let rest=n1-n2
	alert("El resultado de la resta es " +rest)
	let mult=n1*n2
	alert("El resultado de la multiplicacion es " +mult)
	let div=n1/n2
	alert("El resultado de la division es " +div)
	cont+=1
}
alert("Fin del Programa")