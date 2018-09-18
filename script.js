var canvas, canvasContext, ballx, ballSpeedx;
ballx = 50;
ballSpeedx = 5;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    this.setInterval(function() {
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond);
};

function moveEverything() {
    ballx = ballx + ballSpeedx;
    if (ballx > canvas.width - 10) {
        ballSpeedx = -ballSpeedx;
    } 
    if (ballx < 0) {
        ballSpeedx = -ballSpeedx;
    }
    console.log(ballx);
}

function drawEverything() {

    colorRect(0, 0, canvas.width, canvas.height, 'black');
    colorRect(20, 200, 10, 100, 'white');
    colorRect(ballx, 100, 10, 10, 'red');
};

function colorRect(leftx, topy, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftx, topy, width, height);
}