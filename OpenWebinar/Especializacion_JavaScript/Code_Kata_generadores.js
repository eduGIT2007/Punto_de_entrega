// Función generadora indicada por el asterisco (*)
// Permite pausar y reanudar su ejecución usando yield
function* extractNumbre(attemps){
    for(let i =0;i<attemps;i++){
        // yield pausa la función y devuelve un número aleatorio entre 0 y 90
        yield Math.floor(Math.random()*91);
    }
}

let cpu=0;
let player=0;

// Instanciamos el generador para la CPU con 2 intentos
let cpuGenerator=extractNumbre(2);
// Pedimos el primer número con .next().value
cpu+=cpuGenerator.next().value;
// Pedimos el segundo número
cpu+=cpuGenerator.next().value;

// Repetimos el proceso para el jugador
let playerGenerator=extractNumbre(2);
player+=playerGenerator.next().value;
player+=playerGenerator.next().value;

console.log("CPU: "+cpu);
console.log("Player: "+player);

// Comparamos puntuaciones usando un operador ternario
console.log(cpu < player ? "Gana player":"Gana CPU");