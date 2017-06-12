/// <reference path= 'character.ts' />

class test extends character{
    constructor(){
        var a = 'spaceship';
        var x = 30;
        var y = 30;
        super(a,y,x);
    }
    public move(){
        console.log('dit is een test')
    }

}