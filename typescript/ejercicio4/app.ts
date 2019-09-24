let nombre:string = "Juan";
let apellido:string = "perez";
let edad:number= 32;

//let texto = "Hola, "+ nombre + " "+apellido+ "("+edad+")";
let texto = `Hola, 
${nombre} ${apellido} 
(${edad})`;

function getNombre(){
    return "miguel";
}


let texto2:string = `${getNombre()}`;

console.log(texto);
console.log(texto2);

