function stage0() {
    // let buttonStart;
    // let buttonInstructions;
    // let buttonCredits;
    // let showIntructions = false;
    // let showCredits = false;
    // let instructionsTimeout;
    // let creditsTimeout;
    if(mouseIsPressed == true){
      stage = 1;
    }
    
    background(150, 230, 240);
    
    //title
    textFont(font);
    fill(125,150,255);
    stroke(0);
    strokeWeight(10);
    textSize(50);
    text('Daisy the Raccoon', width/2, 150);
    textSize(25);
    fill(255);
    text('BY: Daisy Warren, Raccon Sprite: SeethingSwarm', width/2, 200);
    
    //instructions
    textSize(30);
    text('How to Play:', width/2, 250);
    text('Use A & D to move left & right', width/2, 275);
    text('W to jump', width/2, 300);
    text('Shift to sprint', width/2, 325);
    
    //start button
    fill(100,100,255);
    strokeWeight(20);
    textSize(60);
    text('START', width/2, 430);
  
  
    
  //   function setup(){
  //     //Create buttons
  //     buttonStart = createButton('Start');
  //     buttonStart.position(width / 2 - 40, 200);
  //     buttonStart.mousePressed(startGame);
  
  //     buttonInstructions = createButton('Instructions');
  //     buttonInstructions.position(width / 2 - 60, 275);
  //     buttonInstructions.mousePressed(showInstructionsBox);
  
  //     buttonCredits = createButton('Credits');
  //     buttonCredits.position(width / 2 - 40, 350);
  //     buttonCredits.mousePressed(showCreditsBox);
  //   }
    
  //   function draw(){
  //     //Display Instructions
  //     if (showInstructions) {
  //       drawBox('WASD for movement! Shift to run.');
  //     }
      
  //     //Display Credits
  //     if (showCredits) {
  //       drawBox('Game & art by Daisy Warren! Raccoon sprites by SeethingSwarm');
  //     }
      
  //     function drawBox(content) {
  //       fill(255);
  //       stroke(0);
  //       rect(width / 2 - 150, height / 2 - 100, 300, 200, 10);
  //       fill(0);
  //       noStroke();
  //       textSize(16);
  //       text(content, width / 2, height / 2);
  //     }
  
  //     // Button Functions
  //     function startGame() {
  //       console.log('Stage 1 started!');
  //       // Transition to Stage 1 (replace with your actual stage logic)
  //     }
  
  //     function showInstructionsBox() {
  //       showInstructions = true;
  //       clearTimeout(instructionsTimeout);
  //       instructionsTimeout = setTimeout(() => {
  //         showInstructions = false;
  //       }, 5000);
  //     }
  
  //     function showCreditsBox() {
  //       showCredits = true;
  //       clearTimeout(creditsTimeout);
  //       creditsTimeout = setTimeout(() => {
  //         showCredits = false;
  //       }, 5000);
  //   }
  //   }
    
    
  }// close stage0