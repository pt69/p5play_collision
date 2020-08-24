let randAussen;
let figur;

function setup() {
  let cnv = createCanvas(800, 600);
  cnv.position(10,10);

  randAussen = new Group();

  let seitenWandLinks = createSprite(0, height/2, 10, height);
  seitenWandLinks.shapeColor = color("lightgray");
  seitenWandLinks.immovable = true;
  randAussen.add(seitenWandLinks);
  
	let seitenWandOben = createSprite(width/2, 0, width, 10);
  seitenWandOben.shapeColor = color("lightgray");
  seitenWandOben.immovable = true;
  randAussen.add(seitenWandOben); 
  
  let seitenWandRechts = createSprite(width, height/2, 10, height);
  seitenWandRechts.shapeColor = color("lightgray");
  seitenWandRechts.immovable = true;
  randAussen.add(seitenWandRechts);   
  
  let seitenWandUnten = createSprite(width/2, height, width, 10);
  seitenWandUnten.shapeColor = color("lightgray");
  seitenWandUnten.immovable = true;
  randAussen.add(seitenWandUnten);
  
  figur = createSprite(width/2, height/2, 10, 10);
  figur.setSpeed(10, 30);
}

function draw() {
  background(252);

  figur.bounce(randAussen);

  drawSprites();
}