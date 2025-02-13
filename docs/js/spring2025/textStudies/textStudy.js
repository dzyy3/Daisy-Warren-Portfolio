let canvas;

let myFont;
let textPoints;
let fontSize;
let helloArray;

fontSize = 100;

function preload() {
  myFont = loadFont('../../js/spring2025/textStudies/assets/comicSans.ttf');
}

function setup() {
  
  
  //text, x pos, y pos, font size
  textPoints = 
    myFont.textToPoints( "hello", 20, 140, fontSize,
    {sampleFactor: 0.2}
  );
  
  
  canvas = createCanvas(400, 200);
  canvas.parent('textStudy-container');
  background(110, 175, 186);
  textFont(myFont);
  textSize(fontSize);

  fill(219, 171, 103);
  noStroke();

  //from xin xin's video 
  helloArray = myFont.textToPoints("hello, width/2, height/2, fontSize");

}


function draw() {
  background(110, 175, 186);

  for (let i = 0; i < helloArray.length; i++){

    ellipse(helloArray[i].x, helloArray[i].y, 10)
  }
}