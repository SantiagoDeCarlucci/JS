let nombreUsuario = prompt("Ingrese su nombre")
console.log (nombreUsuario)

alert ("Bienvenido " +  nombreUsuario + "A continuacion participara del juego")

function pedirNumero() {
    let numero = parseInt(prompt("Adivina el numero secreto (entre 1 y 100):"));

    while (isNaN(numero) || numero < 1 || numero > 100)  {
        alert("Ingresa un numero entre 1 y 100.");
        numero = parseInt(prompt("Adivina el numero secreto (entre 1 y 100):"));
    }

    return numero; 
}


function iniciarJuego() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1; 
    let intentos = 0;
    let adivinanza = null;

    while (adivinanza !== numeroSecreto) {
        adivinanza = pedirNumero(); 
        intentos++;

        if (adivinanza < numeroSecreto) {
            alert("El numero es mayor. ¡Ssegui intentando!");
        } else if (adivinanza > numeroSecreto) {
            alert("El numero es menor. ¡Segui intentando!");
        } else {
            alert("¡Felicidades! " + nombreUsuario + " Adivinaste el numero " + numeroSecreto + " en " + intentos + " intentos.");
        }
    }

    let jugarDeNuevo = prompt("¿Queres jugar denuevo? (si/no)").toLowerCase();
    if (jugarDeNuevo === "si") {
        iniciarJuego(); 
    } else {
        alert(nombreUsuario + "¡Gracias por jugar! Nos vemos.");
    }
}


iniciarJuego();