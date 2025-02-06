let canvas;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('friendlyCircles-container');
    //Making sure the lines aren't filled in
    noFill();
  }
  
  function draw() {
    background(100,100,145);
    
    // center the silly picture
    translate(width / 2, height / 2);
    
    //setting the amount of circles 
    let numCircles = 10;
    //setting how big the circles are going to be >_<
    let maxRadius = 300;
  
    //sets the number of times until it does the same thing again
    for (let i = 0; i < numCircles; i++) {
      //this is for how large the circles are based on their radius
      let radius = map(i, 0, numCircles, 30, maxRadius);
      
      //Change color for the circle lines
      stroke(120,130,10)
      
      /* Scale the circles over time for the illusion
      slowing down the frame count :p & offset for circles
      the sin is for smooth repeating pattern
      circle in center
      */
      let scaleFactor = 1 + 0.1 * sin(frameCount * 0.05 + i);
      ellipse(0, 0, radius * scaleFactor, radius * scaleFactor);
    }
    
    
    let numCircles2 = 14;
    let maxRadius2 = 500;
  
    for (let i = 0; i < numCircles2; i++) {
      let radius = map(i, 0, numCircles2, 30, maxRadius2);
      
      stroke(255)
      
      let scaleFactor = 1 + 0.1 * sin(frameCount * 0.05 + i);
      ellipse(0, 0, radius * scaleFactor, radius * scaleFactor);
    }
    
    
    let numCircles3 = 5;
    let maxRadius3 = 550;
  
    for (let i = 0; i < numCircles3; i++) {
      let radius = map(i, 0, numCircles3, 30, maxRadius3);
      
      stroke(0);
   
      let scaleFactor = 1 + 0.1 * sin(frameCount * 0.05 + i);
      ellipse(0, 0, radius * scaleFactor, radius * scaleFactor);
    }  
    
    let numCircles4 = 5;
    let maxRadius4 = 750;
  
    for (let i = 0; i < numCircles4; i++) {
      let radius = map(i, 0, numCircles4, 30, maxRadius4);
      
      stroke(50, 10, 50);
      
      
      let scaleFactor = 1 + 0.1 * sin(frameCount * 0.05 + i);
      ellipse(0, 0, radius * scaleFactor, radius * scaleFactor);
    } 
    
    stroke(0);
    let x = 10;
    rectMode(CENTER);
    rect(0,0,x,x);
    
    scaleFactor = 10;
    rect(0, 0, x * scaleFactor, x * scaleFactor);
  }