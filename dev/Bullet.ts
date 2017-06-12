/// <reference path="game.ts"/>


class Bullet {
    
    public div: HTMLElement;
    private game:Game;
    private character:character;
    public x:number;
    public y:number;
    private width:number = 22;
    private height:number = 22;
    private xspeed:number;
    private yspeed:number;
    public ship:playerShip;

    public test:number;
    private astroid:Astroid;

    constructor(x:number, y:number, astroid:Astroid, game:Game ) {
        
        this.div = document.createElement("bullet");
        document.body.appendChild(this.div);
        
        this.x = x;
        this.y = y;

        this.game = game;
    

        this.xspeed = 0;
        this.yspeed = -10;
        
        // this.move();/
        

    }

    public move():void {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";

        for(let a of this.game.meteors){
            a.hitMeteor(this); 
        }
    
        if(this.y<-50){
            this.div.remove();
        }
    }
}