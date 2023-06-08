function setValues(){
    let today = new Date();
    document.getElementById("name").value = "";
    document.getElementById("sand1").value = "";
    document.getElementById("sand2").value = "";
    document.getElementById("sand3").value = "";
    document.getElementById("sand4").value = "";
    document.getElementById("sand5").value = "";
    document.getElementById("drink1").value = "";
    document.getElementById("drink2").value = "";
    document.getElementById("drink3").value = "";
    document.getElementById("drink4").value = "";
    document.getElementById("drink5").value = "";
    document.getElementById("dessert1").value = "";
    document.getElementById("dessert2").value = "";
    document.getElementById("dessert3").value = "";
    document.getElementById("dessert4").value = "";
    document.getElementById("dessert5").value = "";
}

function total(){
    let name = document.getElementById("name").value;
    let sandTotal = parseFloat(document.getElementById("sandwich").value);
    
    let sandCost = (sand1 + sand2 + sand3 + sand4 + sand5)
    document.getElementById("meal").value = cost;

    var totalCost = cost;
    document.getElementById("estimate").innerHTML= (name + ", your estimate is: " + cost);
}

