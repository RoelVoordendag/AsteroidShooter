class playerShip extends character{
    
    private spaceship:HTMLElement;
    private posX:number;
    private posY:number;

    private leftKey : number = 65;      // A key
    public leftKeyHit : boolean = false;
    public leftSpeed : number = 0;

    private rightKey : number = 68;     // D key
    public rightKeyHit : boolean = false;
    public rightSpeed : number = 0;

    private spacebar: number = 32;      //spacebar
    public spacebarHit: boolean = false;

    public game:Game;
    private gun: Gun;

    private rect:number;

    

    constructor(game:Game){
        super(a,x,y, heigth, width, game);

        //giving name to super to create and give placement    
        var a = 'spaceship';
        var x = 40;
        var y = 80;
        var heigth = 100;
        var width = 100;
        super(a,x,y,heigth, width, game);

        this.game = game;
        this.spaceship = this._div;
        this.gun = new Gun(this.game, this.spaceship);
        
        //creating meteor
        //giving this.posX and this.posY coordinates
        this.posX = x;
        this.posY = y;


        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e));
        

    }

    // moet naar game
 
    
    public move():void{    
        
        let rect:ClientRect = this._div.getBoundingClientRect()
        this.rect = rect.bottom; 
        //left movement
        if(this.posX < 1){
            this.leftSpeed = 0;
        } else {
            this.posX -= this.leftSpeed;
            this._div.style.transform = "translate("+this.posX+"vw,"+this.posY+"vh)";
        }
        //right movement
        if(this.posX > 91){
            this.rightSpeed = 0;
        } else {
            this.posX += this.rightSpeed;
            this._div.style.transform = "translate("+this.posX+"vw,"+this.posY+"vh)";
        }
    }

    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.leftKey:
            this.leftSpeed = 1;
            this._div.style.backgroundPositionX = "-px";
            break;
        case this.rightKey:
            this.rightSpeed = 1;
            this._div.style.backgroundPositionX = "0px";
            break;
        case this.spacebar:                   
            this.gun.fire(this.game);
        
        }
    }
        
    private onKeyUp(event:KeyboardEvent):void {
       this.leftSpeed = this.rightSpeed = 0;
    }

}

    
 
