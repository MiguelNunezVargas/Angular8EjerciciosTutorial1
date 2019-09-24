//promesas

let prom1 = new Promise( function(resolve, reject){

    setTimeout(()=>{
        console.log("promesa terminada");
    }, 1500);

    //termina bien
    resolve();
    
    
    //termina mal
    reject();
})


console.log("paso1");

prom1.then(function (){
    console.log("Ejecutarme cuando se termine bien");
},
    function(){
        console.error("ejecutarme cuando me salga mal");
    }
)

console.log("paso2");