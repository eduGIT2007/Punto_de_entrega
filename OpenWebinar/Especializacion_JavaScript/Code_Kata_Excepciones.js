let inputHtml = `
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

class Extractor {
    #value;

    constructor(html, pattern) {
        this.#value = this.#extract(html, pattern);
    }

    get value() {
        return this.#value;
    }

    #extract(html, pattern) {
        // Bloque try...catch para manejar posibles errores si la regex no encuentra nada
        try {
            let captur = pattern.exec(html);
            return captur[1];
        } catch (e) {
            return "-not found-" // Si falla la ejecución, devolvemos un valor por defecto en lugar de romper el programa
        }
    }
}

class Product {
    #title;
    #image;

    constructor(title, image) {
        this.#image = image;
        this.#title = title
    }

    get title() {
        return this.#title
    }
    get image() {
        return this.#image
    }
}

// Envolvemos la instanciación en un try...catch general
try {
    let image = new Extractor(inputHtml, new RegExp(/<img src="(?<image>.*)"\/>/));
    let title = new Extractor(inputHtml, new RegExp(/<p class="title">(.*)<\/p>/));

    let product = new Product(title.value, image.value);

    console.log(product);
    console.log(product.image);
    console.log(product.title);
} catch (e) {
    // Si algo crítico falla en la creación, informamos al usuario
    console.log("No se puede obstener la información completa para crear el producto")
}