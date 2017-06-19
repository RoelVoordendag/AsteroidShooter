///<reference path= 'character.ts'/>
class Astroid extends character {
    
    public game: Game;
    constructor(x: number, game: Game) {
        let a = 'asteroid';
        let b = x;
        let c = -100;
        let height = 80;
        let width = 100
        super(a, b, c, height, width ,game);

        this.move();
        this.game = game;
    }
    public collision(){
        for(let m of this.game.meteors){
            for(let b of this.game.bullets){
                    if (b.x < m.x + this.width &&
                        b.x + b.width > m.x &&
                        b.y < m.y + this.height &&
                        b.height + b.y > m.y) {
                        this.game.bullets.splice(this.game.bullets.indexOf(b), 1);
                        this.game.meteors.splice(this.game.meteors.indexOf(m), 1);
                        
                        b.removeBulletDiv();

                        m.removeAsteroidDiv();

                        this.game.createMiniMeteors(m.x, m.y);


                        this.game.scoreBoard();
       
                }
            }
        }
    }
}
  

