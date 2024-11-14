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

console.log(1);

window.addEventListener("load", imprimir);  // load espera a que el javascript y los archivos que dependen del HTML estén listos (imágeenes y CSS)


window.onload = function() {  // Forma alternativa
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() {  // Solo espera el HTML, pero no espera CSS o imágenes
    console.log(4);
});


console.log(5);


function imprimir() {  // Funcion para Callback
    console.log(6);
}

window.onscroll = function() {
    console.log('scrolling...');
}