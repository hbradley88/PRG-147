function start() {

    // print your name to the name heading
    let name = "Heidi Bradley"
    document.getElementById("name").innerHTML = name
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    let a = 8;
    let b = "dog";
    document.getElementById("add").innerHTML = a + b;

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let c = 808;
    document.getElementById("to-string").innerHTML = c.toString() + " is now a string"

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let d = 8.5724;
    document.getElementById("exponent").innerHTML = d.toExponential(4);

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    let e = 8.2398;
    document.getElementById("fixed").innerHTML = e.toFixed(2);

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    let f = 8.9834;
    document.getElementById("precision").innerHTML = f.toPrecision(4);

    // Demonstrate the use of parseFloat() and print to the float paragraph
    document.getElementById("float").innerHTML = parseFloat("8.3 years");

    // Demonstrate the use of parseInt() and print to the int paragraph
    document.getElementById("int").innerHTML = parseInt("8.3 years");


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
   document.getElementById("equals").innerHTML = "The strict equality operator === determines if the two choices are exactly equal, perfectly identical, no room fro interpretation. The equality operator == checks to see if they are equal but allows fro some interpretation such as the word one being equal to the number 1."

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    document.getElementById("logic").innerHTML = "The AND operator && always takes precedence over the OR operator ||."


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah

    function switchButton() {
        var answer = window.prompt("Type YES, NO, or MAYBE. Then click OK.");
        switch (answer) {
            case "YES":
            document.getElementById("switch").innerHTML = "You said YES!";
            break;
            case "MAYBE":
            document.getElementById("switch").innerHTML = "Maybe? Really?";
            break;
            case "NO":
            document.getElementById("switch").innerHTML = "How could you say no?";
            break;
            default:
            document.getElementById("switch").innerHTML = "You rebel you!";
            break;
        }
    }

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    var animal = "cat";
    //animal = 'dog';

    animal ==="cat"
        ?document.getElementById("add").innerHTML = "You will be a cat herder."
        :document.getElementById("add").innerHTML = "You will be a dog catcher."
}