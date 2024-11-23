// querySelector
//? Retorna hasta un o ningún elemento que concuerde con el selector que escribimos (selector CSS)

const heading = document.querySelector('#heading'); // Retorna 0 o 1 elemento
heading.textContent = "Nuevo Heading";  // Modificando el texto con JS
heading.classList.add('nueva-clase'); // Agregando nueva clase desde JS 

console.log(heading);  // Si no encontró el selector en el document, imprime null

// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');  // Retorna 0 si no existe o un arreglo de todas las existencias
// console.log(enlaces);

enlaces[0].textContent = "Nuevo Texto para Enlace";
// enlaces[0].href = "http://google.com";
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');
//? getElementById
// const heading2 = document.getElementById('heading');
// console.log(heading2);

//* Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

// Agregar el href
nuevoEnlace.href = "nuevo-enlace.html";

// Agregar el texto
nuevoEnlace.textContent = "Tienda Virtual";

// Agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");

// Agregarla al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);



console.log(nuevoEnlace);

// Eventos

// console.log(1);

// window.addEventListener("load", imprimir);  // load espera a que el javascript y los archivos que dependen del HTML estén listos (imágeenes y CSS)


// window.onload = function() {  // Forma alternativa
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() {  // Solo espera el HTML, pero no espera CSS o imágenes
//     console.log(4);
// });


// console.log(5);


// function imprimir() {  // Funcion para Callback
//     console.log(6);
// }

// window.onscroll = function(evento) {
//     console.log(evento);
// }


// Seleccionar elementos HTML y asignarles un evento

// const btnEnviar = document.querySelector('.boton--primario');

// btnEnviar.addEventListener('click', function(evento) {  //? Como esta asociado a un click, podemos usarlo en imagenes, textos, etc.
//     console.log(evento);
//     evento.preventDefault();  // Previene la acción por default de "Enviar Formulario"

//     //* Útil para validar formulario
//     console.log("Enviando Formulario");
// });


//* Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//* El Evento de Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Validar formulario

    const { nombre, email, mensaje } = datos;

    if (nombre === "" || email === "" || mensaje === "") {
        mostrarError("Todos los campos son obligatorios");

        return;  // Return corta la ejecución del código, usado para evitar ejecutar el resto
    }

    // Crear la alerta de que se envió correctamente

    mostrarMensaje('Mensaje enviado correctamente');

    // Enviar formulario

    console.log('Enviando Formulario');
});

//! Meter al objeto los valores
function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;  // Acceder al valor del objeto y modificarlo

    // console.log(datos);
}

function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    // Desaparezca después de 5 segundos

    setTimeout(() => {
        error.remove();
    }, 5000);
}

// Muestra una alerta de que se envió correctamente
function mostrarMensaje(mensaje) {
    const correcto = document.createElement('P');
    correcto.textContent = mensaje;
    correcto.classList.add('correcto');

    formulario.appendChild(correcto);

    // Desaparecer después de 5 segundos

    setTimeout(() => {
        correcto.remove();
    }, 5000);
}

