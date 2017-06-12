///<reference path= 'character.ts'/>
class Astroid extends character {
    private posX: number;
    private posy: number;
    public game: Game;

    constructor(x: number, game: Game) {
        let a = 'asteroid';
        let b = x;
        let c = -100;
        super(a, b, c, game);

        this.move();
        this.game = game


    }
    removeAsteroidDiv() {
        this._div.remove();
    }
}