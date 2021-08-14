var canvas, background, backgroundimg;

var gameState = 0;
var playerCount = 0;
var allPlayers;
var distance = 0;
var database, position;

var form, player, game;
var ground, groundimg;
var rightenergy = 0, leftenergy = 0;
var lefttower, righttower, lefttowerimg, righttowerimg;
var leftboy, rightboy, leftboyimg, rightboyimg;
var leftcannon, rightcannon, leftcannonimg, rightcannonimg;
var leftcannonball, rightcannonball, leftcannonball,rightcannonball;

function preload(){
  backgroundimg = loadImage("images/form.png")
  lefttowerimg = loadImage("images/lefttower.png");
  righttowerimg = loadImage("images/righttower.png");
  leftboyimg = loadImage("images/leftboy.png");
  rightboyimg = loadImage("images/rightboy.png");
  leftcannonimg =loadImage("images/cannonright.png");
  rightcannonimg = loadImage("images/cannonleft.png");
  leftcannonball = loadImage("images/cannonball.png");
  rightcannonball = loadImage("images/cannonball.png");
  groundimg = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  if(gameState === 0){
    game =new Game();
    game.start();
    game.getState();
 }
}
 function draw(){
 if(playerCount === 2){
   game.update(1);
 }
 if(gameState === 1){
   game.play();
 }
}
