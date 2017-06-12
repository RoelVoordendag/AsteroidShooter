///<reference path= 'character.ts'/>
/// <reference path = 'Bullet.ts'/>
class Astroid extends character {
    private posX: number;
    private posy: number;
    private game:Game;

    constructor(x: number, game:Game) {
        let a = 'asteroid';
        let b = x;
        let c = -100;
        super(a, b, c);
        console.log('ik ben een metero')
        this.move();
        console.log(this.posX);
        console.log(this.posy);
        console.log(this.x, this.y);
        
        this.game = game


    }
    public hitMeteor(bullet: Bullet) {
        // var metroid: ClientRect = this._div.getBoundingClientRect();
       
        //     if (this.x < bullet.x + bullet.x + 30 &&
        //         this.x + metroid.width > bullet.x &&
        //         this.y < bullet.y + 30 &&
        //         this.y + metroid.height > bullet.y) {
        //             console.log('i am the best');
        //             // this._div.remove();
        //             // bullet.div.remove();
                    
        //             // this.game.removeAsteroidFromArray(this);
        //             this.game.removeBulletFromArray(bullet);
        //             this.game.removeAsteroidFromArray(this);
            
        

    }
    removeAsteroidDiv(){
        this._div.remove();
    }
}