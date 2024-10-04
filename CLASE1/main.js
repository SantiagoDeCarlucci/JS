class Jugador {
    constructor(nombre, precision) {
        this.nombre = nombre;
        this.precision = precision; 
    }

    patearPenal(portero) {
        const resultado = Math.random() * 100;
        if (resultado < this.precision) {
            alert(`${this.nombre } hace un gol!`);
            return true;
        } else if (resultado < portero.habilidad) {
            alert(`${ portero.nombre } ataja el penal de ${ this.nombre }!`);
            return false;
        } else {
            alert(`${ this.nombre } falla el penal!`);
            return false;
        }
    }
}

class Portero {
    constructor(nombre, habilidad) {
        this.nombre = nombre;
        this.habilidad = habilidad; 
    }
}

function crearJugador() {
    const nombre = prompt("Ingrese el nombre del jugador:");
    const precision = parseInt(prompt`(Ingrese la calidad de ${ nombre }(entre 1 y 100): )`);
    return new Jugador(nombre, precision);
}

function crearPortero() {
    const nombre = prompt("Ingrese el nombre del arquero:");
    const habilidad = parseInt(prompt`(Ingrese la habilidad de ${ nombre } para atajar(entre 1 y 100): )`);
    return new Portero(nombre, habilidad);
}

function tandaPenales(jugadores, portero) {
    let goles = 0;
    jugadores.forEach(jugador => {
        if (jugador.patearPenal(portero)) {
            goles++;
        }
    });
    return goles;
}

alert("Bienvenido al simulador de penales");

const cantidadJugadores = parseInt(prompt("Cuantos jugadores patean los penales?"));
const jugadores = [];

for (let i = 0; i < cantidadJugadores; i++) {
    const jugador = crearJugador();
    jugadores.push(jugador);
}

const portero = crearPortero();

alert("Comienza la tanda de penales");
const golesTanda1 = tandaPenales(jugadores, portero);
alert`(En la primera tanda, se hicieron ${ golesTanda1 } goles.)`;


if (confirm("Queres jugar otra tanda de penales?")) {
    const golesTanda2 = tandaPenales(jugadores, portero);
    alert`(En la segunda tanda, se hicieron ${ golesTanda2 } goles.)`;
} else {
    alert("Gracias por jugar");
}