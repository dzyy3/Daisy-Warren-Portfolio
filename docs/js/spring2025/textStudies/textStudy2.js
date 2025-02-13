let canvas;

let myFont;
let textPoints;

let fallingCircles = [];

function preload() {
  myFont = loadFont('../../js/spring2025/textStudies/assets/comicSans.ttf');
}

function setup() {
    
  
  // create the array of points to reference in the future
  textPoints = 
    myFont.textToPoints(
    "MOO", 
    20, 
    140, 
    140,
    {sampleFactor: 0.2}
  );
  
  
  canvas = createCanvas(400, 400);
  canvas.parent('textStudy-container');
  background(250, 150, 0);
  
  fill(100, 0, 0);
  noStroke();
  
  
  // function to create and store circles in an array
  createCircles();
  
}

function draw() {
  
  background(250, 150, 0);
  
  // update and display the circles in the fallingCircles array
  for (let i = 0; i < fallingCircles.length; i++) {
    
    fallingCircles[i].update();
    fallingCircles[i].display();
    
  }
    
}

function createCircles() {
  
  // for each point created by textToPoints(), create and store a new FallingCircle object
  for (let i = 0; i < textPoints.length; i++) {
    fallingCircles.push(
      new FallingCircle(textPoints[i].x, textPoints[i].y)
    );
  }
}


// Create a class to define what it means to be a falling circle
class FallingCircle {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    
    this.size = 5;
    
    // when a circle is created, pick a random time for it to start falling
    this.timeToFall = random(5, 10);
    
    // create a timer to track how much time has elapsed since the object's creation
    this.timer = 0;
  }
  
  
  // method to be called to allow for updates in a falling circle's data
  update() {
    
    // increment the timer by the amount of time elapsed
    this.timer += deltaTime / 1000;
    
    // make the circle fall when enough time has passed
    if (this.timer > this.timeToFall) {
      this.y += deltaTime / 10;
    }
  }
  
  // method to be called to render a falling circle on screen
  display() {
    circle(this.x, this.y, this.size);
  }
}