let canvas;

let myFont;
let textPoints;
let fontSize;

fontSize = 180;

function preload() {
  myFont = loadFont('../../js/spring2025/textGeneration/assets/coolR.ttf');
}

function setup() {
  
  
//text, x pos, y pos, font size, density of dots
    textPoints2 = 
        myFont.textToPoints( "quasar", width/2 + 15, 200, fontSize, {sampleFactor: 2});

//O represents the actual quasar
    textPoints1 = 
        myFont.textToPoints( "o", 250, 200, 250, {sampleFactor: 9.68});
  
    canvas = createCanvas(600, 300);
    canvas.parent('textStudy-container');
    background(0, 0, 0);
    textSize(fontSize);

    fill(255, 255, 255);
    noStroke();

}

function draw() {
    background(20, 20, 20);


//idea from Xin's video
    for (let i = 0; i < textPoints1.length; i++){
        ellipse(textPoints1[i].x, textPoints1[i].y, 4, 4)

        if (textPoints1[i].x < textPoints2[i].x) {
            textPoints1[i].x++;
          }
      
          if (textPoints1[i].x > textPoints2[i].x) {
            textPoints1[i].x--;
          }
      
          if (textPoints1[i].y > textPoints2[i].y) {
            textPoints1[i].y--;
          }
      
          if (textPoints1[i].y < textPoints2[i].y) {
            textPoints1[i].y++;
          }
    }
}