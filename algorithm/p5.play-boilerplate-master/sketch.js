var fixedrect, movingrect;


function setup() {
  createCanvas(400,400);
  fixedrect = createSprite(200, 200, 50, 100);
  movingrect = createSprite(250, 250, 100, 50);

  movingrect.shapeColor = "purple"; 
  fixedrect.shapeColor = "purple"; 
  
  movingrect.debug = true;
  fixedrect.debug = true;



}

function draw() {
  background(0);  
  drawSprites();

  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && 
     fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 &&
     movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 && 
     fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2){

    movingrect.shapeColor = "red"; 
    fixedrect.shapeColor = "red"; 


  }else{

    movingrect.shapeColor = "purple"; 
    fixedrect.shapeColor = "purple"; 
  }




}