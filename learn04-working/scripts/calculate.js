function addDate(){
    let today = new Date();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("rm1ength").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
    document.getElementById("rooms").value = "1";
}

function estimate(){
    let name = document.getElementById("name").value;
    let length = parseFloat(document.getElementById("rm1length").value);
    let width = parseFloat(document.getElementById("rm1width").value);
    let height = parseFloat(document.getElementById("rm1height").value);
    let totalSqFt = ((length * height * 2) + (length * width * 2));
    let cost = (totalSqFt * .65);
    document.getElementById("rm1cost").value = cost;

    var totalCost = cost;
    document.getElementById("estimate").innerHTML= (name + ", your estimate is: " + cost);
}

function showScreen(){
    let numRooms = document.getElementById("rooms").value;
    if value = 1;
    document.getElementById("room1").style.display = "block"
    document.getElementById("room2").style.display = "none"
    document.getElementById("room3").style.display = "none"
    if value = 2;
    document.getElementById("room1").style.display = "block"
    document.getElementById("room2").style.display = "block"
    document.getElementById("room3").style.display = "none"
    if value = 3;
    document.getElementById("room1").style.display = "block"
    document.getElementById("room2").style.display = "block"
    document.getElementById("room3").style.display = "block"
        

}