class character {

    public _div: HTMLElement;
    public x: number;
    public y: number;
    private speed: number;
    public game:Game;
    private endScreen:endScreen;
    private remove:number;

    constructor(div: string, x: number, y: number, game:Game) {
        //creating div
        this._div = document.createElement(div);
        document.body.appendChild(this._div);
        //placing div
        this._div.style.transform = "translate(" + x + "px," + y + "px)";
        this.speed = Math.random() * 1 + 1;

        this.game = game;

        this.x = x;
        this.y = y;

        this.remove = 0;

    }
    public move() {
        this.y += this.speed;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        if (this.y > window.innerHeight - 150) {
            this._div.remove();
            this.endScreenStarter();    
        }
        
    }   
    public removeAsteroidDiv() {
        this._div.remove();
    }
    public endScreenStarter(){
        this.game.div.remove();
        this.endScreen = new endScreen(this.game);
        this._div = undefined;
    }
}
