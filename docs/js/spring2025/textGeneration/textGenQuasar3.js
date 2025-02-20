let canvas;

let myFont;
let textPoints;
let fontSize;

fontSize = 180;

function preload() {
  myFont = loadFont('../../js/spring2025/textGeneration/assets/70s.ttf');
}

function setup() {
  
  
  //text, x pos, y pos, font size, density of dots
  textPoints = 
    myFont.textToPoints( "Quasar", 20, 200, fontSize, {sampleFactor: 0.2});
  
  
  canvas = createCanvas(600, 300);
  canvas.parent('textStudy-container');
  background(0, 0, 0);
  textSize(fontSize);

  fill(255, 255, 255);
  noStroke();

}


function draw() {
  background(20, 20, 20);

  for (let i = 0; i < textPoints.length; i++){
    ellipse(textPoints[i].x, textPoints[i].y, 4)
  }
}