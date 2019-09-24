"use strict";
//destructuración objetos
var avenger = {
    nombre: "Steve",
    clave: "Capitan América",
    poder: "Super Suero"
};
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
/*
let nombre = avenger.nombre;
let clave = avenger.clave;
let poder = avenger.poder;
*/
//console.log(nombre, clave, poder);
//destructuración arreglos
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], cap = avengers[1], ironman = avengers[2]; //es secuencial
console.log(thor, cap, ironman);
