///<reference path= 'character.ts'/>
class playerShip extends character{
    
    private spaceship:HTMLElement;
    private posX:number;
    private posY:number;

    private upKey : number = 87;        // W key
    public upKeyHitn : boolean = false;
    public upSpeed : number = 0;

    private downKey : number = 83;      // S key
    public downKeyHit : boolean = false;
    public downSpeed : number = 0;

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
    private astroid:Astroid;

    private rect:number;

    

    constructor(game:Game){
        super(a,x,y, game);

        //giving name to super to create and give placement    
        var a = 'spaceship';
        var x = 40;
        var y = 80;
        super(a,x,y, game);

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
 
    
    public move(){    
        
        let rect:ClientRect = this._div.getBoundingClientRect()
        this.rect = rect.bottom; 
        // up movement
        if(this.posY < 0){
            this.upSpeed = 0;
        } else {
            this.posY -= this.upSpeed;
            this._div.style.transform = "translate("+this.posX+"px,"+this.posY+"px)";
        }
        //down movement
        if(this.posY > 520){
            this.downSpeed = 0;
        } else {
            this.posY += this.downSpeed;
            this._div.style.transform = "translate("+this.posX+"px,"+this.posY+"px)";
        }
        //left movement
        if(this.posX < 1){
            this.leftSpeed = 0;
        } else {
            this.posX -= this.leftSpeed;
            this._div.style.transform = "translate("+this.posX+"vw,"+this.posY+"vh)";
        }
        //right movement
        if(this.posX > 95){
            this.rightSpeed = 0;
        } else {
            this.posX += this.rightSpeed;
            this._div.style.transform = "translate("+this.posX+"vw,"+this.posY+"vh)";
        }
        if(this.rect > innerHeight - 20){
            this.downSpeed = 0;
            console.log(innerHeight);
        }
    }

     onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.upKey:
            this.upSpeed = 1;
            this._div.style.backgroundPositionX = "px";
            break;
        case this.downKey:
            this.downSpeed = 1;
            this._div.style.backgroundPositionX = "-px";
            if(this.rect > innerHeight - 20){
                this.downSpeed = 0;
            }
            break;
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
        
    onKeyUp(event:KeyboardEvent):void {
        this.upSpeed = this.downSpeed = this.leftSpeed = this.rightSpeed = 0;
    }

}

    
 
