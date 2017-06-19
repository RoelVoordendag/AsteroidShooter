/// <reference path="game.ts"/>


class Bullet {

    public div: HTMLElement;
    private game: Game;
    public x: number;
    public y: number;
    public width: number = 30;
    public height: number = 30;
    private xspeed: number;
    private yspeed: number;

    constructor(x: number, y: number, game: Game) {

        this.div = document.createElement("bullet");
        document.body.appendChild(this.div);

        this.x = x;
        this.y = y;

        this.game = game;


        this.xspeed = 0;
        this.yspeed = -10;
    }

    public move(): void {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";

        if (this.y < -50) {
            this.div.remove();
        }
    }
    public removeBulletDiv():void {
        this.div.remove();

    }
}