/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
let books = ["Lord of the Rings", "The Two Towers", "Return of the King", "The Hobbit", "The Silmarillion"];

let txt1 = "";
for (const x of books){
    txt1 += x + "<br>";
}

document.getElementById("list").innerHTML = txt1;

/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/

let songs = new Set(["It's a Wonderful World", "Mr. Blue Sky", "Low Rider", "Fox on the Run", "The Chain"]);

let txt2 = "";
for (const x of songs){
    txt2 += x + "<br>";
}

document.getElementById("set1").innerHTML = txt2;

// add two more songs to the set then display in the set2 paragraph
let a = "Unchained Melody";
let b = "Surrender";

songs.add(a);
songs.add(b);

let txt3 = "";
for (const x of songs){
    txt3 += x + "<br>";
}

document.getElementById("set2").innerHTML = txt3;

/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
let contacts = new Map([
    ["Heidi", "heidi@hcbbhome.com"], 
    ["Cici", "cici@hcbbhome.com"], 
    ["Baylee", "dogs@hcbbhome.com"], 
    ["Sweet Hibiscuits", "heidi@sweethibiscuits.com"], 
    ["H Bradley Designs", "heidi@hbradleydesigns.com"]
])

let txt4 = "";
contacts.forEach (function(value, key) {
  txt4 += '<br>' + value;
})

document.getElementById("map1").innerHTML = txt4;

// add two new names and emails and display in map2 use the forEach() method

contacts.set("Benchmark Realty", "heidi@benchmarkhome.com");
contacts.set("Busy Brains Children's Museum", "heidibradley@busybrains.org");

let txt5 = "";
contacts.forEach (function(value, key) {
  txt5 += '<br>' + value;
})

document.getElementById("map2").innerHTML = txt5;


// get and display the email of one person, display in map3

document.getElementById("map3").innerHTML = contacts.get("Heidi");

