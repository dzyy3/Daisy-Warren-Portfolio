let canvas;

//PLEASE CLICK THE TIMES!

//Creating the times for each day 
var Monday = ["6:19pm", "10:26pm", "10:34pm", "12:24am", "1:24am"];
var Tuesday = ["12:19pm", "7:33pm","10:26pm", "11:05pm"];
var Wednesday = ["12:45pm", "4:59pm", "9:12pm", "10:51pm"];
var Thursday = ["6:56pm", "10:38pm"];
var Friday = ["12:59pm", "1:26pm", "1:45pm", "3:32pm", "10:38pm", "11:34pm"];
var Saturday = ["6:35pm", "2:48am"];
var Sunday = ["12:34pm", "1:02pm", "10:24pm"];
var Text = [
  "how was your day?", "did you finish your hw?", "How about now?", "just one match pleaseee", 
  "One more match?", "I just finished class!", "Want to watch something?", "How ya doin?", 
  "Ready to play games?", "Ready for your exam?", "Are you done with classes?", "Are you free?", 
  "Can you read my essay?", "What time is it for you?", "Did you eat?", "What should I get for lunch?", 
  "Wait, I'll call you back", "I have to go into work later", "I'll be free around 10", "Hola!", 
  "I guess I don't have class tomorrow.", "Oh man, I woke up late.", "Goodnight", 
  "I can't believe it's almost Monday", "Alright, let's get it done!", "Ready for the week?"
];

let img;

// Default stroke color for ellipse and triangle
let colors;
let currentStrokeColor;

// Buttons
let buttonWidth = 50;
let buttonHeight = 20;

// Variable to store the index of the selected text
let selectedTextIndex = -1;

// Load the image.
function preload() {
    img = loadImage('Phone.png');
}

function setup() {
  canvas = createCanvas(450, 400);
  canvas.parent('timesICalled-container')
  background(180, 240, 255);
  
  // Colors for each day
  colors = [
    color(255, 120, 120, 200), color(255, 0, 0, 200), color(0, 255, 0, 200),
    color(0, 0, 255, 200), color(0, 255, 255, 200), color(255, 255, 0, 200), color(255, 0, 255, 200)
  ];
  
  currentStrokeColor = color(255);
}

function draw() {
  background(180, 240, 255);
  image(img, 0, 250, 130, 130);
  
  // Draw the text bubble
  stroke(currentStrokeColor);
  fill(255);
  triangle(200, 350, 125, 350, 300, 300);
  ellipse(250, 300, 200, 120); 
  
  //to prevent a stroke inside the text bubble
  noStroke();
  // fill(255);
  triangle(200, 350, 125, 350, 300, 300);
  
  // Display selected text in the text bubble
  stroke(currentStrokeColor);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(12);
  if (selectedTextIndex >= 0 && selectedTextIndex < Text.length) {
    text(Text[selectedTextIndex], 250, 300);
  }
  
  displayButtons();
}

function displayButtons() {
  let days = [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday];
  let xStart = 20;

  for (let day = 0; day < days.length; day++) {
    let times = days[day];
    let x = xStart + day * 60;

    for (let i = 0; i < times.length; i++) {
      let y = (i * 30) + 40; 

      // Creating the button areas
      noStroke();
      fill(colors[day]);
      rect(x, y, buttonWidth, buttonHeight, 5);

      // Draw text
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(12);
      text(times[i], x + buttonWidth / 2, y + buttonHeight / 2);
    }
  }
}

function mousePressed() {
  let days = [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday];
  let xStart = 20;

  // setting index in the Text array for each button
  let textIndex = 0;

  for (let day = 0; day < days.length; day++) {
    let times = days[day];
    let x = xStart + day * 60;

    for (let i = 0; i < times.length; i++) {
      let y = (i * 30) + 40;

      // Check if mouse is within button bounds
      if (mouseX > x && mouseX < x + buttonWidth && mouseY > y && mouseY < y + buttonHeight) {
        console.log(`${times[i]} on day ${day}`);
        
        // Set stroke color to the day's color when clicked
        currentStrokeColor = colors[day];
        
        // Update the selected text index to display the corresponding text
        selectedTextIndex = textIndex;
      }
      textIndex++; // Increment to match the corresponding text in Text array
    } 
  }
}