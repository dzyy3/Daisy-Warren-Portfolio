let canvas;

let myFont;
let textPoints;
let fontSize;

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
  textSize(fontSize);

  fill(255);
  noStroke();

}

//got help from in class
function draw() {
  background(110, 175, 186);
  for (let i = 0; i < textPoints.length; i++){
    const xPos = textPoints[i].x;
    const yPos = textPoints[i].y;
    const  distance = dist(xPos, yPos, mouseX, mouseY);
    let pointSize = map(distance, 0, 100, 30, 5, true);

    ellipse(xPos, yPos, pointSize);
  }

//   if mouseX and mouseY(is over ellipse) {
//     increase ellipse size triple
//   }
  
}