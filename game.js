let gamePattern = [];

let buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
    let randomNumber1 = Math.floor(Math.random() * 4);  // Generate a random number

    let randomChosenColor = buttonColors[randomNumber1] ;

    gamePattern.push(randomChosenColor);  //push a color in empty array

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);  //Animate

    let audio = new Audio("sounds/" + randomChosenColor + ".mp3");   //play audio
    audio.play();

}




