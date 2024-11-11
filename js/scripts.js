// querySelector
//? Retorna hasta un o ningún elemento que concuerde con el selector que escribimos (selector CSS)

const heading = document.querySelector('#heading'); // Retorna 0 o 1 elemento
heading.textContent = "Nuevo Heading";  // Modificando el texto con JS
heading.classList.add('nueva-clase'); // Agregando nueva clase desde JS 

console.log(heading);  // Si no encontró el selector en el document, imprime null

// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');  // Retorna 0 si no existe o un arreglo de todas las existencias
console.log(enlaces);

enlaces[0].textContent = "Nuevo Texto para Enlace";

// getElementById