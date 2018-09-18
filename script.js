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

    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(0, 210, 10, 100);

    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(ballx, 100, 10, 10);
};