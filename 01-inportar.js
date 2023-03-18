// * Importar las funciones desde el otro 
// const funcionesinport = require("./01-m10-modulo")

// * forma mas limpia de importar las funciones
const {suma,multi,resta,factorial} = require('./01-m10-modulo');

const sum = suma(5,4)
console.log(sum);