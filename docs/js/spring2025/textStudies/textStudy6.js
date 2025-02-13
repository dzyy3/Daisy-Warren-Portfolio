let canvas;

let myFont;
let textPoints;
let fontSize;
let size;

fontSize = 160;

function preload() {
  myFont = loadFont('../../js/spring2025/textStudies/assets/comicSans.ttf');
}

function setup() {
  
  
  //text, x pos, y pos, font size, density of dots
  textPoints = 
    myFont.textToPoints( "hello", 25, 150, fontSize, {sampleFactor: 0.1});
  
  
  canvas = createCanvas(400, 200);
  canvas.parent('textStudy-container');
  background(110, 175, 186);
  textSize(fontSize);

  fill(219, 171, 103);
  noStroke();

  //to use sin waves :0
  angleMode(DEGREES);

}


function draw() {
  background(110, 175, 186);

  for (let i = 0; i < textPoints.length; i++){

    ellipse(textPoints[i].x, textPoints[i].y, 10, 10)

    let x = frameCount;
    let y = 30 * sin(frameCount * 0.05) + 50;
    
  }
}