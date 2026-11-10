let phone = new RegExp(/\+34\s?([0-9]{3})\s?([0-9]{3})\s?([0-9]{3})/);

let isValid =phone.exec("+34 675 756 904");
console.log(isValid!==null);

/*

let html="<html><body><h1 class=\"h1 font text\">Formacion tecnica</h1></body></html>"

let expresion = new RegExp(/<h1.*class=".*">(?<texto>.*)<\/h1>/);
let resul=expresion.exec(html);
console.log(resul);
*/