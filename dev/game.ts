/// <reference path="playerShip.ts"/>
/// <reference path = 'astroid.ts'/>
/// <reference path = 'Bullet.ts'/>

// <reference path='astroid.ts'/>
class Game {

    public spaceship: playerShip;
    public character: character;
    public test:test;
    public bullets:Array<Bullet> = new Array<Bullet>();
    private astroid:Astroid;
    public meteors : Array<Astroid> = new Array<Astroid>();
    private bullet:Bullet;
          
    
    constructor(){
       
        //creating spaceship
        this.spaceship = new playerShip(this);
        // this.test = new test();      
        console.log('hello darkness my old friend');
                this.creatingMeteor();
        //making the animation 60 fps
        requestAnimationFrame(() => this.gameLoop());
    }
    public addBullit(b:Bullet){
        this.bullets.push(b);
        
    }

    gameLoop(){
        this.spaceship.move();
        
        //bullet animatie moet hier komen
        for(let b of this.bullets){
            b.move();
        }           
        for(let m of this.meteors){
            m.move();
            // m.hitMeteor();\\
        }
        for(let c of this.bullets){
            for(let e of this.meteors){
                 if (c.x                    < e.x + 100 &&
                     c.x + 30        > e.x &&
                     c.y                    < e.y + 100 &&
                     30 + c.y         > e.y) {
                        this.bullets.splice(this.bullets.indexOf(c), 1); 
                        this.meteors.splice(this.meteors.indexOf(e), 1); 

                        c.removeBulletDiv();
                        
                        e.removeAsteroidDiv();
                }
            }
        }
        requestAnimationFrame(() => this.gameLoop());
    
    }   
    
       private creatingMeteor(){
        for(let i = 0; i<5; i++){   
            let position = Math.floor((Math.random() * window.innerWidth) + 1);

            this.astroid = new Astroid(position, this);
            this.meteors.push(this.astroid);
            
            // position+=random;
            }
         }
    }

