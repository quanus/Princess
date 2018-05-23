// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x || 0; //use or to make default
    this.y = y || 0; //need to be change
    this.speed = speed || 100; //
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt; //
    this.repeat() //make more bugs
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Enemy.prototype.repeat = function() {
    if (this.x > 500) {
        this.x = -100
    }
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    this.x = 200;
    this.y = 403;
    this.hasWon = false;
    this.sprite = 'images/char-princess-girl.png';
}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function() {
    //change with movement
}
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 403;
}

Player.prototype.handleInput = function(key) {
    // 
    var backHome = function() {
        if (player.y <= 20) {
            player = new Player;
            alert("小火炉回家吃饭了");
        }
    }
    switch (key) {
        case 'left':
            if (this.x > 0) {
                this.x -= 100
            };
            backHome();
            break;
        case 'right':
            if (this.x < 400) {
                this.x += 100
            };
            backHome();
            break;
        case 'up':
            if (this.y > 0) {
                this.y -= 85
            };
            backHome();
            break;
        case 'down':
            if (this.y < 403) {
                this.y += 85
            };
            backHome();
            break;
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(-200, 60, 500), new Enemy(-100, 60, 300), new Enemy(0, 60, 220), new Enemy(-100, 145, 300), new Enemy(200, 145, 300), new Enemy(100, 145, 300), new Enemy(400, 145, 400), new Enemy(200, 230, 300), new Enemy(300, 230, 300)];
var player = new Player();
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
//check 
function checkCollisions() {
    allEnemies.forEach(function(enemy) {
        if (Math.abs(enemy.x - player.x) < 25 && Math.abs(enemy.y - player.y) < 25) {
            player.reset();
        }
    })
}
