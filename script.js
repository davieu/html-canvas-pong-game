var canvas, canvasContext, ballX, ballSpeedX, ballY, ballSpeedY, player1Score, player2Score;
ballX = 50;
ballY = 50;
ballSpeedX = 8;
ballSpeedY = 4;
player1Score = 0;
player2Score = 0;

var paddle1Y = 250;
var paddle2Y = 250;
const PADDLE_THICKNESS = 10;
const PADDLE_HEIGHT = 100;

function calculateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;

    return {
        x: mouseX,
        y: mouseY
    };
};

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    this.setInterval(function() {
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond);

    canvas.addEventListener('mousemove', function(evt) {
        var mousePos = calculateMousePos(evt);
        paddle1Y = mousePos.y - (PADDLE_HEIGHT/2);
    });
};

function ballReset() {
    ballSpeedX = -ballSpeedX;
    ballX = canvas.width/2;
    ballY = canvas.height/2;
};

function computerMovement() {
    var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT/2);

    if (paddle2YCenter < ballY - 35) {
        paddle2Y += 16;
    } else if (paddle2YCenter > ballY + 35) {
        paddle2Y -= 16;
    }
}

function moveEverything() {
    computerMovement();

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballX < 0) {
        if (ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
            ballSpeedX = - ballSpeedX;
        } else {
            ballReset();
            player2Score++;
        }
    };

    if (ballX > canvas.width) {
        if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) {
            ballSpeedX = - ballSpeedX;
        } else {
            ballReset();
            player1Score++;
        }
    }

    if (ballY > canvas.height) {
        ballSpeedY = - ballSpeedY;
    } 
    
    if (ballY < 0) {
        ballSpeedY = - ballSpeedY;
    }
}

function drawEverything() {
    //blanks out the screen with black
    colorRect(0, 0, canvas.width, canvas.height, 'black');

    //this is the left player paddle
    colorRect(20, paddle1Y, 10, PADDLE_HEIGHT, 'white');

    //this is the left player paddle
    colorRect(canvas.width - 30, paddle2Y, 10, PADDLE_HEIGHT, 'white');

    //draws the ball
    colorCircle(ballX, ballY, 10, 'white');

    canvasContext.fillText(player1Score, 100, 100);
    canvasContext.fillText(player2Score, canvas.width-100, canvas.height-500);
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