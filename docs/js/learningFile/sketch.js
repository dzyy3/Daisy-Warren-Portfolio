let canvas;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('learningFile-container');
  
    background(200);
  
    let img = createImage(400, 400);
    img.loadPixels();
  
    //Creates gradient for background
    for (let x = 0; x < img.width; x++) {
      for (let y = 0; y < img.height; y++) {
        let a = map(y, 0, img.width, 0, 255);
        let c = color(84, 131, 156, a);
        img.set(x, y, c);
      }
    }
    img.updatePixels();
    image(img, 0, 20);
  
    describe(
      "A square with a horizontal color gradient that transitions from gray to blue."
    );
  }
  
  function draw() {
    //background(84, 131, 156);
    
    let w = color(255);
    let b = color(240, 240, 240);
    let g = color(148, 148, 148);
    let bl = color(0, 0, 0);
  
    rectMode(CENTER);
    noStroke();
    fill(w);
    rect(200, 250, 150, 200);
    
    ellipseMode(CENTER);
    noStroke();
    fill(w);
    ellipse(200,350,150,50);
    
    ellipseMode(CENTER);
    noStroke();
    fill(b);
    ellipse(200, 150, 150, 50);
    
    ellipseMode(CENTER);
    noStroke();
    fill(g);
    ellipse(200, 150, 125, 35);
    
    noStroke();
    fill(bl);
    quad(200, 167, 220, 166, 230, 165, 245, 162);
    quad(245, 162, 243, 150, 245, 140, 220, 166);
    quad(245, 140, 250, 130, 260, 130, 220, 130);
    quad(220, 130, 280, 130, 290, 135, 270, 120);
    quad(200, 167, 200, 160, 205, 150, 220, 166);
    quad(205, 150, 220, 166, 245, 140, 220, 130);
    // quad(245, 140, 255, 130, 235, 100)
  }
  