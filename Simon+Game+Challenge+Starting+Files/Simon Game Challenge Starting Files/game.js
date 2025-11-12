
let bottonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickPattern = [];
let count = 0;
let level = 0;
let started = false

$(document).on("keypress", function(){
    if (!started){
        // console.log("started")
        nextSequence();
        started = true;
       $("#level-title").text("Level " + level);
    };
})

$(".btn").click( function(){
    const userChosenColor = $(this).attr("id");
    userClickPattern.push(userChosenColor)
    
    // console.log(lastClicked);
    
    playSound(userChosenColor);
    animatePress(userChosenColor)
    checkAnswer(userClickPattern.length - 1);
})

function startOver(){
    gamePattern = [];
    level = 0;
    started = false;
}

function checkAnswer(currentLevel){
    if(userClickPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success")
        console.log(userClickPattern);
        console.log(gamePattern);
        if(userClickPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence()
                console.log("working")
            }, 1000)
        }
    } 
    else{
        console.log("failed");
        
        const failed = new Audio ('sounds/wrong.mp3')
        failed.play()
        $('h1').text('Game Over, Press Any Key to Restart')
        $('body').addClass('game-over')
        setTimeout( function(){
            $('body').removeClass('game-over')
        }, 100)
        
        startOver();
    }
};
function nextSequence(){
    userClickPattern = [];
    level++
    $("#level-title").text("Level " + level);
    const randomNumber = Math.floor(Math.random() * 4)
    const randomChosenColour = bottonColors[randomNumber]
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
};

function playSound(name){
    const sound = new Audio ("sounds/" + name + ".mp3");
    sound.play();
    
}

function animatePress(currentColor){
    $('#' + currentColor).addClass("pressed");
    setTimeout (function(){
        $('#' + currentColor).removeClass("pressed")

    }, 100)

}

