const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

//Title Screen variables
var titleScreenImg, titleScreenText, titleScreenTextImg, pressSpaceText, pressSpaceImg;
var playButton, playButtonImg, playButtonHighlighted;
var titleMusic;

//First Dialogue Scene variables
var houseBgImg, girl, girlAngryImg, girlGoldImg;
var wizard, wizardImg, wizardGoldImg;

//Level 1 variables
var level1BgImg;

//Level 2 variables

//Level 3 variables

//Ending Scene variables

var gameState = 0;

function preload(){
    titleScreenImg = loadImage("Images/Title Screen/titleScreen.png");
    titleScreenTextImg = loadImage("Images/Title Screen/gameTitleText.png");
    pressSpaceImg = loadImage("Images/pressSpaceToPlay.png");

    playButtonImg = loadImage("Images/Title Screen/playButton.png");
    playButtonHighlighted = loadImage("Images/Title Screen/playButtonHighlighted.png");

    //titleMusic = loadSound("Music/otherMusic.mp3", true);

    houseBgImg = loadImage("Images/Dialogue/houseInterior.png");
    girlAngryImg = loadImage("Images/Girl/angryGirl.png");
    girlGoldImg = loadImage("Images/Girl/holdingGoldGirl.png");

    wizardImg = loadImage("Images/Wizard/wizard.png");
    wizardGoldImg = loadImage("Images/Wizard/wizardHoldingGold.png");

}

function setup(){
    createCanvas(displayWidth - 4, displayHeight - 4);
    engine = Engine.create();
    world = engine.world;

    gameState = 0;
}

function draw(){
    background("#87ceeb");
    //titleMusic.play();
    Engine.update(engine);

    if (gameState === 0){
        background(titleScreenImg);

        titleScreenText = createSprite(displayWidth/2, displayHeight/4, 20, 20);
        titleScreenText.addImage(titleScreenTextImg);
        titleScreenText.scale = 0.7;
        titleScreenText.display();

        pressSpaceText = createSprite(displayWidth/2, displayHeight/2 + 330, 20, 20);
        pressSpaceText.addImage(pressSpaceImg);
        pressSpaceText.display();
        
        if (keyDown("SPACE")){
            gameState = 1;
        }

    }

    if (gameState === 1){
        background(houseBgImg);
        //titleMusic.stop();
    }

    //drawSprites();

}
