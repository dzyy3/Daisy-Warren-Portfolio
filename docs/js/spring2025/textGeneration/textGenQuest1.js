let canvas;

let myFont;
let textPoints;
let fontSize;
let myCustomPoints = [];

fontSize = 280;

function preload() {
  myFont = loadFont('../../js/spring2025/textGeneration/assets/retroItalics.otf');
}

function setup() {
  
  //text, x pos, y pos, font size, density of dots
  textPoints = 
    myFont.textToPoints( "Quest", 50, 250, fontSize, {sampleFactor: 0.2});
  
    for (let i = 0; i < textPoints.length; i++){
        myCustomPoints.push(new CustomPoint(textPoints[i].x, textPoints[i].y));
    }
  
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
    myCustomPoints[i].update();
    myCustomPoints[i].display();
  }
}

class CustomPoint{
    constructor(xPos, yPos) {
      this.r = random(50,255);
      this.g = random(50,255);
      this.b = random(150,255);
      
      this.a = 255;
      
      this.x = xPos;
      this.y = yPos;
      
      this.size = 5;
      
      this.timer = 0;
      this.blinkTime = random(0.5, 1);
      
      this.on = true
      
    }
    
    
  update() {
    // this.size++; 
    this.timer += deltaTime/1000;
    
    if (this.timer >= this.blinkTime){
      this.on = !this.on;
      this.timer = 0; //rests the timer so the countdown starts again
    }
  }
    
  display() {
    
    //telling the circles to do nothing if they aren't on
    if (this.on) {
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.size);
    }
  }
    
    
  }
  