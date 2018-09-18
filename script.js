var canvas, canvasContext, ballX, ballSpeedX;
ballX = 50;
ballSpeedX = 15;

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
    ballX = ballX + ballSpeedX;
    if (ballX > canvas.width) {
        ballSpeedX = -ballSpeedX;
    } 
    if (ballX < 0) {
        ballSpeedX = -ballSpeedX;
    }
    console.log(ballX);
}

function drawEverything() {
    //blanks out the screen with black
    colorRect(0, 0, canvas.width, canvas.height, 'black');

    //this is the left player paddle
    colorRect(20, 200, 10, 100, 'white');

    //draws the ball
    colorCircle(ballX, 150, 10, 'white');
};

function colorCircle(centerX, centerY, radius, drawColor ) {
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true)
    canvasContext.fill();
};

function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}