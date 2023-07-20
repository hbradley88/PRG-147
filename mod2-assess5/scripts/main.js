function calculate() {
    var holiday1 = '';
    var holiday2 = '';   
    // const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let  monthName = document.getElementById("mname").value;

// let  monthName = "";
// for (let x in months) {
//     monthName += months[x];
// }

    switch (monthName) {
        case "January":
            holiday1 = "New Year's Day (1)"
            holiday2 = "National Cream Puff Day (2)"
            break;
        case "February":
            holiday1 = "Valentine's Day (14)"
            holiday2 = "National Peppermint Patty Day (11)"
            break;
        case "March":
            holiday1 = "Read Across America Day (1)"
            holiday2 = "National Grammar Day (4)"
            break;
        case "April":
            holiday1 = "April Fool's Day (1)"
            holiday2 = "National Scrabble Day (13)"
            break;
        case "May":
            holiday1 = "Mother's Day (varies)"
            holiday2 = "National Cheese Souffle Day (18)"
            break;
        case "June":
            holiday1 = "Father's Day (varies)"
            holiday2 = "Flag Day (14)"
            break;
        case "July":
            holiday1 = "Independence Day (4)"
            holiday2 = "National Sugar Cookie Day (9)"
            break;
        case "August":
            holiday1 = "World Wide Web Day (1)"
            holiday2 = "National Cherry Popsicle Day (26)"
            break;
        case "September":
            holiday1 = "Labor Day (varies)"
            holiday2 = "World Gratitude Day (21)"
            break;
        case "October":
            holiday1 = "Halloween (31)"
            holiday2 = "World Octopus Day (8)"
            break;
        case "November":
            holiday1 = "Thanksgiving (varies)"
            holiday2 = "National Drummer Day (15)"
            break;
        case "December":
            holiday1 = "Christmas (25)"
            holiday2 = "National Cocoa Day (13)"
            break;
        default:
            holiday = "That month is not in the list"

    }

    document.getElementById("holResult").innerHTML = "The holidays this month are: <br>" + holiday1 + "<br>" + holiday2;
    

}