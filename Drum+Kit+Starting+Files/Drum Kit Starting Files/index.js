const drums = document.querySelectorAll(".drum").length;

for(var i = 0; i < drums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

       const buttonValue = this.innerHTML; 
       
       playSound(buttonValue);
       addAnimation(buttonValue);
       
       
    });
};

document.addEventListener("keypress", function(event){
    
    playSound(event.key);
    addAnimation(event.key);
})

function playSound(key){
    
    switch (key) {
        case "w":
            const audio1 = new Audio ("sounds/tom-1.mp3");
            audio1.play();
            break;
        case "a":
            const audio2 = new Audio ("sounds/tom-2.mp3");
            audio2.play();
            break;     
        case "s":
            const audio3 = new Audio ("sounds/tom-3.mp3");
            audio3.play();
            break;
        case "d":
            const audio4 = new Audio ("sounds/tom-4.mp3");
            audio4.play();
            break;
        case "j":
            const audio5 = new Audio ("sounds/snare.mp3");
            audio5.play();
            break;
        case "k":
            const audio6 = new Audio ("sounds/crash.mp3");
            audio6.play();
        case "l":
            const audio7 = new Audio ("sounds/kick-bass.mp3");
            audio7.play();         
        default:
            break;
    }

}

function addAnimation(currentKey){
   
    const activeButton = document.querySelector("." + currentKey); 
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed"), 100
    })
}
