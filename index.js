var keyslength = document.querySelectorAll(".drum").length;
for(var i=0;i<keyslength;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",clickkey);
}

document.addEventListener("keydown",function(event){
    var presskey = event.key;
    keysound(presskey);
    keyAnimation(presskey);
})

function clickkey(){
    var keey = this.innerText;
    keysound(keey);
    keyAnimation(keey);
}

function keyAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function (){
        document.querySelector("."+key).classList.remove("pressed");
    } ,150);
}

function keysound(key){
    switch(key){
        case "w":
            var audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio("Sounds/tom-4.mp3");
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio("sounds/snare.mp3");
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio("sounds/crash.mp3");
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio("sounds/kick-bass.mp3");
            audio7.play();
            break;
    }
}