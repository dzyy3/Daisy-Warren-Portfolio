

function stage1() {
    stageWidth = 7200; // final x coord of stage
  
    //background for game
    background(0,0,0,255);
    push();
    noStroke();
    texture(bg1);
    translate(stageWidth/2, height/2, 0);
    // add 41 pixels to size of background plane to account for 3d perspective 
    plane(stageWidth, height);
    pop();
    
    //grass
    /*
    noStroke();
    fill(100,200,70);
    rect(stageWidth/2,450, stageWidth,100);
    */
    
    //border
    /*
    noFill();
    stroke(255);
    strokeWeight(12);
    rect(stageWidth/2, height/2, stageWidth, height);
    */
    
    // Draw hats on platforms
    image(img1, 500, 320, 40, 40); // Beanie on platform 1
    image(img2, 2100, 190, 40, 40); // Hat on platform 2
    image(img3, 3600, 310, 40, 40); // Hat on platform 3
    image(img4, 4200, 290, 40, 40); // Hat on platform 4
    image(img5, 4500, 300, 40, 40); // Hat on platform 5
    image(img6, 5550, 230, 40, 40); // Hat on platform 6
    image(img7, 6500, 250, 40, 40); // Hat on platform 7
    
    drawPlatforms();
    player.draw(); // player sprite
    player.update(); // player movement
    
    if (player.xPos >= 6800) {
      player.xPos = width/2;
      player.yPos = height/2;
      cam.setPosition(width/2, height/2, 800);
      stage = 2;
    }
  }
  
  
    
  
  let platforms = [
    //stage 1
    {x: 500, y: 380, width: 220, height: 40},
    {x: 800, y: 300, width: 150, height: 40},
    {x: 1200, y: 240, width: 100, height: 40},
    {x: 1550, y: 220, width: 200, height: 40},
    {x: 1850, y: 210, width: 100, height: 40},
    {x: 2100, y: 250, width: 100, height: 40},
    {x: 2350, y: 300, width: 100, height: 40},
    
    //stage 2
    {x: 3000, y: 380, width: 100, height: 40},
    {x: 3200, y: 280, width: 50, height: 40},
    {x: 3400, y: 180, width: 50, height: 40},
    {x: 3600, y: 380, width: 50, height: 40},
    {x: 3800, y: 300, width: 100, height: 40},
    {x: 4200, y: 350, width: 100, height: 40},
    {x: 4500, y: 380, width: 100, height: 40},
    
    //stage 3
    {x: 5300, y: 380, width: 20, height: 40},
    {x: 5550, y: 300, width: 50, height: 40},
    {x: 5700, y: 240, width: 20, height: 40},
    {x: 6100, y: 220, width: 100, height: 40},
    {x: 6500, y: 300, width: 50, height: 40},
    
    // checkpoints
    {x: 2700, y: 300, width: 100, height: 40},
    {x: 4850, y: 300, width: 100, height: 40}
  ];
  
  function drawPlatforms() {
    stroke(255,209,220);
    strokeWeight (4);
    fill(255);
    
    // iterate through all but last 2 platforms
    for (let i=0; i < platforms.length-2; i++) {
        rect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
    }
    
    stroke(150,255,150);
    strokeWeight (4);
    fill(255);
    
    // iterate through last 2 platforms
    for (let i=platforms.length-1; i > platforms.length-3; i--) {
        rect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
    }
  }