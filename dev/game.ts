/// <reference path="playerShip.ts"/>
/// <reference path= 'scoreboard.ts'/>

class Game {
    public spaceship: playerShip;
    private miniAstroid: Array<miniAstroid> = new Array<miniAstroid>();
    private miniMeteors: miniAstroid;
    public bullets: Array<Bullet> = new Array<Bullet>();
    public meteors: Array<Astroid> = new Array<Astroid>();
    private astroid: Astroid;
    private bullet: Bullet;
    public score: number;
    private div:HTMLElement;
    public lives: number;


    constructor() {

        //creating spaceship
        this.spaceship = new playerShip(this);
        // this.test = new test();      
        console.log('hello darkness my old friend');
        this.creatingMeteor();
        //making the animation 60 fps
        requestAnimationFrame(() => this.gameLoop());

        //making meteors all the time
        setInterval(() => this.creatingMeteor(), 3000);
        //giving score a starting point 
        this.score = 0;
        this.div  = document.createElement('score');
        document.body.appendChild(this.div); 
        this.div.innerHTML = 'Score:' + this.score;
        //giving total of lives
        this.lives = 3;
    }
    public addBullit(b: Bullet) {
        this.bullets.push(b);

    }

    gameLoop() {
        this.spaceship.move();

        //bullet animatie moet hier komen
        for (let b of this.bullets) {
            b.move();
        }
        for(let mm of this.miniAstroid){
            mm.move();
        }
        for (let m of this.meteors) {
            m.move();
            // m.hitMeteor();\\
        }
        for (let b of this.bullets) {
            for (let m of this.meteors) {
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
        requestAnimationFrame(() => this.gameLoop());

    }

    private creatingMeteor() {
        let random = Math.floor((Math.random() * 7) + 2);
        for (let i = 0; i < random; i++) {
            let position = Math.floor((Math.random() * window.innerWidth) + 1);
            this.astroid = new Astroid(position, this);
            this.meteors.push(this.astroid);
            // position+=random;
        }
    }
    private createMiniMeteors(x:number, y:number){
        for(let i = 0;  i<2; i++){
            let randomPosition = Math.floor((Math.random() * 100) + 30);
            x+=randomPosition;
            x+=randomPosition;
            this.miniMeteors = new miniAstroid(x, y, this);
            this.miniAstroid.push(this.miniMeteors);


        }
    }
    private scoreBoard() {
        this.score  += 1;
        this.div.innerHTML= 'Score:' + this.score;


    }
}

