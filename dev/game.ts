/// <reference path="playerShip.ts"/>

class Game {
    public spaceship: playerShip;
    public bullets: Array<Bullet> = new Array<Bullet>();
    public meteors: Array<Astroid> = new Array<Astroid>();
    private astroid: Astroid;
    private bullet: Bullet;
    public score: number;
    public div:HTMLElement;
    private character:character;
    private miniMeteors: miniAstroid;
    private miniAstroid: Array<miniAstroid> = new Array<miniAstroid>();


    constructor() {
        //creating spaceship
        this.spaceship = new playerShip(this);
        // this.test = new test();      
        this.creatingMeteor();
        //making the animation 60 fps
        requestAnimationFrame(() => this.gameLoop());

        //making meteors all the time
        setInterval(() => this.creatingMeteor(), 3500);
        //giving score a starting point 
        this.score = 0;
        this.div  = document.createElement('score');
        document.body.appendChild(this.div); 
        this.div.innerHTML = 'Score:' + this.score;
    }
    public addBullit(b: Bullet) {
        this.bullets.push(b);
    }

    gameLoop() {
        this.spaceship.move();
        this.astroid.collision();
        for(let mm of this.miniAstroid){
                mm.move();
            }
        //bullet animatie moet hier komen
        for (let b of this.bullets) {
            b.move();
        }

        for (let m of this.meteors) {
            m.move();
    }
        
         for (let mm of this.miniAstroid) {
            for (let b of this.bullets) {
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
        requestAnimationFrame(() => this.gameLoop());

    }
    private creatingMeteor() {
        let random = Math.floor((Math.random() * 4) + 1);
        for (let i = 0; i < random; i++) {
            let position = Math.floor((Math.random() * window.innerWidth) + 1);
            if(position > 1400){
                position = 1300;
                this.astroid = new Astroid(position, this);
                this.meteors.push(this.astroid);
            }else{
                this.astroid = new Astroid(position, this);
                this.meteors.push(this.astroid);
            }
        }
    }
    public createMiniMeteors(x:number, y:number){

        for(let i = 0;  i<2; i++){
            let randomPositionX = Math.floor((Math.random() * 200) -100);
            let randomPositionY = Math.floor((Math.random() * 100) - 50);
            
            x+=randomPositionX;
            y+=randomPositionY;
            //checking if meteor does not spanw out of screen
            if(x > 1400){
                x=1300;
                this.miniMeteors = new miniAstroid(x, y, this);
                this.miniAstroid.push(this.miniMeteors);
            }else{
                this.miniMeteors = new miniAstroid(x, y, this);
                this.miniAstroid.push(this.miniMeteors);
                this.miniMeteors ;
            }
        }
    }
    public scoreBoard() {
        this.score  += 1;
        this.div.innerHTML= 'Score:' + this.score;
    }
}


