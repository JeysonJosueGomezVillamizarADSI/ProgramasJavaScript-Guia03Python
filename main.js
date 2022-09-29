let cont = 1;
let opcionA = 0;
let opcionB = 0;
let opcionC = 0;

let cantidad = Number(prompt("Digite la cantidad de alumnos que van a votar : "))
while (cont <= cantidad) {
    let representante = prompt("Eliga el representante por el cual desea votat: (A,B o C : )")
    cont += 1;
    if (representante == "A") {
        opcionA += 1;
    } else if (representante == "B") {
        opcionB += 1;
    } else {
        opcionC += 1;
    }

    let totalA = (opcionA / cantidad) * 100;
    let totalB = (opcionB / cantidad) * 100;
    let totalC = (opcionC / cantidad) * 100;
    if (totalA > totalB && totalA > totalC) {

        alert('El porcentaje de la votacion del representante A es' + totalA)
        alert('El porcentaje de la votacion del representante B es' + totalB)
        alert('El porcentaje de la votacion del representante C es' + totalC)
    } else if (totalB > totalA && totalB > totalC) {

        alert('El porcentaje de la votacion del representante A es' + totalA)
        alert('El porcentaje de la votacion del representante B es' + totalB)
        alert('El porcentaje de la votacion del representante C es' + totalC)
    }

    if (totalC > totalA && totalC > totalB) {

        alert('El porcentaje de la votacion del representante A es' + totalA)
        alert('El porcentaje de la votacion del representante B es' + totalB)
        alert('El porcentaje de la votacion del representante C es' + totalC)
    }
    if (totalB == totalA && totalB == totalC) {

        print('SE CANCELAN ELECCIONES DE REPRESENTANTE')
    }

    else if(totalA >= totalB && totalB > totalC){

        cont = 1
        opcionA = 0
        opcionB = 0

        alert('HAY UN EMPATE ENTRE A Y B')

        cantidad = Number(prompt('Digite la cantidad de alumnos que van a votar: '))

        while (cont <= cantidad) {

            cont += 1

            representante = Number(prompt('Digite el representante por el que va a votar (A o B): ')

        if (rep == 'A') {
                a += 1
            }
            else { b += 1 }
        }

        totalA = (opcionA / cantidad) * 100
        totalB = (opcionB / cantidad) * 100

        if (tota >= 51) {

            alert('El ganador de las votaciones es A con un' + totalA)
        }

        if (totalB >= 51) {

            alert('El ganador de las votaciones es B con un' + totalB)
        }

        else {

            alert('DOBLE EMPATE ENTRE A Y B')
        }

        if (totalA >= totalC && totc > totb) {

            con = 1
            a = 0
            c = 0

            alert('HAY UN EMPATE ENTRE A Y C')
        }

        cantidad = Number(prompt('Digite la cantidad de alumnos que van a votar: '))

        while (cont <= cantidad{

            cont += 1

            representante = prompt('Digite el representante por el que va a votar (A o C): ')

            if (rep == 'A') {
                a += 1
            }

            else { c += 1 }
        }

        totalA = (opcionA / cantidad) * 100
        totalC = (opcionC / cantidad) * 100

        if (tota >= 51) {
            alert('El ganador de las votaciones es A con un' + totalA)
        }

        else if (totc >= 51) {
            alert('El ganador de las votaciones es C con un' + totalC)
        }



        else {

            print('DOBLE EMPATE ENTRE A Y C')
        }
    }

else {
            cont = 1
            opcionB = 0
            opcionC = 0

            alert('HAY UN EMPATE ENTRE B Y C')

            cantidad = Number(prompt('Digite la cantidad de alumnos que van a votar: '))

            while (con <= can) {

                cont += 1

                representante = prompt('Digite el representante por el que va a votar (B o C): ')

                if (representante == 'B') {
                    opcionB += 1
                }

                else {
                    opcionC += 1
                }
            }
            totalB = (opcionB / cantidad) * 100
            totalC = (opcionC / cantidad) * 100

            if (totalB >= 51) {

                alert('El ganador de las votaciones es B con un' + totalB)
            }

            else if (totalC >= 51) {

                print('El ganador de las votaciones es C con un' + totalC)
            }

            else {

                print('DOBLE EMPATE ENTRE B Y C')
            }
        }
    }

alert("Programa Finalizado")
