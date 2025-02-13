let canvas;

let myFont;
let textPoints;
let fontSize;

fontSize = 160;

function preload() {
  myFont = loadFont('../../js/spring2025/textStudies/assets/comicSans.ttf');
}

function setup() {  
  
  canvas = createCanvas(400, 200);
  canvas.parent('textStudy-container');
  background(110, 175, 186);
  textSize(fontSize);

  noStroke();

}


function draw() {
  background(110, 175, 186);
    //text, x pos, y pos, font size, density of dots
    textPoints =  myFont.textToPoints( "hello", 25, 150, fontSize, {sampleFactor: 0.1});

//I don't understand anything! I'm struggling so bad rn. I feel like last semester didn't teach me anything
  for (let i = 0; i < textPoints.length; i++){
        fill(219, 171, 103, 20)

    ellipse(textPoints[i].x, textPoints[i].y, 10)
  }
}