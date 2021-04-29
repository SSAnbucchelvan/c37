class Game{
 constructor(){

}


getGameState(){
            var gameStateRef=database.ref('gamestate');
            gameStateRef.on("value",function(data){
            myGameState=data.val();
               
            });

}

updateGameState(){
    
}

start(){
        
            myPlayer=new Player();
            myPlayer.getPlayerCount();
            myForm=new Form();
            myForm.display();
        

}

}