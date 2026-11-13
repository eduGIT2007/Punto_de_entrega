// Declaramos la variable pero no le asignamos ningún valor (su valor por defecto es 'undefined')
let hasPizza;

// Comprobamos si el valor es exactamente igual a false
// Como hasPizza es undefined, la comparación undefined == false resulta en falso.
if(hasPizza == false){
    console.log("No tengo pizza");
    
}else{
    // Como la condición del if no se cumple, el código entra por este else.
    // Al imprimirlo, veremos por consola el valor real de la variable: undefined
    console.log(hasPizza);
}
