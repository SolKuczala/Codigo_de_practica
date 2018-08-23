//nostarch exercises

//permisos
function permiso() {
    let age = 13;
    let accompanied = true;

    if (age === 12 && accompanied === true) {
        console.log('puede pasar');
    } else {
        console.log('no puede pasar');
    }
}

//new insults ponele
let insults = ['forro','pelotudo','caraculo','pija rota','conshudo'];
console.log('Sos un '+ insults[Math.floor(Math.random()* insults.length)] + ' y un '
+ insults[Math.floor(Math.random()* insults.length)]);

//more sophisticated insults
let partesDelCuerpo = ['panza','pelo','culo','cabeza'] 
let Adjetivos = ['oloroso','grande','horrible','peludo']
let partesDunAnimal = ['puercoespin','mono','comadreja','oruga']
const randomParteCuerpo = partesDelCuerpo[Math.floor(Math.random()* partesDelCuerpo.length)];
let randomAdjetivo = Adjetivos[Math.floor(Math.random()* Adjetivos.length)];
let randomParteAnimal = partesDunAnimal[Math.floor(Math.random()* partesDunAnimal.length)];
console.log('tu '+ randomParteCuerpo + ' es tan '+ randomAdjetivo + ' como un/a ' + randomParteAnimal);

//magic ball
function mball() {
    let comidasRandom = [
        'papas fritas','carne al horno','berenjena al escabeche',
        'pollo asado','guiso de lentejas'
    ];

    comidaElegida = comidasRandom[Math.floor(Math.random() * comidasRandom.length)]

    console.log("La comida es: ", comidaElegida);

    console.log(comidasRandom.length);
}

/////////pelota magica
function miPeloma() {
    let pirulo = ['peso', 'sagaz', 'cachito', 'pelota', 'versito'];
    let piruloindex = Math.floor(Math.random()*4);
    console.log(pirulo[piruloindex]);
    //otra forma
    console.log(pirulo[Math.floor(Math.random() * piruloindex)]);
}
 
//join
function jointo() {
    misNum = [1,2,3];
    console.log(misNum.join(' is bigger than '));
}
 
//scorekeeper
function skeeper() {
    let score = {
        me: 0,
        myFriend: 0
    };
    console.log(score);    
    //meterle los nuevos valores a los scores
    score.me = 1;
    score.myFriend = 2;
    console.log(score);
}


//getting out 123

function excercise2object() {
    let crazyobject = {
        name: "a ridiculous object",
        someArray: [7,9, {purpose:"confusion", number: 123},3.3],
        randomAnimal: "banana shark"
    };

    console.log(crazyobject.someArray[2].number);    
}

