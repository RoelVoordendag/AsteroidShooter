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
        this._div.style.transform = "translate(" + x + "px," + y + "px)";
        this.speed = Math.random() * 1 + 1;
        this.game = game;
        this.x = x;
        this.y = y;
        this.remove = 0;
    }
    character.prototype.move = function () {
        this.y += this.speed;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        if (this.y > window.innerHeight - 150) {
            this._div.remove();
            this.endScreenStarter();
        }
    };
    character.prototype.removeAsteroidDiv = function () {
        this._div.remove();
    };
    character.prototype.endScreenStarter = function () {
        this.game.div.remove();
        this.endScreen = new endScreen(this.game);
        this._div = undefined;
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
    Astroid.prototype.collision = function () {
        for (var _i = 0, _a = this.game.meteors; _i < _a.length; _i++) {
            var m = _a[_i];
            for (var _b = 0, _c = this.game.bullets; _b < _c.length; _b++) {
                var b = _c[_b];
                if (b.x < m.x + 100 &&
                    b.x + 30 > m.x &&
                    b.y < m.y + 100 &&
                    30 + b.y > m.y) {
                    this.game.bullets.splice(this.game.bullets.indexOf(b), 1);
                    this.game.meteors.splice(this.game.meteors.indexOf(m), 1);
                    b.removeBulletDiv();
                    m.removeAsteroidDiv();
                    this.game.createMiniMeteors(m.x, m.y);
                    this.game.scoreBoard();
                }
            }
        }
    };
    return Astroid;
}(character));
var playerShip = (function (_super) {
    __extends(playerShip, _super);
    function playerShip(game) {
        var _this = _super.call(this, a, x, y, game) || this;
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
        if (this.posX < 1) {
            this.leftSpeed = 0;
        }
        else {
            this.posX -= this.leftSpeed;
            this._div.style.transform = "translate(" + this.posX + "vw," + this.posY + "vh)";
        }
        if (this.posX > 91) {
            this.rightSpeed = 0;
        }
        else {
            this.posX += this.rightSpeed;
            this._div.style.transform = "translate(" + this.posX + "vw," + this.posY + "vh)";
        }
    };
    playerShip.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
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
        this.leftSpeed = this.rightSpeed = 0;
    };
    return playerShip;
}(character));
var Game = (function () {
    function Game() {
        var _this = this;
        this.bullets = new Array();
        this.meteors = new Array();
        this.miniAstroid = new Array();
        this.spaceship = new playerShip(this);
        this.creatingMeteor();
        requestAnimationFrame(function () { return _this.gameLoop(); });
        setInterval(function () { return _this.creatingMeteor(); }, 3500);
        this.score = 0;
        this.div = document.createElement('score');
        document.body.appendChild(this.div);
        this.div.innerHTML = 'Score:' + this.score;
    }
    Game.prototype.addBullit = function (b) {
        this.bullets.push(b);
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.spaceship.move();
        this.astroid.collision();
        for (var _i = 0, _a = this.miniAstroid; _i < _a.length; _i++) {
            var mm = _a[_i];
            mm.move();
        }
        for (var _b = 0, _c = this.bullets; _b < _c.length; _b++) {
            var b = _c[_b];
            b.move();
        }
        for (var _d = 0, _e = this.meteors; _d < _e.length; _d++) {
            var m = _e[_d];
            m.move();
        }
        for (var _f = 0, _g = this.miniAstroid; _f < _g.length; _f++) {
            var mm = _g[_f];
            for (var _h = 0, _j = this.bullets; _h < _j.length; _h++) {
                var b = _j[_h];
                if (b.x < mm.x + 30 &&
                    b.x + 30 > mm.x &&
                    b.y < mm.y + 30 &&
                    30 + b.y > mm.y) {
                    this.bullets.splice(this.bullets.indexOf(b), 1);
                    this.miniAstroid.splice(this.miniAstroid.indexOf(mm), 1);
                    b.removeBulletDiv();
                    mm.removeAsteroidDiv();
                    this.scoreBoard();
                }
            }
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.creatingMeteor = function () {
        var random = Math.floor((Math.random() * 4) + 1);
        for (var i = 0; i < random; i++) {
            var position = Math.floor((Math.random() * window.innerWidth) + 1);
            if (position > 1400) {
                position = 1300;
                this.astroid = new Astroid(position, this);
                this.meteors.push(this.astroid);
            }
            else {
                this.astroid = new Astroid(position, this);
                this.meteors.push(this.astroid);
            }
        }
    };
    Game.prototype.createMiniMeteors = function (x, y) {
        for (var i = 0; i < 2; i++) {
            var randomPositionX = Math.floor((Math.random() * 200) - 100);
            var randomPositionY = Math.floor((Math.random() * 100) - 50);
            x += randomPositionX;
            y += randomPositionY;
            if (x > 1400) {
                x = 1300;
                this.miniMeteors = new miniAstroid(x, y, this);
                this.miniAstroid.push(this.miniMeteors);
            }
            else {
                this.miniMeteors = new miniAstroid(x, y, this);
                this.miniAstroid.push(this.miniMeteors);
                this.miniMeteors;
            }
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
    function endScreen(game) {
        this.div = document.createElement('text-endgame');
        document.body.appendChild(this.div);
        this.game = game;
        this.div.innerHTML = 'Je hebt een Meteor door laten gaan. Je hebt verloren dit is je eindscore ' + this.game.score + ' probeer het spel nog een keer te spelen. Druk op control+f5/command+f5 om nog een keer te spelen!';
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
        this.text.innerHTML = 'Schiet de Asteroid en hou het het lang zo mogelijk vol. Wanneer een Asteroid de onderkant van je scherm aanraakt ben je af. Probeer een hoge score te krijgen';
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