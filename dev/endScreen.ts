class endScreen{

    private div:HTMLElement;
    private game:Game;
    private button:HTMLElement;

    constructor(game:Game){
        this.div = document.createElement('text-endgame');
        document.body.appendChild(this.div);
        this.game = game;
        
        this.div.innerHTML = 'Je hebt een Meteor door laten gaan. Je hebt verloren dit is je eindscore ' + this.game.score + ' probeer het spel nog een keer te spelen. Druk op control+f5/command+f5 om nog een keer te spelen!';

        // this.button = document.createElement('restartButton');
        // document.body.appendChild(this.button);

        // this.button.innerHTML = 'Opnieuw spelen!';
        // this.button.addEventListener("click", () => this.restartGame());
    }
    // private restartGame(){
    //     //deleting title
    //     this.div.remove();
    //     this.div = undefined;

    //     //deleting button
    //     this.button.remove();
    //     this.button = undefined;
    //     let game;
    //     game = new Game;
    // }
}