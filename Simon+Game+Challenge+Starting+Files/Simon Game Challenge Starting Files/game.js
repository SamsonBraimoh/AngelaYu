
const bottonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickPattern = [];

$(".btn").click( function(){
    const userChosenColor = $(this).attr("id");
    userClickPattern.push(userChosenColor)

    playSound(userChosenColor);
    animatePress(userChosenColor)
    nextSequence();
})

function nextSequence(){
    const randomNumber = Math.floor(Math.random() * 4)
    const randomChosenColour = bottonColors[randomNumber]
    gamePattern.push(randomChosenColour)
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

$(document).on("keypress", function(){
    nextSequence();
})


