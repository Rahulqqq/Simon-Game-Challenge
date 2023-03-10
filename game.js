let buttonColors = ["red", "blue", "green", "yellow" ];

let level = 0;

let gamePattern = [];
let userClickedPattern = [];
let started = false;

$(document).keypress(function () {
    if (!started){
        $("#level-title").text("level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function() {

    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);

});

//GamePattern and userClickedPattern 

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
        setTimeout(function() {
            nextSequence();
        }, 1000);
        
    }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout (function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }

}


function nextSequence(){
    userClickedPattern = [];
    level++;                           //level score increase
    $("#level-title").text("level " + level);  
    
     // Generate a random number
    let randomNumber1 = Math.floor(Math.random() * 4); 

    let randomChosenColor = buttonColors[randomNumber1] ;
    
     //push a color in empty array
    gamePattern.push(randomChosenColor); 

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);  //Animate
    playSound(randomChosenColor)
}

    //Animate add and remove
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    },100);
}

//playSound
function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");   //play audio
    audio.play();

}
 function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
    
 }
