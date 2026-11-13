// Creamos una expresión regular para validar formato de números de teléfono de España
// Busca: +34 seguido de grupos opcionales de espacios y 3 dígitos
let phone = new RegExp(/\+34\s?([0-9]{3})\s?([0-9]{3})\s?([0-9]{3})/);

// Ejecutamos la expresión sobre un string de prueba
let isValid =phone.exec("+34 675 756 904");
// Verificamos si hubo coincidencia (si exec() no devuelve null)
console.log(isValid!==null);

/*
// Ejemplo de extracción de texto usando grupos con nombre 
let html="<html><body><h1 class=\"h1 font text\">Formacion tecnica</h1></body></html>"

// Busca el contenido dentro de una etiqueta h1 con clases y lo guarda en el grupo texto
let expresion = new RegExp(/<h1.*class=".*">(?<texto>.*)<\/h1>/);
let resul=expresion.exec(html);
console.log(resul);
*/