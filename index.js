// Get all elements with the class "drum"
var drumButtons = document.querySelectorAll(".drum");
var num = drumButtons.length;  


//Detecting button presses
for (let i = 0; i < num; i++) {
  drumButtons[i].addEventListener("click", function () {

      this.style.color = "white";

      var buttonInnerHTML = this.innerHTML; //to get innerHTML of each keystroke

      makeSound(buttonInnerHTML);
  });
}

//Detecting keypress
document.addEventListener("keydown", function(event) {
  
    makeSound(event.key);

});

//Makes sounds
function makeSound(key)   {
  switch(key)   {

    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/snare.mp3"); 
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    default:
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
}
}


//This is used to add eventListener that accepts keypress//

// document.addEventListener("keypress", function(e) {
//   if ((e.ctrlKey || e.metaKey) && (e.keyCode == 11 || e.keyCode == 75)) {
//     alert("ctrl+k!");
//   }
// });

// document.getElementById("trigger").addEventListener("click", function(){
//   //trigger a keypress event...
//   var e = document.createEvent('HTMLEvents');
//     e.initEvent("keypress", false, true);
//     e.ctrlKey = true;
//     e.keyCode = 75;
//   document.dispatchEvent(e);
// });



// function playSound(j) {
//     if (j == 0) {
//         var audio = new Audio("./sounds/crash.mp3");
//         audio.play();
//     } else if (j == 1) {
//         var audio = new Audio("./sounds/kick-bass.mp3");
//         audio.play();
//     } else if (j == 2) {
//       var audio = new Audio("./sounds/snare.mp3"); 
//       audio.play();
//     } else if (j == 3) {
//       var audio = new Audio("./sounds/tom-1.mp3");
//       audio.play();
//     } else if (j == 4) {
//       var audio = new Audio("./sounds/tom-2.mp3");
//       audio.play();
//     } else if (j == 5) {
//       var audio = new Audio("./sounds/tom-3.mp3");
//       audio.play();
//     } else {
//         var audio = new Audio("./sounds/tom-4.mp3");
//         audio.play();
//     }
// }
