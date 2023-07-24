var fname = '';
var lname = '';
var email = '';
var phone = '';
var contactString = '';

function addme() {
    fname = document.getElementById("fname");
    lname = document.getElementById("lname");
    email = document.getElementById("email");
    phone = document.getElementById("phone");

    const contact = {
        firstName: fname,
        lastName: lname,
        emailInfo: email,
        phoneInfo: phone
    };

    // contactParsed = JSON.parse(contact);

    contactString = JSON.stringify(contact);

    document.getElementById("json-value").innerHTML = contactString;
}
