// Ejemplo de Hoisting en JavaScript usando var
// Al usar 'var', JavaScript eleva la declaración de la variable al principio del código, pero no su asignación.
// Por eso esta línea no da un error de "variable no definida", sino que imprime 'undefined'.
console.log(name);
	
// Aquí es donde realmente se le asigna el valor, pero el console.log anterior ya se ejecutó.
// Si usáramos let o const en lugar de var, el console.log daría un error antes de llegar aquí.
var name = "Alumno";