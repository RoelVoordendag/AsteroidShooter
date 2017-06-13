var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var character = (function () {
    function character(div, x, y, game) {
        this._div = document.createElement(div);
        document.body.appendChild(this._div);
        console.log(this._div);
        this._div.style.transform = "translate(" + x + "px," + y + "px)";
        this.speed = Math.random() * 1 + 1;
        this.game = game;
        this.x = x;
        this.y = y;
    }
    character.prototype.move = function () {
        this.y += this.speed;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        if (this.y > window.innerHeight - 150) {
            this._div.remove();
        }
    };
    return character;
}());
var Astroid = (function (_super) {
    __extends(Astroid, _super);
    function Astroid(x, game) {
        var _this = this;
        var a = 'asteroid';
        var b = x;
        var c = -100;
        _this = _super.call(this, a, b, c, game) || this;
        _this.move();
        _this.game = game;
        return _this;
    }
    Astroid.prototype.removeAsteroidDiv = function () {
        this._div.remove();
    };
    return Astroid;
}(character));
var playerShip = (function (_super) {
    __extends(playerShip, _super);
    function playerShip(game) {
        var _this = _super.call(this, a, x, y, game) || this;
        _this.upKey = 87;
        _this.upKeyHitn = false;
        _this.upSpeed = 0;
        _this.downKey = 83;
        _this.downKeyHit = false;
        _this.downSpeed = 0;
        _this.leftKey = 65;
        _this.leftKeyHit = false;
        _this.leftSpeed = 0;
        _this.rightKey = 68;
        _this.rightKeyHit = false;
        _this.rightSpeed = 0;
        _this.spacebar = 32;
        _this.spacebarHit = false;
        var a = 'spaceship';
        var x = 40;
        var y = 80;
        _this = _super.call(this, a, x, y, game) || this;
        _this.game = game;
        _this.spaceship = _this._div;
        _this.gun = new Gun(_this.game, _this.spaceship);
        _this.posX = x;
        _this.posY = y;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        return _this;
    }
    playerShip.prototype.move = function () {
        var rect = this._div.getBoundingClientRect();
        this.rect = rect.bottom;
        if (this.posY < 0) {
            this.upSpeed = 0;
        }
        else {
            this.posY -= this.upSpeed;
            this._div.style.transform = "translate(" + this.posX + "px," + this.posY + "px)";
        }
        if (this.posY > 520) {
            this.downSpeed = 0;
        }
        else {
            this.posY += this.downSpeed;
            this._div.style.transform = "translate(" + this.posX + "px," + this.posY + "px)";
        }
        if (this.posX < 1) {
            this.leftSpeed = 0;
        }
        else {
            this.posX -= this.leftSpeed;
            this._div.style.transform = "translate(" + this.posX + "vw," + this.posY + "vh)";
        }
        if (this.posX > 95) {
            this.rightSpeed = 0;
        }
        else {
            this.posX += this.rightSpeed;
            this._div.style.transform = "translate(" + this.posX + "vw," + this.posY + "vh)";
        }
        if (this.rect > innerHeight - 20) {
            this.downSpeed = 0;
            console.log(innerHeight);
        }
    };
    playerShip.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.upKey:
                this.upSpeed = 1;
                this._div.style.backgroundPositionX = "px";
                break;
            case this.downKey:
                this.downSpeed = 1;
                this._div.style.backgroundPositionX = "-px";
                if (this.rect > innerHeight - 20) {
                    this.downSpeed = 0;
                }
                break;
            case this.leftKey:
                this.leftSpeed = 1;
                this._div.style.backgroundPositionX = "-px";
                break;
            case this.rightKey:
                this.rightSpeed = 1;
                this._div.style.backgroundPositionX = "0px";
                break;
            case this.spacebar:
                this.gun.fire(this.game);
        }
    };
    playerShip.prototype.onKeyUp = function (event) {
        this.upSpeed = this.downSpeed = this.leftSpeed = this.rightSpeed = 0;
    };
    return playerShip;
}(character));
var scoreBoard = (function () {
    function scoreBoard() {
        this.div = document.createElement('clock');
        document.body.appendChild(this.div);
    }
    scoreBoard.prototype.scoreBoard = function () {
        console.log('hello darkness');
    };
    return scoreBoard;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.miniAstroid = new Array();
        this.bullets = new Array();
        this.meteors = new Array();
        this.spaceship = new playerShip(this);
        console.log('hello darkness my old friend');
        this.creatingMeteor();
        requestAnimationFrame(function () { return _this.gameLoop(); });
        setInterval(function () { return _this.creatingMeteor(); }, 3000);
        this.score = 0;
        this.div = document.createElement('score');
        document.body.appendChild(this.div);
        this.div.innerHTML = 'Score:' + this.score;
        this.lives = 3;
    }
    Game.prototype.addBullit = function (b) {
        this.bullets.push(b);
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.spaceship.move();
        for (var _i = 0, _a = this.bullets; _i < _a.length; _i++) {
            var b = _a[_i];
            b.move();
        }
        for (var _b = 0, _c = this.miniAstroid; _b < _c.length; _b++) {
            var mm = _c[_b];
            mm.move();
        }
        for (var _d = 0, _e = this.meteors; _d < _e.length; _d++) {
            var m = _e[_d];
            m.move();
        }
        for (var _f = 0, _g = this.bullets; _f < _g.length; _f++) {
            var b = _g[_f];
            for (var _h = 0, _j = this.meteors; _h < _j.length; _h++) {
                var m = _j[_h];
                if (b.x < m.x + 100 &&
                    b.x + 30 > m.x &&
                    b.y < m.y + 100 &&
                    30 + b.y > m.y) {
                    this.bullets.splice(this.bullets.indexOf(b), 1);
                    this.meteors.splice(this.meteors.indexOf(m), 1);
                    b.removeBulletDiv();
                    m.removeAsteroidDiv();
                    this.createMiniMeteors(m.x, m.y);
                    console.log(m.x);
                    this.scoreBoard();
                }
            }
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.creatingMeteor = function () {
        var random = Math.floor((Math.random() * 7) + 2);
        for (var i = 0; i < random; i++) {
            var position = Math.floor((Math.random() * window.innerWidth) + 1);
            this.astroid = new Astroid(position, this);
            this.meteors.push(this.astroid);
        }
    };
    Game.prototype.createMiniMeteors = function (x, y) {
        for (var i = 0; i < 2; i++) {
            var randomPosition = Math.floor((Math.random() * 100) + 30);
            x += randomPosition;
            x += randomPosition;
            this.miniMeteors = new miniAstroid(x, y, this);
            this.miniAstroid.push(this.miniMeteors);
        }
    };
    Game.prototype.scoreBoard = function () {
        this.score += 1;
        this.div.innerHTML = 'Score:' + this.score;
    };
    return Game;
}());
var Bullet = (function () {
    function Bullet(x, y, game) {
        this.width = 22;
        this.height = 22;
        this.div = document.createElement("bullet");
        document.body.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.game = game;
        this.xspeed = 0;
        this.yspeed = -10;
    }
    Bullet.prototype.move = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        if (this.y < -50) {
            this.div.remove();
        }
    };
    Bullet.prototype.removeBulletDiv = function () {
        this.div.remove();
    };
    return Bullet;
}());
var endScreen = (function () {
    function endScreen() {
        console.log('game is over');
    }
    return endScreen;
}());
var Gun = (function () {
    function Gun(game, spaceship) {
        this.game = game;
        this.spaceship = spaceship;
    }
    Gun.prototype.fire = function (game) {
        var rect = this.spaceship.getBoundingClientRect();
        var b = new Bullet(rect.left + 35, rect.top - 50, this.game);
        this.game.addBullit(b);
    };
    return Gun;
}());
window.addEventListener("load", function () {
    new startScreen();
});
var miniAstroid = (function (_super) {
    __extends(miniAstroid, _super);
    function miniAstroid(x, y, game) {
        var _this = this;
        var a = 'miniMeteor';
        var b = x;
        var c = y;
        _this = _super.call(this, a, b, c, game) || this;
        _this.game = game;
        _this.move();
        return _this;
    }
    return miniAstroid;
}(character));
var startScreen = (function () {
    function startScreen() {
        var _this = this;
        this.title = document.createElement('title');
        document.body.appendChild(this.title);
        this.title.innerHTML = 'Welkom to the best Asteroid Shooter';
        this.text = document.createElement('text');
        document.body.appendChild(this.text);
        this.text.innerHTML = 'Schiet de Asteroid en hou het het lang zo mogelijk vol. Wanner een Asteroid de onderkant van je scherm aanraakt ben je af. Probeer een hoge score te krijgen';
        this.button = document.createElement('playButton');
        document.body.appendChild(this.button);
        this.button.innerHTML = 'Spelen!';
        this.button.addEventListener("click", function () { return _this.deleteAll(); });
    }
    startScreen.prototype.deleteAll = function () {
        this.title.remove();
        this.title = undefined;
        this.text.remove();
        this.text = undefined;
        this.button.remove();
        this.button = undefined;
        new Game();
    };
    return startScreen;
}());
//# sourceMappingURL=main.js.map