class scoreBoard{
    
    public div:HTMLElement;
    constructor(){
        this.div =  document.createElement('clock');
        document.body.appendChild(this.div);

    }
    public scoreBoard(){
        console.log('hello darkness');
    }
}