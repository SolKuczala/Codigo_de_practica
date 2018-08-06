let nombres = ['pepo', 'lara'];
let armas = ['arco', 'espada'];
let ciudades = ['mordor', 'cañitas'];
let clases = ['elfx', 'caballerx'];

let xChar = [nombres, armas, ciudades, clases];

for (let a = 0; a < xChar.length; a++) {
    let valoresPropiedad = xChar[a];
    let indiceRandom = Math.floor(Math.random()*valoresPropiedad.length);
    console.log(valoresPropiedad[indiceRandom]);
}


// let nombreIndex = Math.floor(Math.random()*nombres.length);
// let armasIndex = Math.floor(Math.random()*armas.length);
// let cuidadesIndex = Math.floor(Math.random()*ciudades.length);
// let clasesIndex = Math.floor(Math.random()*clases.length);



 

    
