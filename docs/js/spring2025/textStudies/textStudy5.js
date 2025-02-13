let canvas;

let myFont;
let textPoints;
let fontSize;
// let i;

fontSize = 160;

function preload() {
  myFont = loadFont('../../js/spring2025/textStudies/assets/comicSans.ttf');
}

function setup() {
  rectMode(CENTER);
  //text, x pos, y pos, font size, density of dots
  textPoints = 
  myFont.textToPoints( "hello", 25, 150, fontSize, {sampleFactor: 0.1});
  
  canvas = createCanvas(400, 200);
  canvas.parent('textStudy-container');
  textSize(fontSize);

  noStroke();

  
}

function draw() {
  background(110, 175, 186);

  //checking if the function has an odd number. % stands for modulus operator (1%2 checks if i is divisble by two or if 1 is left over)
  for (let i = 0; i < textPoints.length; i++){
    if(i%2 == 0){
      fill(255);
      square(textPoints[i].x, textPoints[i].y, 6);
    } else{
      fill(219, 171, 103);
      ellipse(textPoints[i].x, textPoints[i].y, 6);
    }
  }
  
}