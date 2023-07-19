let y = 0
let guess = 1
let x = 0


function genRand(){

    y = Math.floor((Math.random() * 1000) +1);
    // x = document.getElementById("guessField").value;

    alert(y);
    
    guess = 1;
}


function submitGuess(){
    
    x = document.getElementById("guessField").value;
    if (x == y) {
        alert("Great! You guess it correctly in "
            + guess + " tries.");
    }

    else if (x > y) {
        guess++;
        alert("Try a smaller number");
    }
    else if (x < y){
        guess++;
        alert("try a larger number")
    }
}
