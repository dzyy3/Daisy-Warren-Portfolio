let canvas;
let myFont;
let textPoints1 = []; // This will start from (0,0)
let textPoints2;
let fontSize = 180;

function preload() {
  myFont = loadFont('../../js/spring2025/textGeneration/assets/70s.ttf');
}

function setup() {
  canvas = createCanvas(600, 300);
  canvas.parent('textStudy-container');
  background(0);

  textSize(fontSize);
  fill(255);
  stroke(255);

  // text font
  textPoints2 = myFont.textToPoints("Quasar", 20, 200, fontSize, { sampleFactor: 0.2 });

  // Initialize starting points at (0,0)
 for (let i = 0; i < textPoints2.length; i++) {
    textPoints1.push({ x: 0, y: 0 }); // All points start at (0,0)
  }
}

function draw() {
  background(20, 20, 20);

  for (let i = 0; i < textPoints1.length; i++) {
    // Draw the morphing lines
    stroke(255);
    line(textPoints1[i].x, textPoints1[i].y, textPoints2[i].x, textPoints2[i].y);

    // Move points towards target gradually
    let stepSize = 0.05; //smoothness

    if (textPoints1[i].x < textPoints2[i].x) {
        textPoints1[i].x += stepSize * (textPoints2[i].x - textPoints1[i].x);
    } else if (textPoints1[i].x > textPoints2[i].x) {
        textPoints1[i].x -= stepSize * (textPoints1[i].x - textPoints2[i].x);
    }

    if (textPoints1[i].y < textPoints2[i].y) {
        textPoints1[i].y += stepSize * (textPoints2[i].y - textPoints1[i].y);
    } else if (textPoints1[i].y > textPoints2[i].y) {
        textPoints1[i].y -= stepSize * (textPoints1[i].y - textPoints2[i].y);
    }

    // Draw final ellipses
    fill(255);
    noStroke();
    ellipse(textPoints2[i].x, textPoints2[i].y, 4);
  }
}
