/// <reference path="playerShip.ts"/>
/// <reference path = 'astroid.ts'/>

// <reference path='astroid.ts'/>
class Game {

    public spaceship: playerShip;
    public character: character;
    public test:test;
    public bullets:Array<Bullet> = new Array<Bullet>();
    private astroid:Astroid;
    public meteors : Array<Astroid> = new Array<Astroid>();
          
    
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

    removeAsteroidFromArray(a:Astroid){

    }
    public removeBulletFromArray(b:Bullet){
        
        // div verwijderen
        b.removeBulletDiv();

        // bullet instance verwijderen uit de array
		let i : number = this.bullets.indexOf(b);
		if(i != -1) {
			this.bullets.splice(i, 1);
		}
		console.log("Aantal is " + this.bullets.length);
	}
    }

}
