class Player {
    constructor(posX, posY) {
        this.spritesheet_fly = new Image();
        this.spritesheet_fly.src = "sprites/plane/Fly/spritesheet.png";
        this.spritesheet_idle = new Image();
        this.spritesheet_idle.src = "sprites/plane/Fly/spritesheet.png";

            this.x = posX;
            this.y = posY;
            this.imageWidth = 225
            this.imageHeight = 151

            this.gameFrame = 0;
            this.frameSpeed = 2;

            this.movement = {
                LEFT : false,
                RIGHT : false,
                UP : false,
                DOWN : false,
            }

            this.keyCodes = {
                UP : "ArrowUp",
                LEFT : "ArrowLeft",
                RIGHT : "ArrowRight",
                DOWN : "ArrowDown",
                FLYUP : "w",
                FLYLEFT : "a",
                FLYRIGHT : "d",
                FLYDOWN : "s",
            }

            this.actions = {
                'fly' : {
                    'spritesheet' : this.spritesheet_fly,
                    'frame_counter' : 0,
                    'spriteWidth' : 444,
                    'speed' : 5,
                    'frame_limit' : 20,
                },
                
                'idle' : {
                    'spritesheet' : this.spritesheet_idle,
                    'frame_counter' : 0,
                    'spriteWidth' : 444,
                    'frame_limit' : 20
                },
            }
        }

        move(keyType, key) {
            //Hold
            if (keyType == "keydown") {
                if (key == this.keyCodes.RIGHT) {
                    this.movement.RIGHT = true;
                }

                if (key == this.keyCodes.LEFT) {
                    this.movement.LEFT = true;
                }
    
                if (key == this.keyCodes.UP) {
                    this.movement.UP = true;
                }

                if (key == this.keyCodes.DOWN) {
                    this.movement.DOWN = true;
                }

                if (key == this.keyCodes.FLYRIGHT) {
                    this.movement.RIGHT = true;
                }

                if (key == this.keyCodes.FLYLEFT) {
                    this.movement.LEFT = true;
                }
    
                if (key == this.keyCodes.FLYUP) {
                    this.movement.UP = true;
                }

                if (key == this.keyCodes.FLYDOWN) {
                    this.movement.DOWN = true;
                }
    
            }

            //Release
            if (keyType == "keyup") {
                if (key == this.keyCodes.RIGHT) {
                    this.movement.RIGHT = false;
                }

                if (key == this.keyCodes.LEFT) {
                    this.movement.LEFT = false;
                }
    
                if (key == this.keyCodes.UP) {
                    this.movement.UP = false;
                }

                if (key == this.keyCodes.DOWN) {
                    this.movement.DOWN = false;
                }

                if (key == this.keyCodes.FLYRIGHT) {
                    this.movement.RIGHT = false;
                }

                if (key == this.keyCodes.FLYLEFT) {
                    this.movement.LEFT = false;
                }
    
                if (key == this.keyCodes.FLYUP) {
                    this.movement.UP = false;
                }

                if (key == this.keyCodes.FLYDOWN) {
                    this.movement.DOWN = false;
                }
            }
        }

          fly(){
          return this.movement.RIGHT;
          }
          
           update(action) {
           
                    if (this.movement.RIGHT && this.x < (canvas.width-222)) {
                        this.x = this.x + this.actions.fly.speed
                    }
        
                    else if (this.movement.LEFT && this.x > (canvas.width-1441)) {
                        this.x = this.x - this.actions['fly'].speed
                    }

                    if (this.movement.UP && this.y > (canvas.height-789)) {
                        this.y = this.y - this.actions.fly.speed
                    }
        
                    else if (this.movement.DOWN && this.y < (canvas.height-142)) {
                        this.y = this.y + this.actions['fly'].speed
                    }
            
                // Animations
                if (action == "fly") {
                    this.actions[action].frame_counter++;
        
                    if (this.actions[action].frame_counter > 1) {
                        this.actions[action].frame_counter = 0;
                    }
                }
        
                else if (action == "idle") {
                    this.actions[action].frame_counter++;
        
                    if (this.actions[action].frame_counter > 1) {
                        this.actions[action].frame_counter = 0;
                    }
                }
            }

        draw(action) {    
            
            context.drawImage(
                this.actions[action].spritesheet,
                this.actions[action].frame_counter*this.actions[action].spriteWidth,
                0,
                this.actions[action].spriteWidth,
                this.actions[action].spritesheet.height,
                this.x,
                this.y,
                this.imageWidth,
                this.imageHeight

            )

            
        }
    }
    