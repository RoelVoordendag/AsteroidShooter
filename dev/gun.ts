/// <reference path = 'playerShip.ts'/>
class Gun   {
    public game: Game;
    private spaceship:HTMLElement;
    private bullet: Bullet;
    public meteor: Astroid;

    constructor(game:Game, spaceship:HTMLElement, ){
        this.game = game;
        this.spaceship = spaceship;
        
}
    public fire(game:Game):void {
          
        let rect:ClientRect = this.spaceship.getBoundingClientRect();      
    
        let b:Bullet = new Bullet(rect.left + 35 , rect.top - 50, this.game);
     
        this.game.addBullit(b);
    }


}