"use strict";
function enviarMision(xmen) {
    console.log("Enviando a:" + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando a:" + xmen.nombre);
}
var wolverine = {
    nombre: "Wolverine",
    poder: "regeneracion"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
