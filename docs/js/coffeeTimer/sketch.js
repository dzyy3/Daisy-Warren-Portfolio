let b;
let g;
let skyColor;
let seconds=10; // cups of coffee for one day
let time=0;
let canvas;


let cup = []; //array of walls

function setup() {
  b = color(94,190,219);
  g = color(100,100,100); 
  skyColor = b;
  
  canvas = createCanvas(650, 600);
  canvas.parent('coffeeTimer-container');
  
  background(skyColor);
}

// function to update background & skyColor variable
// requires (r,g,b) variable as argument
function updateSky(col) {
  skyColor = col;
  background(skyColor);
}

function draw() {
  noStroke();

  // Coffee Cup Body
  fill(255);
  cup[0] = rect(180,200,250,200);
  cup[1] = arc(305,400,250,150,4*PI/2,2*PI/2);
  
  // Handle
  cup[2] = ellipse(420,300,170,200);
  
  //Top of cup
  cup[3] = arc(305,210,250,150, 2*PI/2,4*PI/2);
  
  //Coffee
  fill(135, 109, 69);
  cup[4] =  ellipse(305,210,215,115);
  
  // Inside of handle
  fill(skyColor);
  cup[5] = arc(430,300,110,140,3*PI/2,PI/2);
  
  // on every 60th frame, aka every second
  if (frameCount % 60 == 0 && seconds > -1) { 
    seconds --;
    if (seconds == 5) {
      updateSky(g);
    }
    if (seconds == -1) {
      seconds = 10;
      updateSky(b);
    }
  }
  
  
   /* for all the cup objects i can assign the 
  same commands */
  for (let i = 0; i< cup.length; i++) { 
    //how do i scale the cup to be smaller?
  }
    
    
  //time text
  fill(140, 75, 0);
  textSize(45);
  textAlign(CENTER, CENTER);
  text(seconds, 300, 200);  
}