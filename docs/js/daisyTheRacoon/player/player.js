class Player {
    constructor(xPos, yPos) {
      // position properties
      this.xPos = xPos;
      this.yPos = yPos;
      
      // movement properties
      this.maxWalkSpeed = 4.5;
      this.maxRunSpeed = 8;
      this.acceleration = 0.9;
      this.friction = 0.87;
      this.xVelocity = 0;
      this.direction = "right";
      this.isWalking = false;
      this.isRunning = false;
      
      // gravity / jump properties
      this.isJumping = false;
      this.jumpVelocity = -12; // initial jump speed
      this.gravity = 0.5;
      this.yVelocity = 0; // vertical speed of gravity and jumps
      
      // class accessable gif variables
      this.idleGif = Player.idleGif;
      this.walkGif = Player.walkGif;
      this.runGif = Player.runGif;
      // this.attackGif = Player.attackGif;
      
      // sprite properties
      this.imgScale = Player.imgScale;
      this.imgX = Player.imgX;
      this.imgY = Player.imgY;
      
      this.checkpoint = 0;
  
      // world floor position
      this.floor = 470-this.imgY;
    }
    
    // preload all animation gifs
    static preload() {  
      // mutiply original gif dimensions by image scale
      Player.imgScale = 2;
      Player.imgX = 33 * Player.imgScale;
      Player.imgY = 19 * Player.imgScale;
      
      // SPRITES MADE BY: SeethingSwarm
      Player.idleGif = loadImage("../../js/daisyTheRacoon/spritesheets/idle.gif", img => {img.resize(Player.imgX, 0);});
      Player.walkGif = loadImage("../../js/daisyTheRacoon/spritesheets/walk.gif", img => {img.resize(Player.imgX, 0);});
      Player.runGif = loadImage("../../js/daisyTheRacoon/spritesheets/run.gif", img => {img.resize(Player.imgX, 0);});
      // Player.hurtGif = loadImage("spritesheets/hurt.gif", img => {img.resize(Player.imgX, 0);});
      // Player.dieGif = loadImage("spritesheets/die.gif", img => {img.resize(Player.imgX, 0);});
      // Player.attackGif = loadImage("spritesheets/attack.gif", img => {img.resize(Player.imgX, 0);});
  
    }
    
    // is called every frame, moves the character
    update() { 
      // camera follows player as long as player is not near the borders
      if (this.xPos < stageWidth-width/2 && this.xPos > width/2)  
        cam.move(this.xVelocity,0,0);
      
      
      // shift and movement key held
      if ((keyIsDown(SHIFT) && keyIsDown(65) || (keyIsDown(SHIFT) && keyIsDown(68)))) {
        this.isRunning = true;
        this.isWalking = false;
      }
      
      // shift not held with either movement key
      if (!(keyIsDown(SHIFT) && keyIsDown(65) || (keyIsDown(SHIFT) && keyIsDown(68)))) {
        this.isRunning = false;
      }
      
      // W key
      if (keyIsDown(87) && !this.isJumping)
        this.jump();  
  
      // S key
      if (keyIsDown(83)) 
        this.crouch();
      
      // A key
      if (keyIsDown(65)) {
        if (!this.isRunning) 
            this.isWalking = true;
        
        this.xVelocity -= this.acceleration;
        this.direction = 'left';
      }
      
      // D key
      if (keyIsDown(68)) {
        if (!this.isRunning) 
            this.isWalking = true;
        
        this.xVelocity += this.acceleration;    
        this.direction = 'right';    
      }
      
      if (!keyIsDown(65) && !keyIsDown(68)) {
        this.isWalking = false;
        this.isRunning = false;
        this.xVelocity *= this.friction; // gradually decelerate when not moving
      }
      
      // move position with calculated velocity
      if (this.isRunning) {
        this.xVelocity = constrain(this.xVelocity, -this.maxRunSpeed, 
        this.maxRunSpeed);
      }
      else if (this.isWalking && !this.isRunning) { 
      this.xVelocity = constrain(this.xVelocity, -this.maxWalkSpeed, 
        this.maxWalkSpeed);
      }
        
      this.xPos += this.xVelocity;
      
      // apply gravity every frame
      this.yVelocity += this.gravity;
      this.yPos += this.yVelocity;
        
      this.checkCollision();   
    }
    
    draw() {
      if(this.isWalking) {
        if (this.direction == "left") {
          scale(-1, 1);  // flip image horizontally
          image(this.walkGif, -this.xPos - this.imgX, this.yPos);
        }
        else {
          // right facing walk frames
          image(this.walkGif, this.xPos, this.yPos);
        }
      }
      
      else if (this.isRunning) {
        if (this.direction == "left") {
          if (this.isRunning)
          scale(-1, 1); 
          image(this.runGif, -this.xPos - this.imgX, this.yPos);
        }
        else {
          // right facing run frames
          image(this.runGif, this.xPos, this.yPos);
        }
      }
            
      // if not moving return to idle frame
      else {
          if (this.direction == "left") {
            scale(-1, 1);
            image(this.idleGif, -this.xPos - this.imgX, this.yPos);
          } 
          else {
            // right facing idle frames
            image(this.idleGif, this.xPos, this.yPos);
          }
        } 
    }
    
    jump() {
      this.isJumping = true;
      this.yVelocity = this.jumpVelocity;
    }
    
    crouch() {
      console.log("crouch");
    }
    
    checkCollision() {
      let onPlatform = false;
      
      // for each platform, apply these collision rules
      for (let i=0; i < platforms.length; i++) {
        
        // helps simplify since platform counts coordinates from the middle
        let platLeft = platforms[i].x - platforms[i].width / 2;
        let platRight = platforms[i].x + platforms[i].width / 2;
        let platTop = platforms[i].y - platforms[i].height / 2;
        let platBottom = platforms[i].y + platforms[i].height / 2;
        
        // conditions for collision when falling
        if (
          this.xPos + this.imgX > platLeft && //player right is past platform left
          this.xPos < platRight &&  // player left is before platform right
          this.yPos + this.imgY < platTop+1 && // player bottom above platform top
          this.yPos + this.imgY + this.yVelocity > platTop // player bottom
        ) {
          // if player is falling
          if (this.yVelocity > 0) {
            // place player on top of platform
            this.yPos = platTop - this.imgY;
            this.yVelocity = 0; // stop falling
            onPlatform = true;
           
            if (i == platforms.length-2 && player.checkpoint < 1) {
              player.checkpoint = 1;
              console.log("Checkpoint 1");
            }
            
            if (i == platforms.length-1 && player.checkpoint < 2) {
              player.checkpoint = 2;
              console.log("Checkpoint 2");
            }
          }
        }
        
        // check collision when hitting head from below platform
        if (
          this.xPos + this.imgX > platLeft &&
          this.xPos < platRight &&
          this.yPos >= platBottom  &&
          this.yPos + this.yVelocity <= platBottom 
        ) {
            // put head at bottom of platform
            this.yPos = platBottom;
            this.yVelocity = 0;
        }
        
        // horizontal platform collisions
        // if player is within vertical bounds of platform
        if (
          this.yPos + this.imgY > platTop && 
          this.yPos < platBottom
        ) {
          // left side collision
          if (
            this.xPos + this.imgX + this.xVelocity > platLeft && 
            this.xPos < platLeft
          ) {
              this.xPos = platLeft - this.imgX;
              this.xVelocity = 0;
          }
          
          // right side collision
          if (
            this.xPos + this.xVelocity < platRight && 
            this.xPos + this.imgX > platRight
          ) {
              this.xPos = platRight; 
              this.xVelocity = 0; 
          }
        }
      }
      
      // floor collision if no platforms stop the fall
      if (!onPlatform && this.yPos >= this.floor) {
        this.yPos = this.floor;
        this.yVelocity = 0;
        onPlatform = true;
        this.die();
      }
      
      this.isJumping = !onPlatform;
  
    }
    
    die() {
      let cp1 = platforms[platforms.length-2];
      let cp2 = platforms[platforms.length-1];
      
      if (this.checkpoint == 1) {
        this.xPos = cp1.x - this.imgX;
        this.yPos = cp1.y - cp1.height - this.imgY;
        cam.setPosition(cp1.x, height/2, 800);
        
      }
      else if (this.checkpoint == 2){
        this.xPos = cp2.x - this.imgX;
        this.yPos = cp2.y - cp2.height - this.imgY;
        cam.setPosition(cp2.x, height/2, 800);
  
      }
      else {
        this.xPos = width/2;
        this.yPos = height/2;
        cam.setPosition(width/2, height/2, 800);
  
      }
    }
  }