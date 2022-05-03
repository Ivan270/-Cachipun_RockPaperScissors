// Definir variable para numero de jugadas ('rounds') y rondas jugadas ('played').
var rounds = prompt(
	'Bienvenido ¿Cuántas rondas de Cachipún VS La Máquina quieres jugar?'
);
var played = 0;
var puntajeUser = 0;
var puntajeMachine = 0;

while (played < rounds) {
	var userChoice = prompt('Piedra, Papel o Tijera?'); // Obtener opcion del usuario
	var machineChoice = randomPlay(); // Obtener opción aleatoria de la máquina
	jugada(userChoice.toUpperCase(), machineChoice); // Ejecutar función de la jugada
	played++; // Sumar 1 a la cantidad de rondas jugadas.
	if (puntajeUser > puntajeMachine) {
		// Imprimir mensaje luego del conteo para informar al usuario si ganó, empató o perdió la partida completa.
		document.getElementById('ganador__title').innerHTML = `¡ Has ganado !`;
	} else if (puntajeUser < puntajeMachine) {
		document.getElementById('ganador__title').innerHTML = `¡ Has perdido =( !`;
	} else {
		document.getElementById('ganador__title').innerHTML = `¡ Empate !`;
	}
}

// Función para Jugada random del computador
function randomPlay() {
	var jugadaMachine = Math.floor(Math.random() * 3) + 1;
	{
		if (jugadaMachine == 1) {
			return 'PIEDRA';
		} else if (jugadaMachine == 2) {
			return 'PAPEL';
		} else {
			return 'TIJERA';
		}
	}
}
// Función para cada jugada. Compara elecciones entre jugador y máquina y finalmente elige un ganador para cada ronda sumando un punto al score.
function jugada(user, machine) {
	// Primero jugadas ganadoras
	if (
		(user == 'PIEDRA' && machine == 'TIJERA') ||
		(user == 'PAPEL' && machine == 'PIEDRA') ||
		(user == 'TIJERA' && machine == 'PAPEL')
	) {
		puntajeUser++;
		document.getElementById('user__score').innerHTML = `${puntajeUser}`;
		document.getElementById('machine__score').innerHTML = `${puntajeMachine}`;
		alert(
			`¡Ganaste! Elegiste ${user} y la máquina ${machine} ¡Felicitaciones!.`
		);
		// Luego jugadas empate
	} else if (user == machine) {
		puntajeUser++;
		puntajeMachine++;
		document.getElementById('user__score').innerHTML = `${puntajeUser}`;
		document.getElementById('machine__score').innerHTML = `${puntajeMachine}`;
		alert(`Empate!`);
		// Jugadas perdedoras
	} else if (
		(user == 'TIJERA' && machine == 'PIEDRA') ||
		(user == 'PIEDRA' && machine == 'PAPEL') ||
		(user == 'PAPEL' && machine == 'TIJERA')
	) {
		puntajeMachine++;
		document.getElementById('user__score').innerHTML = `${puntajeUser}`;
		document.getElementById('machine__score').innerHTML = `${puntajeMachine}`;
		alert(
			`¡Perdiste! La máquina eligió ${machine} y tú ${user}. Mejor suerte para la próxima.`
		);
		// Jugadas inválidas, no eligió opción adecuada.
	} else {
		alert(`Opción inválida. Recuerda escribir 'Piedra, papel o Tijera'`);
	}
}
