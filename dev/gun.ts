/// <reference path = 'playerShip.ts'/>
class Gun   {
    public game: Game;
    private spaceship:HTMLElement;
    private bullet: Bullet;
    public meteor: Astroid;
    public test:playerShip;
    public astroid: Astroid;

    constructor(game:Game, spaceship:HTMLElement, ){
        this.game = game;
        this.spaceship = spaceship;
        
}
    public fire(Astroid:Astroid, game:Game):void {
        this.astroid = Astroid;
        
        let rect:ClientRect = this.spaceship.getBoundingClientRect();      
    
        let b:Bullet = new Bullet(rect.left + 35 , rect.top - 50, this.astroid, this.game);
     
        this.game.addBullit(b);
    }


}