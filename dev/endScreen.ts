class endScreen{

    private div:HTMLElement;
    private game:Game;
    
    constructor(game:Game){
        this.div = document.createElement('text-endgame');
        document.body.appendChild(this.div);
        this.game = game;
        
        this.div.innerHTML = 'Je hebt een Meteor door laten gaan. Je hebt verloren dit is je eindscore ' + this.game.score + ' probeer het spel nog een keer te spelen. Druk op control+f5/command+f5 om nog een keer te spelen!';
    }
}