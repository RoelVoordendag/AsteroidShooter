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
    function character(div, x, y) {
        console.log(div);
        this._div = document.createElement(div);
        document.body.appendChild(this._div);
        this._div.style.transform = "translate(" + x + "px," + y + "px)";
        this.speed = Math.random() * 1 + 1;
        this.x = x;
        this.y = y;
    }
    character.prototype.move = function () {
        this.y += this.speed;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        if (this.y > window.innerHeight - 120) {
            this._div.remove();
        }
    };
    character.prototype.hitMeteor = function (bullet) {
        console.log(this.y);
    };
    return character;
}());
var playerShip = (function (_super) {
    __extends(playerShip, _super);
    function playerShip(game) {
        var _this = _super.call(this, a, x, y) || this;
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
        _this = _super.call(this, a, y, x) || this;
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
        if (rect.bottom > innerHeight) {
            this.downSpeed = 0;
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
                this.gun.fire(this.astroid, this.game);
        }
    };
    playerShip.prototype.onKeyUp = function (event) {
        this.upSpeed = this.downSpeed = this.leftSpeed = this.rightSpeed = 0;
    };
    return playerShip;
}(character));
var Game = (function () {
    function Game() {
        var _this = this;
        this.bullets = new Array();
        this.meteors = new Array();
        this.spaceship = new playerShip(this);
        console.log('hello darkness my old friend');
        this.creatingMeteor();
        requestAnimationFrame(function () { return _this.gameLoop(); });
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
        for (var _b = 0, _c = this.meteors; _b < _c.length; _b++) {
            var m = _c[_b];
            m.move();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.creatingMeteor = function () {
        for (var i = 0; i < 5; i++) {
            var position = Math.floor((Math.random() * window.innerWidth) + 1);
            this.astroid = new Astroid(position, this);
            this.meteors.push(this.astroid);
        }
    };
    Game.prototype.removeAsteroidFromArray = function (a) {
        a.removeAsteroidDiv();
        var i = this.meteors.indexOf(a);
        if (i != -1) {
            this.bullets.splice(i, 1);
        }
        console.log("Aantal is " + this.bullets.length);
    };
    Game.prototype.removeBulletFromArray = function (b) {
        b.removeBulletDiv();
        var i = this.bullets.indexOf(b);
        if (i != -1) {
            this.bullets.splice(i, 1);
        }
        console.log("Aantal is " + this.bullets.length);
    };
    return Game;
}());
var Bullet = (function () {
    function Bullet(x, y, astroid, game) {
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
        for (var _i = 0, _a = this.game.meteors; _i < _a.length; _i++) {
            var a = _a[_i];
            a.hitMeteor(this);
        }
        if (this.y < -50) {
            this.div.remove();
        }
    };
    Bullet.prototype.removeBulletDiv = function () {
        this.div.remove();
    };
    return Bullet;
}());
var Astroid = (function (_super) {
    __extends(Astroid, _super);
    function Astroid(x, game) {
        var _this = this;
        var a = 'asteroid';
        var b = x;
        var c = -100;
        _this = _super.call(this, a, b, c) || this;
        console.log('ik ben een metero');
        _this.move();
        console.log(_this.posX);
        console.log(_this.posy);
        console.log(_this.x, _this.y);
        _this.game = game;
        return _this;
    }
    Astroid.prototype.hitMeteor = function (bullet) {
        var metroid = this._div.getBoundingClientRect();
        if (this.x < bullet.x + bullet.x + 30 &&
            this.x + metroid.width > bullet.x &&
            this.y < bullet.y + 30 &&
            this.y + metroid.height > bullet.y) {
            console.log('i am the best');
            this.game.removeBulletFromArray(bullet);
            this.game.removeAsteroidFromArray(this);
        }
    };
    Astroid.prototype.removeAsteroidDiv = function () {
        this._div.remove();
    };
    return Astroid;
}(character));
var Gun = (function () {
    function Gun(game, spaceship) {
        this.game = game;
        this.spaceship = spaceship;
    }
    Gun.prototype.fire = function (Astroid, game) {
        this.astroid = Astroid;
        var rect = this.spaceship.getBoundingClientRect();
        var b = new Bullet(rect.left + 35, rect.top - 50, this.astroid, this.game);
        this.game.addBullit(b);
    };
    return Gun;
}());
window.addEventListener("load", function () {
    new Game();
});
var test = (function (_super) {
    __extends(test, _super);
    function test() {
        var _this = this;
        var a = 'spaceship';
        var x = 30;
        var y = 30;
        _this = _super.call(this, a, y, x) || this;
        return _this;
    }
    test.prototype.move = function () {
        console.log('dit is een test');
    };
    return test;
}(character));
//# sourceMappingURL=main.js.map