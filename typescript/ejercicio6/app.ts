let miFunction = function(a:string){
    return a;
}
let miFunctionF = (a:string) => a;
//console.log(miFunction("normal"));
//console.log(miFunctionF("Flecha"));

let miFunction2 = function(a:number, b:number){
    return a + b;
}
let miFunction2F = (a:number, b:number) => a+b;

//console.log(miFunction2(1,2));
//console.log(miFunction2F(1,2));

let miFunction3 = function(nombre:string){
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFunction3F = (nombre:string) =>{
    nombre = nombre.toUpperCase();
    return nombre;
}

//console.log(miFunction3("Miguel"));
//console.log(miFunction3F("Miguel"));




let hulk = {
    nombre: "Hulk",
    smash(){        
        setTimeout(() => {
            console.log(this.nombre + " smash!!!");    
        },1500);
    }
}


hulk.smash();