function loopExample(){
// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 
function beerSong(){
    var word = "bottles";
    var count = 0;
    for (count = 99; count <100; count--){
        if (count == 1){
            var word = "bottle";
            document.getElementById("beer").innerHTML = (count + " " + word + " of beer on the wall.");
            count -= 1;
            }
        else if (count == 0){
            document.getElementById("beer").innerHTML = ("No more " + word + " of beer on the wall.");
        }
        else{
            word = "bottles"
            document.getElementById("beer").innerHTML = (count + " " + word + " of beer on the wall" <br> + count + " " + word + " of beer," <br> "Take one down, pass it around," <br> (count-1) + " " + word + " of beer on the wall.");
            count -= 1;
        }
    }
}

beerSong();

//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let txt1 = "";
for (let x in months) {
    txt1 += months[x] + "<br>";
}
document.getElementById("for-in").innerHTML = txt1;



// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

let example = "ChocolateCake";

let txt2 = "";
for (let x of example) {
  txt2 += x + "<br>";
}

document.getElementById("for-of").innerHTML = txt2;


// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph

let txt3 = "";
let i = 0;
while (i < 50) {
  txt3 += "<br>The number is " + i;
  i++;
}
document.getElementById("while").innerHTML = txt3;

}