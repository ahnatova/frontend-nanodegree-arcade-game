// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed*dt;
    let round = 0;
    if(this.x>=505) {
        this.x = 0;
        this.speed = this.speed + (Math.floor((Math.random() * 10) + 1));
    } 
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
}

Player.prototype.update = function(dt) { 
    if (player.y < 40) { //resets player's position after reaching the water
        this.x = 200;
        this.y = 400;
    } else if (player.x > 400) { //prohibits movement out of the canvas x axis
        this.x = 400;
    } else if (player.x < 0) { //prohibits movement out of the canvas y axis
        this.x = 0;
    } else if (player.y > 400) {
        this.y = 400;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    if (key === 'left') {
        this.x = this.x - 100;
        (console.log(this.x));
    } else if (key === 'up') {
        this.y = this.y - 90;
        (console.log(this.y));
    } else if (key === 'right') {
        this.x = this.x + 100;
        (console.log(this.x));
    } else if (key === 'down') {
        this.y = this.y + 90;
        (console.log(this.y));
    }
};

// Now instantiate your objects.
const firstEnemy = new Enemy(0,60,50);
const secondEnemy = new Enemy(0,140,100);
const thirdEnemy = new Enemy(0,220,30);

const player = new Player(200,400);
// Place all enemy objects in an array called allEnemies
const allEnemies = [firstEnemy,secondEnemy,thirdEnemy];
// Place the player object in a variable called player



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
