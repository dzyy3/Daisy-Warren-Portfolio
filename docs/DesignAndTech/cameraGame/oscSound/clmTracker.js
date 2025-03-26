/*
**NOTE TO SELF: use capture callback function to set capture size (required) and initialize tracker
Lets…
Use clmtrackr to:
Track our face
Draw facial features with p5.js shape primitives
Make the shape that represents our mouth grow or shrink based on how open our mouth is.

*/

let capture;
let tracker;
let positions;
let hasInitialized = false;
let backgroundImg;
let button;
let book;
let canvas;
const osc = new p5.Oscillator();
const osc2 = new p5.Oscillator();
const osc3 = new p5.Oscillator();
const osc4 = new p5.Oscillator();
let showBook = false; //book doesn't show upon loading
let p1;
let bgx = 0;

function preload() {
  backgroundImg = loadImage('../cameraGame/oscSound/images/background.png')
  button = loadImage('../cameraGame/oscSound/images/button.png')
  book = loadImage('../cameraGame/oscSound/images/book.png')
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.parent("cameraGame-container");
  capture = createCapture(VIDEO, {flipped: true}, onCaptureCreated);
  capture.hide();
  tracker = new clm.tracker();
  tracker.init();
  osc.start();
  osc2.start();
  osc3.start();
  osc4.start();

  //setting up the player
  p1 = new Player("OoOO", 20, 68, 30); 

}

function onCaptureCreated() {

  capture.size(capture.width, capture.height);
  console.log(capture.width);
  tracker.start(capture.elt);
  hasInitialized = !showBook;
}

function keyPressed() {
  //open book when user presses x
  if (key === 'x') {
    showBook = !showBook;
    }
}

function draw() {

  if (!hasInitialized) return;
  background(0);
  positions = tracker.getCurrentPosition();

  image(capture, 0, 0);
  
  osc.freq(0);
  osc2.freq(0);
  osc3.freq(0);
  osc4.freq(0);


  if (!positions) return;
  playSound();

  //the game screen at the top of the page
  fill(100,20,20);
  noStroke();
  //by using capture.width I'm able to make the game only appear in reaction to the person's face entering the screen 
  // rect(0, 0, capture.width, 100); //placeholder

  //displaying the background image
  push();
  backgroundImg.resize(capture.width * 2, 100);
  image(backgroundImg, bgx, 0);
  image(backgroundImg, bgx + backgroundImg.width, 0); // Draw a second instance for looping
  pop();

  p1.display();

  // rect(20, 120, capture.width/20, capture.width/20); //placeholder

  push();
  button.resize(capture.width/20, capture.width/20);
  image(button, 20, 110);
  pop();

  //show the book if x is pressed (showBook = true)
  if(showBook){
    push();
    // book.resize(capture.width-100, capture.height-100)
    image(book, 40, 70);
    
    // filter(GRAY);
    pop();
  }
}

function playSound() {
  //nose
  const nosexPos = capture.width - positions[62][0];
  const noseyPos = positions[62][1];


  //mouth
  const topxPos = capture.width - positions[60][0];
  const topyPos = positions[60][1];

  const botxPos = capture.width - positions[57][0];
  const botyPos = positions[57][1];

const distance = dist(topxPos, topyPos, botxPos, botyPos);

const mappedSize = map(distance, 0, 16, 5, 40);

if (distance > 10) {
  osc.freq(random(200,500));
  p1.x += 1;
  console.log(p1.x);
  bgx -= 1; // Move background left

  // console.log(p1.x); to test how far the player must go

  if (p1.x > 660) {
    p1.x = 68;
    bgx = 0;
  }

  if (p1.x > 180 && p1.x < 260) {
    osc2.freq(random(600,800));

    push();
    fill(74, 255, 54);
    stroke(0);
    strokeWeight(3);
    textSize(20);
    text('⏙⍲⍑⍧ℍ ⟟⍑ ⌦⌰⟄⟄⍦', 80, 140);
    pop();
    // osc3.freq(random(800,900));
  }

  if (p1.x > 500 && p1.x < 560) {
    osc3.freq(random(100,900));

    push();
    fill(239, 190, 255);
    stroke(0);
    strokeWeight(3);
    textSize(20);
    text('⍧⍦⍲ ⎾𝟠☈', 400, 140);
    pop();
  }
  } 
}

//**pseudo code
//class notebook(){
// dispaly notebook starts as false
// click z to display image of notebook
// display notebook until z is pressed again
//} 
// class language(){
// if x is pressed (lip pattern = true)
// if x is not pressed (do nothing) or if x is not pressed then lip pattern = false
// if lip pattern = true then determine which lip pattern is true
// 
// if lip pattern 1 = O.O(display('hello', 200, 175))
// if lip pattern 2 = if(distance > 10 for more than 5 seconds) {display('Goodbye')} 
// }
// class movement() {
// if lip pattern 1, walk from the left to middle of screen and then stop and then cut to alien talking to you in alien language. Once done, cut back to you in middle of screen
// if lip pattern 2, walk to the right off the screen 
// while (scene 2 or speak) user input = false
// } */
