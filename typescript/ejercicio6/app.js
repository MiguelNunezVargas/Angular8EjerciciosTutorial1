"use strict";
var miFunction = function (a) {
    return a;
};
var miFunctionF = function (a) { return a; };
//console.log(miFunction("normal"));
//console.log(miFunctionF("Flecha"));
var miFunction2 = function (a, b) {
    return a + b;
};
var miFunction2F = function (a, b) { return a + b; };
//console.log(miFunction2(1,2));
//console.log(miFunction2F(1,2));
var miFunction3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFunction3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//console.log(miFunction3("Miguel"));
//console.log(miFunction3F("Miguel"));
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.nombre + " smash!!!");
        }, 1500);
    }
};
hulk.smash();
