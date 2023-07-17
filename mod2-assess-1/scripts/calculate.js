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

let sandSub = 0
let drinkSub = 0
let dessertSub = 0
let grandTotal = 0

function sanSubTotal(){
    sandSub = 0
    let checkboxes = document.getElementsByName("sandwich");
    for (let i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            sandSub += 1
        }
    }
    sandSub *= 10
    return sandSub     
}

function drinkSubTotal(){
    drinkSub = 0
    let checkboxes = document.getElementsByName("drink");
    for (let i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            drinkSub += 1
        }
    }
    drinkSub *= 2
    return drinkSub     
}

function dessertSubTotal(){
    dessertSub = 0
    let checkboxes = document.getElementsByName("dessert");
    for (let i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            dessertSub += 1
        }
    }
    dessertSub *= 4
    return dessertSub     
}

function total(){
    let name = document.getElementById("name").value;
    
    let sanSub = sanSubTotal()
    let drinkSub = drinkSubTotal()
    let dessertSub = dessertSubTotal()
    let grandTotal = sanSub + drinkSub + dessertSub
    
    document.getElementById("total").innerHTML= (name + ", your total is: " + grandTotal);
}
