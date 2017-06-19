class miniAstroid extends character{
    public game:Game;
    constructor(x:number,y:number, game:Game){
        let a:string = 'miniMeteor';
        let b:number = x;
        let c:number = y;
        let heigth:number =30;
        let width:number =30;
        super(a , b , c ,heigth, width, game);
        this.game = game;

        this.move();
    }
}