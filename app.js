var btn = document.querySelector("#btn");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var p1Dis = document.querySelector("#p1");
var p2Dis = document.querySelector("#p2");
var numInput = document.querySelector("input[type=number]");
var showGame = document.querySelector("#game");
var namePlsinput = document.querySelectorAll("input[type=text]");
var namePls = document.querySelectorAll("h2 span");
var msg = document.querySelector("#msg");
var bGame = document.querySelector("#bGame");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

numInput.value = winningScore;
showGame.style.display = "none";

btn.addEventListener("click", function() {
    if (namePlsinput[0].value.length == 0 ||
        namePlsinput[1].value.length == 0) {
        msg.textContent = "Please add the names of the players";
        console.log("empty" + namePlsinput[0].value + " " +
            namePlsinput[1].value);
    } else {
        console.log("go");
        showGame.style.display = "block";
        for (var i = 0; i < namePls.length; i++) {
            namePls[i].textContent = namePlsinput[i].value;
        }
        bGame.style.display = "none";
    }

});

btn1.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Dis.classList.add("winner");
            gameOver = true;
        }
        p1Dis.textContent = p1Score;
    }

});

btn2.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Dis.classList.add("winner");
            gameOver = true;
        }
        p2Dis.textContent = p2Score;
    }
});

btn3.addEventListener("click", function() {
    reset();
});

function reset() {
    p2Score = 0;
    p1Score = 0;
    p1Dis.textContent = p1Score;
    p2Dis.textContent = p2Score;
    gameOver = false;
    p1Dis.classList.remove("winner");
    p2Dis.classList.remove("winner");
};

numInput.addEventListener("change", function() {
    winningScore = Number(this.value);
    reset();
});