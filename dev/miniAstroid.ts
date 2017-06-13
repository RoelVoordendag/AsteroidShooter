class miniAstroid extends character{
    public game:Game;
    constructor(x:number,y:number, game:Game){
        let a = 'miniMeteor';
        let b = x;
        let c = y;
        super(a , b , c , game);
        this.game = game;

        this.move();
    }
}