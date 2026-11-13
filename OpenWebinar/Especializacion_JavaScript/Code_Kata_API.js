// Añadimos un escuchador de eventos al botón con clase "request"
// Cuando se hace clic, se ejecuta la función requestActivity()
document.querySelector(".request").addEventListener("click", event =>{
    requestActivity();
});

// Función para realizar la petición HTTP a la API
function requestActivity(){
    const url= "http://www.boredapi.com/api/activity";
    const http= new XMLHttpRequest(); // Creamos el objeto para la petición

    // Preparamos la petición GET
    http.open("GET", url);
    // Definimos qué pasa cuando cambia el estado de la petición
    http.onreadystatechange=function(){
        // readyState 4 = petición finalizada y status 200 = OK
        if(this.readyState==4&&this.status==200){
            console.log("peticion realizada");
            // Pasamos la respuesta a la función para insertarla en el HTML
            insertOutputResponse(this.response);
        }
    }

    // Enviamos la petición
    http.send();
}

// Función para insertar los datos recibidos en el HTML
function insertOutputResponse(response){
    // Parseamos la respuesta JSON a un objeto JavaScript
    let decodedResponse=JSON.parse(response);
    
    // Seleccionamos el contenedor en el HTML
    let container=document.querySelector(".activity");
    container.innerHTML=""; // Limpiamos el contenido anterior
    
    // Creamos y añadimos un h4 para la actividad
    let activity= document.createElement("h4");
    activity.append(decodedResponse.activity);
    container.append(activity);

    // Creamos y añadimos un enlace si existe
    let link= document.createElement("a");
    link.href=decodedResponse.link;
    link.text=decodedResponse.link;
    container.append(link);

    // Creamos y añadimos un párrafo para el tipo de actividad
    let type= document.createElement("p");
    type.append(decodedResponse.type);
    container.append(type);
}