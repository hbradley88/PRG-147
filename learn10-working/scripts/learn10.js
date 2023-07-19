function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    round = Math.round(8.8973);
    document.getElementById("round").innerHTML = ("Round: " + round);
    ceil = Math.ceil(16.982094);
    document.getElementById("ceil").innerHTML = ("Ceil: " + ceil);
    floor = Math.floor(45.9879837);
    document.getElementById("floor").innerHTML = ("Floor: " + floor);
    trunc = Math.trunc(987.987389);
    document.getElementById("trunc").innerHTML = ("Trunc: " + trunc);
    sign = Math.sign(-898);
    document.getElementById("sign").innerHTML = ("Sign: " + sign);
    pow = Math.pow(7,9);
    document.getElementById("pow").innerHTML = ("Pow: " + pow);
    min = Math.min(8, 67, 23, 765);
    document.getElementById("min").innerHTML = ("Min: " + min);
    random = Math.random();
    document.getElementById("random").innerHTML = ("Random: " + random);

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    random = Math.floor(Math.random() * 100);
    document.getElementById("random2").innerHTML = ("Random: " + random);

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    let x = 8;
    document.getElementById("comparisons").innerHTML = ("The value of x == '8' and the value of x === '8' will be different. The double == allows for interpretation so different types of data can be equal. The === must be exactly equal in all ways. Here are examples: x == 8: " + (x == 8) + " x === 8: " + (x === '8'));



    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}