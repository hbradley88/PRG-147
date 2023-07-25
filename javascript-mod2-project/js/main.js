var myBella = document.getElementById("bella");
var myBaxter = document.getElementById("baxter");
var myBaylee = document.getElementById("baylee");
var myBtn1 = document.getElementById("btn1");
var myBtn2 = document.getElementById("btn2");
var myBtn3 = document.getElementById("btn3");

function myFunction1(){
    myBella.innerHTML = "QUEEN";
    myBtn1.classList.toggle("purple");
}

function myFunction2(){
    myBaxter.innerHTML = "JESTER";
    myBtn2.classList.toggle("green");
}

function myFunction3(){
    myBaylee.innerHTML = "ENFORCER";
    myBtn3.classList.toggle("navy");
}

function change1(){
    var largePic = document.getElementById('large');
    largePic.src = "images/Bella.png";
    largePic.atl = "The Queen"
    var myHeadline = document.getElementById('headline');
}

function change2(){
    var largePic = document.getElementById('large');
    largePic.src = "images/Baxter.png";
    largePic.atl = "The Jester"
}

function change3(){
    var largePic = document.getElementById('large');
    largePic.src = "images/Baylee.png";
    largePic.atl = "The Guard"
}

function changeTitle(){
    var myTitle = document.getElementById("title")
    myTitle.innerHTML = ".alt"
}

var goodBtn = document.getElementById("goodBtn");
goodBtn.addEventListener("click", notifyMe);

function notifyMe(){
    Notification.requestPermission().then(doIhavePermission =>{
        if(doIhavePermission === "granted"){
           alert("Of course, Bella is The Good Dog")
        }
    })
}

