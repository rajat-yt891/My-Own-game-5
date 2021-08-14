class Game {
  constructor(){

  }
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    
  }
  play(){
    form.hide();
    background(groundimg);
   var ground = createSprite(displayWidth/2, displayHeight-20, displayWidth, 20);
   if(rightenergy<200)
   rightenergy=rightenergy+1;
   fill("yellow");
   textSize(20);
   text("Tower 2 Energy"+rightenergy, displayWidth-300, 50);
   if(leftenergy<200)
   leftenergy=leftenergy+1;
   fill("yellow");
   textSize(20);
   text("Tower 1 Energy"+leftenergy, 300, 50);
   //making towers of botth side
   lefttower = createSprite(displayWidth/12 - 40, displayHeight -300, 50, 100);
   lefttower.addImage("lt",lefttowerimg);
   righttower = createSprite(displayWidth-90, displayHeight - 300, 50, 100);
   righttower.addImage("rt", righttowerimg);
   
   //sprites for dsiplay
   leftboy = createSprite(displayWidth-70, displayHeight-430, 50, 100);
   leftboy.addImage("LB", leftboyimg);
   leftboy.scale=0.2;
   rightboy = createSprite(displayWidth/12-80, displayHeight-430, 50, 100);
   rightboy.addImage("RB", rightboyimg);
   rightboy.scale=0.2;

   leftcannon = createSprite(displayWidth/12-20, displayHeight-430, 50, 100);
   leftcannon.addImage("lc", rightcannonimg);
   leftcannon.scale=0.5;
   rightcannon = createSprite(displayWidth-130, displayHeight-430, 50, 100);
   rightcannon.addImage("rc", leftcannonimg);
   rightcannon.scale=0.5;
   if(keyDown("a")){
     leftcannonball=createSprite(displayWidth/12-20, displayHeight-430, 50, 50);
     leftcannonball.velocityX=+5;
     leftcannonball.velocityY=-1;
     leftcannonball.velocityY+=0.8;
     leftenergy=leftenergy-40;
   }
   if(keyDown("d")){
    rightcannonball=createSprite(displayWidth-130, displayHeight-430, 50, 50);
    rightcannonball.velocityX=-5;
    rightcannonball.velocityY=+1;
    rightcannonball.velocityY+=0.8;
    rightenergy=rightenergy-40;
   }
  

  drawSprites();
  }
}
