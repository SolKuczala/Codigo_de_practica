// //hangaman game
//mostrar bienvenida
alert('Welcome to Hangman!')    
//Create an array of words
    let words =[
    'javascript',
    'monkey',
    'pancake',
    'saludo',
    'escarlata',
    'embargable'
];
//pick a random word
let word = words[Math.floor(Math.random()*words.length)]
//set up the answer array que va a ser el largo de la palabra que se dio
let answerArray = []
for (let index = 0; index < word.length; index++) {
    answerArray[index] = "_";
}
//the game loop

let remainingLetters = word.length;
//let numberOfGuesses = 15;
while (remainingLetters > 0 && numberOfGuesses > 0) {
    alert('This is your word to guess: ' + answerArray.join(''));
    let guess = prompt('Enter a single letter, or click Cancel to stop playing.')
    if (guess === null){
        break;
    }else if (guess.length !== 1){
        alert('please enter a single letter.');
    }else{
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }//else //si es distinto (la palabra entera) bajame 1 oportunidad de guess
        
        }
    }//end of the game loop  
}    
//show the answer and congratulates or show you lose
if (remainingLetters === 0){
    alert(answerArray.join(""));
alert("Good job!the answer was " + word);
}else if(numberOfGuesses === 0){
    alert('Sorry, you running out of guesses :(' + ' Try Again :)');
}

