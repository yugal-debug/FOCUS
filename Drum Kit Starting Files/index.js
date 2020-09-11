var n = document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
 document.querySelectorAll(".drum")[i].addEventListener("click",
 function (){
    var music = new Audio('sounds/crash.mp3');
    if(this.innerText=='a'){
      music = new Audio('sounds/kick-bass.mp3');
    }else if(this.innerText=='s'){
      music = new Audio('sounds/snare.mp3');
    }else if(this.innerText=='d'){
      music = new Audio('sounds/tom-1.mp3');
    }else if(this.innerText=='j'){
      music = new Audio('sounds/tom-2.mp3');
    }else if(this.innerText=='k'){
      music = new Audio('sounds/tom-3.mp3');
    }else if(this.innerText=='l'){
      music = new Audio('sounds/tom-4.mp3');
    }
    music.play();
 }

);
}
