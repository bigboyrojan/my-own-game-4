var  dolphin, shark, fish, blobfish;
var dolphinimg, sharkimg, fishimg, blobfishimg;
var house, houseimg;
var daybackground, nightbackground;
var daybackgroundimg, nightbackgroundimg;
var backgroundImage,line;
var trackimg;
var swordimg,swordimg2, sword1, sword2, sword3, sword4;
var juice,tablet,candy,insulin;
var juiceimg,tabletimg,candyimg,insulinimg;
var rand;
var scores = 3;
var score = 15;
var scoring = 3;
var scor = 15;
var candygroup, juicegroup, tabletgroup, insulingroup;
var form;
function preload(){
    //loading the images
dolphinimg = loadImage("images/gamedolphin.png");
sharkimg = loadImage("images/gameshark.png");
fishimg = loadImage("images/gamefish.png");
blobfishimg = loadImage("images/gameblobfish.png");
houseimg = loadImage("images/gamehouse.png");
daybackgroundimg = loadImage("images/gamedaybackground.PNG");
nightbackgroundimg = loadImage("images/gamenightbackground.PNG");
backgroundImage = loadImage("images/gamedaybackground.png");
swordimg = loadImage("images/gamesword.PNG");
swordimg2 = loadImage("images/gamesword2.png");
juiceimg = loadImage("images/juice.png");
insulinimg = loadImage("images/insulin.png");
candyimg = loadImage("images/candy.png");
tabletimg = loadImage("images/dextrosetablet.png");
}

function setup(){
createCanvas(1000,1000);
//creating the players and npc's
dolphin = createSprite(50,70,30,30);
dolphin.addImage(dolphinimg);
dolphin.scale = 0.35;
shark = createSprite(950,920,30,30);
shark.addImage(sharkimg);
shark.scale = 0.45;
shark.depth = 10;
fish = createSprite(50,950,30,30);
fish.addImage(fishimg);
fish.scale = 0.4;
blobfish = createSprite(950,50,30,30);
blobfish.addImage(blobfishimg);
blobfish.scale = 0.5;
house = createSprite(500,500,30,30);
house.addImage(houseimg);
house.scale = 0.75;
line = createSprite(500,577,200,5);
line.shapeColor = "black";
sword1 = createSprite(blobfish.x-65,blobfish.y+10,10,10);
sword1.addImage(swordimg);
sword1.scale = 0.17;
sword2 = createSprite(dolphin.x+48,dolphin.y+10,10,10);
sword2.addImage(swordimg2);
sword2.scale = 0.17;
sword3 = createSprite(fish.x+70,fish.y+10,10,10);
sword3.addImage(swordimg2);
sword3.scale = 0.17;
sword4 = createSprite(shark.x-30,shark.y+10,10,10);
sword4.addImage(swordimg);
sword4.scale=0.17;
candygroup = new Group();
juicegroup = new Group();
tabletgroup = new Group();
insulingroup = new Group();
form = new Form();
}
function draw(){
    background(backgroundImage);
  var edge = createEdgeSprites();
  //players bounce off each other
   blobfish.bounceOff(fish);
   blobfish.bounceOff(shark);
   blobfish.bounceOff(dolphin);
   fish.bounceOff(blobfish);
   fish.bounceOff(shark);
   fish.bounceOff(dolphin);
   shark.bounceOff(dolphin);
   shark.bounceOff(blobfish);
   shark.bounceOff(fish);
   dolphin.bounceOff(shark);
   dolphin.bounceOff(blobfish);
   dolphin.bounceOff(fish);
   //players bounce off edges
blobfish.bounceOff(edge[2]);
blobfish.bounceOff(edge[0]);
blobfish.bounceOff(edge[1]);
blobfish.bounceOff(edge[3]);
fish.bounceOff(edge[2]);
fish.bounceOff(edge[0]);
fish.bounceOff(edge[1]);
fish.bounceOff(edge[3]);
dolphin.bounceOff(edge[2]);
dolphin.bounceOff(edge[0]);
dolphin.bounceOff(edge[1]);
dolphin.bounceOff(edge[3]);
shark.bounceOff(edge[2]);
shark.bounceOff(edge[0]);
shark.bounceOff(edge[1]);
shark.bounceOff(edge[3]);
//sword positions
sword1.x = blobfish.x-65;
sword2.x = dolphin.x+48;
sword3.x = fish.x+70;
sword4.x = shark.x-30;
sword1.y = blobfish.y+10;
sword2.y = dolphin.y+10;
sword3.y = fish.y+10;
sword4.y = shark.y+5;
//movement keys and velocity
if(keyDown("UP")){
blobfish.y = blobfish.y+5;
}

if (keyDown("DOWN")){
blobfish.x= blobfish.x-5;
}

if(keyDown("RIGHT")){
blobfish.y=blobfish.y-5;
}

if(keyDown("LEFT")){
blobfish.x=blobfish.x+5;
}
if(keyDown("W")){
dolphin.x = dolphin.x-5;
}
if(keyDown("A")){
dolphin.y = dolphin.y+5;
}

if(keyDown("S")){
dolphin.y = dolphin.y-5;
}

if(keyDown("D")){
dolphin.x = dolphin.x+5;
}
if(keyDown("I")){
shark.x=shark.x+5;
}

if(keyDown("J")){
shark.y = shark.y-5;
}

if(keyDown("K")){
shark.x = shark.x-5;
}

if(keyDown("L")){
shark.y=shark.y+5;
}

if(keyDown("T")){
fish.y = fish.y+5;
}

if(keyDown("F")){
fish.x = fish.x+5;
}

if(keyDown("G")){
fish.y = fish.y-5;
}

if(keyDown("H")){
fish.x = fish.x-5
}
//if players are touching edges
if(blobfish.isTouching(edge[0])){
blobfish.x = 950;
blobfish.y=50;
}

if(blobfish.isTouching(edge[2])){
blobfish.x = 950;
blobfish.y = 50;
}

if(blobfish.isTouching(edge[3])){
blobfish.x = 950;
blobfish.y = 50;
}

if(blobfish.isTouching(edge[1])){
blobfish.x = 950;
blobfish.y = 50;
}

if(fish.isTouching(edge[1])){
    fish.x = 50;
    fish.y = 950;
    }

if(fish.isTouching(edge[2])){
fish.x = 50;
fish.y = 950;
        }

if(fish.isTouching(edge[3])){
 fish.x = 50;
 fish.y = 950;
            }

 if(fish.isTouching(edge[0])){
fish.x = 50;
fish.y = 950;
                }
if (shark.isTouching(edge[0])){
shark.x = 950;
shark.y = 920;
}

if(shark.isTouching(edge[1])){
shark.x = 950;
shark.y = 920;
}

if(shark.isTouching(edge[2])){
    shark.x = 950;
    shark.y = 920;
}

if(shark.isTouching(edge[3])){
shark.x = 950;
shark.y = 920;
}

if(dolphin.isTouching(edge[0])){
dolphin.x = 50;
dolphin.y = 50;
}

if(dolphin.isTouching(edge[1])){
dolphin.x = 50;
dolphin.y = 50;
}

if(dolphin.isTouching(edge[2])){
dolphin.x = 50;
dolphin.y = 50;
}

if(dolphin.isTouching(edge[3])){
dolphin.x = 50;
dolphin.y = 50;
}



//if the players are touching the house
if(dolphin.isTouching(house)){
shark.x = 1250;
shark.y = 1250;
blobfish.x = 1350;
blobfish.y = 1350;
fish.x = 1300;
fish.y = 1300;
}

if(shark.isTouching(house)){
dolphin.x = 1200;
dolphin.y = 1200;
blobfish.x = 1150;
blobfish.y = 1150;
fish.x = 1400;
fish.y = 1400;
}

if(blobfish.isTouching(house)){
shark.x = 1400;
shark.y = 1400;
blobfish.x = 1450;
blobfish.y = 1450;
dolphin.x = 1500;
dolphin.y = 1500;
}

if(fish.isTouching(house)){
shark.x = 1500;
shark.y = 1350;
dolphin.x = 1400;
dolphin.y = 1500;
blobfish.x = 1250;
blobfish.y = 1400;
}
//adding the sugar level above the players 
textSize(15);
fill("red");
text("sugar level: "+scores, dolphin.x-20, dolphin.y-50);
textSize(15);
fill("red");
text("sugar level: "+scoring, blobfish.x-60, blobfish.y-30);
textSize(15);
fill("yellow");
text("sugar level: "+score, shark.x-60,shark.y-50);
textSize(15);
fill("yellow");
text("sugar level: "+scor, fish.x-30,shark.y-30);
//text for rules
textSize(20);
fill("lightblue");
text("la bruh", 600,500);
//adding the sugar increasing and sugar decreasing commands
if(dolphin.isTouching(candygroup)){
    scores = scores+2;
    dolphin.x = 50;
    dolphin.y = 70;
}

if(dolphin.isTouching(juicegroup)){
    scores = scores+2;
    dolphin.x = 50;
    dolphin.y = 70;
}

if(dolphin.isTouching(tabletgroup)){
    scores = scores+2;
    dolphin.x = 50;
    dolphin.y = 70;
}

//calling the functions
creation();
candies();
tablets();
insulinspawn();
drawSprites();
}

//creating the spawning functions
function creation(){
if(frameCount%150 === 0){
    juice = createSprite(500,950,30,30);
    juice.x = Math.round(random(50,950));
    juice.y = Math.round(random(500,950));
    juice.addImage(juiceimg);
    juice.scale = 0.3;
    juice.lifetime = 200;
    juicegroup.add(juice);
}
}

function candies(){
    if(frameCount%170 === 0){
       candy = createSprite(500,950,30,30);
        candy.x = Math.round(random(50,950));
        candy.y = Math.round(random(500,950));
        candy.addImage(candyimg);
        candy.scale = 0.35;
        candy.lifetime = 200;
        candygroup.add(candy);
    }
}

function tablets(){
    if(frameCount%130 === 0){
        tablet = createSprite(500,950,30,30);
        tablet.x = Math.round(random(50,950));
        tablet.y = Math.round(random(500,950));
        tablet.addImage(tabletimg);
        tablet.scale = 0.3;
        tablet.lifetime = 190;
        tabletgroup.add(tablet);
    }
}

function insulinspawn(){
    if(frameCount%110 === 0){
        insulin = createSprite(500,950,30,30);
        insulin.x = Math.round(random(50,950));
        insulin.y = Math.round(random(500,50));
        insulin.addImage(insulinimg);
        insulin.scale = 0.4;
        insulin.lifetime = 180;
        insulingroup.add(insulin);
    }
}