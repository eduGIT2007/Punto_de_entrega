// Array tradicional con diferentes frutas
let fruit= ["orange", "Lemon", "grapes"] ;
// Colección Set para definir nuestras opciones disponibles (no permite duplicados)
let myOptions= new Set([ "watermelon","banana","orange"])

// Bucle for...of para recorrer cada elemento del array fruit
for(let elem of fruit){
    // Comprobamos si la fruta actual está dentro de nuestras opciones
    if(myOptions.has(elem)){
        console.log(elem);
        break; // Si la encontramos, mostramos y rompemos el bucle
    }else{
        console.log(elem);
        continue; // Si no, la mostramos y pasamos a la siguiente iteración
    }
}

/*
// Ejemplo de bucle sobre un Set
let fruit= new Set(["orange", "Lemon", "grapes"]) ;

for(let elem of fruit){
    console.log(elem)
}

---------------------------------
// Ejemplo de bucle for...in sobre un objeto literal
let fruits={a:"orange",b:"lemon",c:"grapes"};
for(let elem in fruits){
    console.log(fruits[elem]); // Accedemos al valor a través de la clave
}
----------------------

// Ejemplo de bucle do...while, asegura al menos una ejecución
let limit = 3;

do {
    limit--;
} while (limit>0);

console.log("He acabado el bucle");
----------------------------------------

// Ejemplo de bucle for clásico para rellenar un array
let enumeracion=[];

for(let i = 0; i<10;i++){
    enumeracion[i]=i+1; // Asignamos valores del 1 al 10
}
console.log(enumeracion);
*/