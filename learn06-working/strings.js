function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Heidi Bradley";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home.";
    let length = myString.length;
    document.getElementById("length").innerHTML = length;


    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let escape1 = "Here is how to place \'single quotes\' in a string.";
    document.getElementById("escape1").innerHTML = escape1;
    let escape2 = "Here is how to place \"double quotes\" in a string.";
    document.getElementById("escape2").innerHTML = escape2;
    let escape3 = "Here is how to place a backslash symbol \\ in a string.";
    document.getElementById("escape3").innerHTML = escape3;


    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    // Use the JavaScript slice function to display your first name to first paragraph
    let name = "Heidi Ann Bradley"
    let first = name.slice(0,5);
    document.getElementById("first").innerHTML = first;


    // Use the Javascript substring Method to display your middle name to the middle paragraph
    let middle = name.slice(6,9);
    document.getElementById("middle").innerHTML = middle;

    // Use the JavaScript subst Method to display your last name to the last paragraph
    let last = name.slice(10);
    document.getElementById("last").innerHTML = last;


    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College";
    
    document.getElementById("major").innerHTML = major.replace("Physical Therapy", "Digital Media");


    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!"
    let upperText = myText.toUpperCase();
    document.getElementById("upper").innerHTML = upperText;

    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                "
    let trimmedText = trimText.trim();
    document.getElementById("trim").innerHTML = trimmedText;

    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"
    let index = months.indexOf("May");
    document.getElementById("index").innerHTML = index;


    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    let firstName = "Heidi";
    let lastName = "Bradley";
    let wholeName = `Welcome, ${firstName} ${lastName}!`;


    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph
    document.getElementById("greeting").innerHTML = wholeName
}