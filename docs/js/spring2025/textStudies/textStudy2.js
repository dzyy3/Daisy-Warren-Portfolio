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
    textPoints =  myFont.textToPoints( "hello", 25, 150, fontSize, {sampleFactor: 0.09});
  
  canvas = createCanvas(400, 200);
  canvas.parent('textStudy-container');
  textSize(fontSize);

  noStroke();


}


function draw() {
  background(110, 175, 186);

  for (let i = 0; i < textPoints.length; i++){
    // fill(219, 171, 103, 180)

    //I had to reference the internet for the code below
    let textGradient = map(textPoints[i].x, 200, 100, 120, 180);

    fill(219, 171, 103, textGradient);

ellipse(textPoints[i].x, textPoints[i].y, 10);
}


//I don't understand anything! I'm struggling so bad rn. I feel like last semester didn't teach me anything I have no idea what maps are and I really struggle with everythint that has to do with i++. I feel like a coding fraud T_T 
}