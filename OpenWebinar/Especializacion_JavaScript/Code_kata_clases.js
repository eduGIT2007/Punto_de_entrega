// Simulamos un bloque de HTML obtenido, por ejemplo, de una web 
let inputHtml=`
<!DOCTYPE html>
<html>
<head></head>
<body>
    <p>Web de viajes</p>
    <div class="product">
        <div class="imagen">
            <img src="beach.jpg"/>
        </div>
        <div class="content">
            <p class="title">vacaciones en la playa</p>
            <p class="desc">para dos personas con pension completa</p>
            <p class="price">165€uro; por noche/persona</p>
        </div>
    </div>
</body>
</html>`;

// Clase encargada de extraer información del HTML usando expresiones regulares
class Extractor{
    // Propiedad privada
    #value;

    // El constructor recibe el HTML y el patrón a buscar
    constructor(html, pattern){
        this.#value=this.#extract(html, pattern);
    }

    // Getter para acceder al valor extraído
    get value(){
        return this.#value;
    }

    // Método privado que realiza la extracción mediante regex
    #extract(html,pattern){
        let captur=pattern.exec(html);
        return captur[1]; // Retornamos el primer grupo capturado
    }
}

// Clase que modela un Producto
class Product {
    // Propiedades privadas
    #title;
    #image;

    constructor (title, image){
        this.#image=image;
        this.#title=title
    }

    // Getters para acceder a las propiedades
    get title(){
        return this.#title
    }
    get image(){
        return this.#image
    }
}

// Instanciamos Extractores con expresiones regulares para imagen y título
let image = new Extractor(inputHtml, new RegExp(/<img src="(?<image>.*)"\/>/));
let title = new Extractor(inputHtml, new RegExp(/<p class="title">(.*)<\/p>/));

// Creamos un nuevo Producto con los datos extraídos
let product= new Product(title.value,image.value);

console.log(product);
console.log(product.image); // Mostrará "beach.jpg"
console.log(product.title); // Mostrará "vacaciones en la playa"