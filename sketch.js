var myForm;
var database;
var myPlayer,myGame,myGameState,myPlayerCount;

function setup(){
    createCanvas(400,400);
   

   database = firebase.database();
   console.log("database connected")
    myGame=new Game();
    myGame.getGameState();
    myGame.start();
   
    
}

function draw(){
    background("blue");
    console.log("gamestate current value"+ myGameState)
  
  
    drawSprites();
}


