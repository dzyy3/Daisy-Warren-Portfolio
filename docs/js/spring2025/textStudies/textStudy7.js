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
  background(110, 175, 186);
  textSize(fontSize);

  fill(219, 171, 103);
  noStroke();

}


function draw() {
  background(110, 175, 186);
  for (let i = 0; i < textPoints.length; i++){
    let d = dist(mouseX, mouseY, textPoints[i].x, textPoints[i].y); // Calculate distance between mouse and point
    //if statement for if the mouse is close enough to zoom the points
        if (d< 15) {
            size = 20;
        } else {
            size = 10;
        }
    ellipse(textPoints[i].x, textPoints[i].y, 10)
  }

//   if mouseX and mouseY(is over ellipse) {
//     increase ellipse size triple
//   }
  
}