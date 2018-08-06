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

