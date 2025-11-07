const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");

const scores = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"];

const index1 = Math.floor(Math.random() * 6);
const index2 = Math.floor(Math.random() * 6);

window.onload = function() {
    
    dice1.setAttribute("src", "images/" + scores[index1] + ".png"  );
    dice2.setAttribute("src", "images/" + scores[index2] + ".png"  );
    
}
// console.log(index)
// images/dice1.png