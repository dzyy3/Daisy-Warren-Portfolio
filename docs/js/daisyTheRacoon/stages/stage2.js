function stage2() {
  
    background(150, 230, 240);
    
    //title
    textFont(font);
    fill(150,255,175);
    stroke(0);
    strokeWeight(10);
    textSize(50);
    text('The End', width/2, 150);
    
    platforms = []; // clear platforms
    
    player.draw(); // player sprite
    //player.update(); // player movement
    
  }// close stage 2