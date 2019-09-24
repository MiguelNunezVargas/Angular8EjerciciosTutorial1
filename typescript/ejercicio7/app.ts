//destructuración objetos

let avenger = {
    nombre: "Steve",
    clave: "Capitan América",
    poder: "Super Suero"
}

let {nombre, clave, poder} = avenger;

/*
let nombre = avenger.nombre;
let clave = avenger.clave;
let poder = avenger.poder;
*/
//console.log(nombre, clave, poder);

//destructuración arreglos

let avengers:string[] = ["Thor", "Steve", "Tony"];

let [thor,cap,ironman] = avengers; //es secuencial

console.log(thor, cap, ironman);

