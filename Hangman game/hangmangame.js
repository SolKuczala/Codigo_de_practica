// //hangaman game
//Create an array of words
    let words =[
    'javascript',
    'monkey',
    'pancake',
    'saludo'
];
//pick a random word
let word = words[Math.floor(Math.random()*words.length)]
//set up the answer array
let answerArray = []

for (let index = 0; index < word.length; index++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;
//the game loop
let remainingLetters = word.length;
while (remainingLetters > 0) {
    //showing the player progress
    alert(answerArray.join(''));
    //get a guess from the player
    let guess = prompt('guess a letter,or click Cancel to stop playing.')
    if (guess === null){
        //exit the game loop
        break;
    }else if (guess.length !== 1){
        alert('please enter a single letter.');
    }else{
        //update
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
    //end of the game loop  
}    
//show the answer and congratulates
alert(answerArray.join(""));
alert("Good job!the answer was " + word);
