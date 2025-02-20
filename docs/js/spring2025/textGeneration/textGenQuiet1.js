let myFont;
let myPoints = [];

fontSize = 290;

function preload() {
  myFont = loadFont('../../js/spring2025/textGeneration/assets/simpleCurvy.otf');
}

function setup() {
  
  canvas = createCanvas(600, 300);
  canvas.parent('textStudy-container');
  createPoints();
  
}

function draw() {
  
  background(0);
  
  for (let i = 0; i < myPoints.length; i++) {
    
    myPoints[i].update();
    myPoints[i].display();
    
  }
  
}

function createPoints() {
  let textPoints = 
    myFont.textToPoints
    ("Quiet", 40, 210, 200, {sampleFactor: 0.1});
  
  for(let i = 0; i < textPoints.length; i++) {
    myPoints.push(
      new CustomPoint(textPoints[i].x, textPoints[i].y)
    );
  }
}

class CustomPoint {
  
  constructor(xPos, yPos) {
    this.r = random(180,255);
    this.g = random(180,255);
    this.b = random(200,255);

    this.a = 255;

    this.x = xPos;
    this.y = yPos;
    
    this.size = random(3,15);
    
    this.isPastel = false;

    this.timer = 0;
    this.bubble = random(0.5, 1.5); //time between changing bubble size

    this.on = true;
    
    
    
  }
  
  update() {
    
    const d = dist(mouseX, mouseY, this.x, this.y);
    
    this.isPastel = d < 50;

    // this.size++; 
    this.timer += deltaTime/1000;
    
    if (this.timer >= this.bubble){
      this.on = !this.on;
      this.timer = 0; //rests the timer so the countdown starts again
    }
    
  }
  
  display() {
  
    //
    if (this.isPastel) {
      fill(this.r,this.g,this.b);
      circle(this.x, this.y, this.size);
    } else {
      stroke(this.r,this.g,this.b);
      noFill();
      circle(this.x, this.y, this.size);
    }

    //telling the circles to do nothing if they aren't on
    if (this.on) {
    stroke(this.r, this.g, this.b);
    circle(this.x, this.y, this.size);
    }
  }
    
  }
  