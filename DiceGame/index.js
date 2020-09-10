var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = randomNumber1+1;
randomNumber1 = Math.floor(randomNumber1);
var str = "images/dice"+randomNumber1+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",str);
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = randomNumber2+1;
randomNumber2 = Math.floor(randomNumber2);
var str2 = "images/dice"+randomNumber2+".png";
document.getElementsByClassName("img2")[0].setAttribute("src",str2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🏆YUGAL WINS !🏆"
}
else if (randomNumber1==randomNumber2) {
  document.querySelector("h1").innerHTML = "💥💜🧡DRAW💛💚💥"
}
else{
  document.querySelector("h1").innerHTML = "🤴YASHU RAJA WINS !🤴"
}
