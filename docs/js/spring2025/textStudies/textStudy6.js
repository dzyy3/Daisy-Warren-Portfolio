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

  fill(255);
  noStroke();

  //to use sin waves :0
  angleMode(DEGREES);

}


function draw() {
  background(110, 175, 186);
  for (let i = 0; i < textPoints.length; i++){

    //adding sine wave to y. 
    let yOffset = 10 * sin(frameCount * 2 + textPoints[i].x * 0.1);


    ellipse(textPoints[i].x, textPoints[i].y + yOffset, 6, 6);    
  }
}