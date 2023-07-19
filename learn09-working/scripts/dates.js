/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
basic = new Date();
document.getElementById("basic").innerHTML = ("Basic: " + basic);


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
today = new Date('2023, 7, 18');
document.getElementById("today").innerHTML = ("Today: " + today);

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
birthday = new Date('1969, 7, 8');
document.getElementById("birthday").innerHTML = ("Birthday: " + birthday);

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
basic = new Date('2023, 7, 18');
newBasic = basic.toISOString();
document.getElementById("iso").innerHTML = ("New Basic: " + newBasic);

//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
birthday = new Date("8 July 2023");
document.getElementById("date1").innerHTML = ("Birthday1: " + birthday);
birthday = new Date("2023-7-8");
document.getElementById("date2").innerHTML = ("Birthday2: " + birthday);
birthday = new Date("07/08/2023");
document.getElementById("date3").innerHTML = ("Birthday3: " + birthday);

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
get1 = new Date('2023, 7, 18');
gYear = get1.getYear();
document.getElementById("get1").innerHTML = ("Year: " + gYear);
get2 = new Date('2023, 7, 18');
gMonth = get2.getMonth();
document.getElementById("get2").innerHTML = ("Month: " + gMonth);
get3 = new Date('2023, 7, 18');
gDay = get3.getDate();
document.getElementById("get3").innerHTML = ("Day: " + gDay);
get4 = new Date('2023, 7, 18');
gHours = get4.getHours();
document.getElementById("get4").innerHTML = ("Hour: " + gHours);


// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
set1 = new Date();
sYear = set1.setFullYear(2027);
document.getElementById("set1").innerHTML = ("Year: " + sYear);
set2 = new Date();
sMonth = set2.setMonth(3);
document.getElementById("set2").innerHTML = ("Month: " + sMonth);
set3 = new Date();
sDay = set3.setDate(13);
document.getElementById("set3").innerHTML = ("Day: " + sDay);
set4 = new Date();
sHours = set4.setHours(6);
document.getElementById("set4").innerHTML = ("Hour: " + sHours);