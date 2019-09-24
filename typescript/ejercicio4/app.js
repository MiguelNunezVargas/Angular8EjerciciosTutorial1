"use strict";
var nombre = "Juan";
var apellido = "perez";
var edad = 32;
//let texto = "Hola, "+ nombre + " "+apellido+ "("+edad+")";
var texto = "Hola, \n" + nombre + " " + apellido + " \n(" + edad + ")";
function getNombre() {
    return "miguel";
}
var texto2 = "" + getNombre();
console.log(texto);
console.log(texto2);
