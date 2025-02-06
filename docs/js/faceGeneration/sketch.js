let canvas;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('faceGeneration-container');
    bgColor = color(255, 255, 255);
    background(bgColor);
    angleMode(DEGREES);
  }
  
  function draw() {
    noStroke();
    
      
  function keyPressed() {
    // Change background color based on key pressed
    bgColor = color(random(255), random(255), random(255));
    background(bgColor);
  }
    
    push(); 
    let w = mouseX/2;
    let h = mouseY/2;
    
    //face
    fill(255);
    ellipse(width/2, height/2, w, h);
  
    //features
    fill(0);
    circle(width/2 - w/4, height/2 - h/3, w/4);
    circle(width/2 + w/4, height/2 - h/3, w/4);
    
    fill(255,127,126);
    circle(width/2 -5, height/2 - (h/3)/1.5, w/4);
    
    fill(255,0,0);
    rect(width/2, height/2, w/6, h/6)
    pop();
    
    function mousePressed() {
    
  //   else if (mouseX == roof && mouseY == roof){
  //     fill (255, 255, 0)
      
    
    
    // else {
    let dotColor = color(random(255), random(255), random(255));
    let size = random(30, 80);
    
    // Draw a polka dot
    fill(dotColor);
    noStroke();
    rect(mouseX, mouseY, size);
    // }
  }
    
  }
  