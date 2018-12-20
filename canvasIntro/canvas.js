const canvas = document.getElementById('canvas');
//Canvas by itself is just a  'something' to draw on.
//in JS we need a "context" which is like our brush!
let context = canvas.getContext('2d');

// rectangle:
// .rect() takes 4 arguments: the upper XMLDocument, the upper yield, the lower X and the lower Y.
// context.rect(100, 100, 300, 300)
// context.stroke();

// context.moveTo(100,100);
// context.lineTo(400,400);
// context.lineto(400,100);
// context.lineTo(100,400);
// context.lineTo(100,100);
// context.stroke();

// circle: 
// 1 x for clearInterval, 
// 2 y for ClientRect, 
// 3 is radius in pixls, 
// 4 is place to start (0 = 3 o-clock), 
// 5 place to end (every 90 deg is half pi)
// 6 optional true or false for clounter clockwise
// context.arc(100, 75, 50, 0, 2 * Math.PI);
// // context.stroke()
// context.fillStyle = '#0044ff';
// context.fill();
// context.strokeStyle = '#ff0'
// context.lineWidth = 10;
// context.stroke()

// A CONSTRUCTOR (is code in JS for a class)
function Ball(x, y, r){
    //inside of a contructor, we get the keyword "this" (self in python)
    this.x = x;
    this.y = y;
    //sr = starting radians
    this.sr = 0;
    //er = ending radians
    this.er = Math.PI * 2;
    //r = radius
    this.r = r;
    this.xDirection = 1;
    this.yDirection = 1;
    this.randX = Math.random() * 25;
    this.randY = Math.random() * 25;
}

// Ball.prototype.drawBall = function() {
//     context.beginPath();
//     context.arc(this.x, this.y, this.r, this.sr, this.er);
//     context.fill();
// }

Ball.prototype.updateBallPosition = function() {
    // clearRect takes 4 args take 4 args, topx, topy, botx, boty...wipe!)
    // context.clearRect(0, 0, 500, 500)
    if (this.x > 1000) {
        this.xDirection = -this.xDirection;
    } else if (this.x < 0) {
        this.xDirection = -this.xDirection;
    }
    if (this.y >= 800) {
        this.yDirection = -this.yDirection;
    } else if (this.y <= 0) {
        this.yDirection = -this.yDirection;
    }
    // this.drawBall();
    this.x += this.randX * this.xDirection;
    this.y += this.randY * this.yDirection; 
}

function drawBalls() {
    context.clearRect(0, 0, 1000, 800)
    bouncyBalls.forEach((ball) => {
        context.beginPath();
        context.arc(ball.x, ball.y, ball.r, ball.sr, ball.er);
        context.fill();
    });
}

aBall = new Ball(200, 150, 100);
anotherBall = new Ball(400, 400, 50);
thirdBall = new Ball(350, 250, 50);

let bouncyBalls = [aBall, anotherBall, thirdBall];

bouncyBalls.forEach((currBall, i)=>{
    setInterval(()=>{
        currBall.updateBallPosition();
    }, 33)
});

setInterval(drawBalls, 33);

// aBall.drawBall();
// anotherBall.drawBall();
// thirdBall.drawBall();


