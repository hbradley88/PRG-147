// declare and initialize array
let game = ["SCONE", "COOKIE", "BROWNIE", "CAKE", "FROSTING", "PIE", "LEMONBAR", "TRUFFLE", "CAKEPOP", "BISCUIT"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let found = false;


function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}


document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; 

    for (let c = 0; c < answer.length; c++) {
        //alert(letters[c]);
        found = false;
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true;          
        }

        output = output + display[c] + ' ';
        
        var lettersGuessed = []
        var all = 0;
        for(i=0;i<lettersGuessed.length;i++){
        all += lettersGuessed[i];
        alert(lettersGuessed[i])
        }
        document.getElementById("allLetters").innerHTML = lettersGuessed;
        //array to hold letters guessed

    }
    if (found == false){
        attemptsLeft --;
        function cycle() {
            imageArray = ["images/02.png", "images/03.png","images/04.png", "images/05.png", "images/06.png", "images/07.png", "images/08.png", "images/09.png"];
            i = 0;
            image = document.getElementById("hangman");            
            document.getElementById("hangman").src=imageArray[i]
            if (i>2){
                [i+=1];
            } 
        }
        changeImages = cycle();
        changeImages --;
        //only changing once
    }
    
    // document.getElementById("game").innerHTML = output;
    // output = '';
    // attemptsLeft--;

    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }

});
