// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  


function names() {
    var name1 = "Dee";
    var firstName = "Heidi",
        lastName = "Bradley";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Alexander";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    var name1 = "Dee";
    let firstName = "Heidi",
        lastName = "Bradley";
    const taxRate = .07;
    document.getElementById("global").innerHTML = name1;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    // taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    let dog1 = "Bella";
    dog2 = "Baxter";
    var dog3 = "Baylee";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Brewster"
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    document.getElementById("pi").innerHTML = PI;
    const dogs = ["Bella", "Baxter", "Baylee"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Miss Bella";
    document.getElementById("new-doggos").innerHTML = dogs;
    breeds = ["Shepherd?", "Probably Shepherd", "Definitely GSD"];
    document.getElementById("breeds").innerHTML = breeds;

}

function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 8 + 40
    document.getElementById("addition").innerHTML = "8 + 40 = " + addition;
    let subtraction = 88 - 53
    document.getElementById("subtraction").innerHTML = "88 - 53 = " + subtraction;
    let multiplication = 9 * 9
    document.getElementById("multiplication").innerHTML = "9 * 9 = " + multiplication;
    let exponent = 4 ** 6
    document.getElementById("exponent").innerHTML = "4 ** 6 = " + exponent;
    let division = 144 / 8
    document.getElementById("division").innerHTML = "144 / 8 = " + division;
    let modulus = 15 % 6
    document.getElementById("modulus").innerHTML = "15 % 6 = " + modulus;
    let increment = 5 
    increment++ 
    document.getElementById("increment").innerHTML = "5 ++ = " + increment;
    let decrement = 9 
    decrement --
    document.getElementById("decrement").innerHTML = "9-- = " + decrement;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    var x = 10
    document.getElementById("equals").innerHTML = "x = 10   " + "x = " + x;
    var x = 10
    x += 2
    document.getElementById("plus-equals").innerHTML = "x += 2   " + "x = " + x;
    var x = 10
    x -= 2
    document.getElementById("minus-equals").innerHTML = "x -= 2   " + "x = " + x;
    var x = 10
    x *= 2
    document.getElementById("times-equals").innerHTML = "x *= 2   " + "x = " + x;
    var x = 10
    x /= 2
    document.getElementById("divide-equals").innerHTML = "x /= 2   " + "x = " + x;
    x %= 2
    document.getElementById("modulus-equals").innerHTML = "x %= 2   " + "x = " + x;
    var x = 10
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const dogs = ["Shepherd?", "Probably Shepherd", "Definitely GSD"];
    document.getElementById("array").innerHTML = dogs;
    const pups = {color: "Black", size: "Large", type: "Good"};
    document.getElementById("object").innerHTML = pups.color + ", " + pups.size + ", " + pups.type;

}
