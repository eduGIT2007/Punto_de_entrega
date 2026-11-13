// Búsqueda de elementos dentro de arrays/objetos
let fruit="orange";
let DispFruit=["lemon","orange","banana"];
// Comprobamos si el índice existe (OJO: 'in' en arrays comprueba índices, no valores)
console.log(fruit in DispFruit); // Dará false porque busca orange como índice, no como valor

/*
// Uso del operador ternario para condicionales cortos
let fruit="lemon";
let avalaibleFruits= new Set(["lemon","banana","watermelon"]);

// (condición ? verdadero : falso)
let isAvalaible= (avalaibleFruits.has(fruit)? "Avalaible":"No Avalaible");
console.log(isAvalaible);

---------------------------------------
// Uso de switch para múltiples condiciones que comparten lógica
let myFruit="watermelon"

switch(myFruit){
    case "orange":
    case "lemon": 
        console.log("Citric") // Comparte resultado para naranja y limón
        break; // Importante para no evaluar los siguientes casos
    case "banana": 
        console.log("tropical")
        break;
    case "watermelon":
        console.log("Big fruit")
        break;
}
*/