var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var p1Dis = document.querySelector("#p1");
var p2Dis = document.querySelector("#p2");
var numInput = document.querySelector("input[type=number]");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

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
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});