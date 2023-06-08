const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water",
    altTag: "Black dog in bucket"
};

function chooseDog(){
    if (dog == 1){
        loadMe(dog1, 1);
    }else if(dog == 2){
        loadMe(dog2, 2)
    }
}

function loadMe(){
    document.getElementById("heading" + dogNum).innerHTML = dogHeading;
    document.getElementById("img" + dogNum).src = dogImage;
    document.getElementById("img" + dogNum).style.display = "block;"
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.alt)
}