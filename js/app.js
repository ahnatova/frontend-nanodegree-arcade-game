// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed*dt;
    if(this.x>=505) {
        this.x = 0;
        this.speed = this.speed + (Math.floor((Math.random() * 10) + 1));
    } 

    //collision
   if(this.x < player.x + 55 && this.x + 55 > player.x && this.y < player.y + 30 && this.y + 30 > player.y) {
       player.resetPosition();
   }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

const Player = function(x, y) {
    this.x = x;
    this.y = y;    
    this.sprite = 'images/char-boy.png';
}

Player.prototype.update = function(dt) { 
    if (this.y < 40) { //resets player's position after reaching the water
        this.resetPosition();
        alert("You've won!");
    } else if (this.x > 400) { //prohibits movement out of the canvas x axis
        this.x = 400;
    } else if (this.x < 0) { 
        this.x = 0;
    } else if (this.y > 400) { //prohibits movement out of the canvas y axis
        this.y = 400;
    } 
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    if (key === 'left') {
        this.x = this.x - 100;
    } else if (key === 'up') {
        this.y = this.y - 90;
    } else if (key === 'right') {
        this.x = this.x + 100;
    } else if (key === 'down') {
        this.y = this.y + 90;
    }
};

Player.prototype.resetPosition = function() {
    this.x = 200;
    this.y = 400;
};

const firstEnemy = new Enemy(0,40,50);
const secondEnemy = new Enemy(0,130,100);
const thirdEnemy = new Enemy(0,220,30);

const player = new Player(200,400);
const allEnemies = [firstEnemy, secondEnemy, thirdEnemy];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});