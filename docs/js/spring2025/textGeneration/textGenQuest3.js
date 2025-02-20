let canvas;

let myFont;
let textPoints;
let fontSize;
let myCustomPoints = [];

fontSize = 180;

//bringing x into the actual sketch
let myX;

function preload() {
  myFont = loadFont('../../js/spring2025/textGeneration/assets/70s.ttf');
}

function setup() {
  
  //text, x pos, y pos, font size, density of dots
  textPoints = 
    myFont.textToPoints( "Quest", 50, 200, fontSize, {sampleFactor: 0.2});
  
    for (let i = 0; i < textPoints.length; i++){
        myCustomPoints.push(new CustomPoint(textPoints[i].x, textPoints[i].y));
    }
  
  canvas = createCanvas(600, 300);
  canvas.parent('textStudy-container');
  background(0, 0, 0);
  textSize(fontSize);

  //naming X myX and creating a new variable 
  myX = new X();

  fill(255, 255, 255);
  noStroke();

}


function draw() {
  background(20, 20, 20);

  for (let i = 0; i < textPoints.length; i++) {
    const xPos = textPoints[i].x;
    const yPos = textPoints[i].y;
    const distance = dist(xPos, yPos, mouseX, mouseY);

    // Skip drawing the dot if the mouse is close
    if (distance < 20) {
        continue;
    }

    //large circle :0 
    let pointSize = map(distance, 50, 200, 5, 0, true);
    
    ellipse(xPos, yPos, pointSize);
    }

    //calling the X
    myX.update();
    myX.display();

}

class CustomPoint {
    constructor(xPos, yPos) {
      this.a = 255;
      
      this.x = xPos;
      this.y = yPos;
      
      this.size = 4;
      
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
    circle(this.x, this.y, this.size);
    }
  }

}


//class for x (this defines the characteristics for x)
class X {

  //you can have multiple this.x & this.y as long as they are in differnet classes
  constructor() {
    this.x = random(100, 500);
    this.y = random (100, 200);

    this.isVisible = false;
  }

  update() {

    //this makes it visible when you are near it
    let distance = dist(mouseX, mouseY, this.x, this.y);

    if (distance <= 10) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }

  }
//without this the x wont display when called upon
  display() {

    //! means not visible
    if (!this.isVisible) return;

    push();
    textSize(30);
    fill(255, 0, 0);
    //need this to center on the mouse
    textAlign(CENTER, CENTER);
    text("X", this.x, this.y);
    pop();
  }

}