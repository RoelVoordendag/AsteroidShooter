///<reference path= 'character.ts'/>
class Astroid extends character {
    public game: Game;

    constructor(x: number, game: Game) {
        let a = 'asteroid';
        let b = x;
        let c = -100;
        super(a, b, c, game);

        this.move();
        this.game = game


    }
}