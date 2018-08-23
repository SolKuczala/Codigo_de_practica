//chapter 6

//if else condition
function ifElse(params) {
 
    let name = 'sol';

    if (name === 'sol') {
        console.log('hello me');
    } else if (name === Alan){
        console.log('hi mimi');
    } else {
        console.log('hi stranger');
    }

}

//while loops

function sheepCounter(params) {
    let sheepCounted = 0;
    while (sheepCounted < 10) {
        console.log('i have counted '+ sheepCounted + 'sheep');
        sheepCounted++;
    }  
        console.log("zzzzzzzzzz");   
    }


//printing powers

function forPower(params) {
    for (let x = 3; x < 10000; x = x * 3) {
        console.log(x);
        
    }
}

//probar
function whilePower(params) {
    let numeroBase = 3;
    while (numeroBase < 10000) {
        numeroBase * 3;
    }
}

//final excercise chap 6

//awesome animals
function Aanimals(params) {
    
    let animals = ['cat', 'fish', 'lemur', 'komodo dragon'];

    for (let index = 0; index < animals.length; index++) {
        animals[index]= 'awesome ' + animals[index];
    }
    console.log(animals);
}

//random string generator
function randomSG(){
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomString = '';
while (randomString.length < 6) {
    let randomIndex = Math.floor(Math.random() * alphabet.length)
    randomString += alphabet[randomIndex];   
}
console.log (randomString);
}
//hacker speak, hacer

let input = "javascript is awesome";
let output = "";
for (let index = 0; index < input.length; index++) {
        if (input[index] === 'a') {
            output += '4';      
        }else if (input[index] === 'i' ) {
            output += '1';
        }else if (input[index] === 'e') {
            output += '3';
        }else if (input[index] === 'o') {
            output += '0';
        }else{
            output += input[index];
        }
}

console.log(output);
