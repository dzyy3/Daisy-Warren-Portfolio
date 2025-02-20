let canvas;

let myFont;
let textPoints;
let myCustomPoints = [];
let fontSize;

fontSize = 140;

function preload() {
  myFont = loadFont('../../js/spring2025/textGeneration/assets/futuristic.ttf');
}

function setup() {
  
  //text, x pos, y pos, font size, density of dots
  textPoints = 
    myFont.textToPoints( "Quasar", 20, 200, fontSize, {sampleFactor: 0.2});

    for (let i = 0; i < textPoints.length; i++){
        myCustomPoints.push(new CustomPoint(textPoints[i].x, textPoints[i].y));
    }
      
    for (let i = 0; i < myCustomPoints.length; i++){
        myCustomPoints [i].assignPartnerPoint();
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
      this.a = 200;
      
      this.x = xPos;
      this.y = yPos;
      
      this.size = 5;
      
      this.timer = 0;
      this.blinkTime = random(0.5, 1.5);
      
      this.on = true
      
      this.partnerPoint = null;
    }
    
    assignPartnerPoint(){
      this.partnerPoint = random(myCustomPoints); //picking a random one in the array
      
      
    }
    
  update() {
    // this.size++; makes the circles grow larger
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
      
      push();
      stroke(255, 255, 255, 20);
      line(this.x, this.y, this.partnerPoint.x, this.partnerPoint.y);
      pop();
    }
  }
}