class Player {
    constructor(canvasW, canvasH, ctx, bulletController) {
        this.ctx = ctx

        this.canvasW = canvasW;
        this.canvasH = canvasH;

        this.x = canvasW/2;
        this.y = canvasH/2;       
        this.bulletController = bulletController;
        this.r = 15;

        this.sense = "";

         
    }

    shoot(){
        if(this.shootPressed){
            console.log("SHOOT");
            const speed = 4;
            const delay = 7;
            const bulletX = (this.x);
            const bulletY = (this.y);
            this.bulletController.shoot(bulletX,bulletY,speed,delay, this.sense);
        }
    }

    setControls() {
        document.addEventListener("keydown",this.keydown);
        document.addEventListener("keyup",this.keyup);
        document.addEventListener('mousemove', (e) => {
                this.x = e.clientX;
                this.y = e.clientY;
                
                this.sense = e.movementX < 0 && e.movementY < 0 ? "downleft" :
                e.movementX < 0 && e.movementY > 0 ? "upleft" : 
                e.movementX > 0 && e.movementY > 0 ? "upright" :
                e.movementX > 0 && e.movementY < 0 ? "downright" :
                e.movementX > 0 ? "right" : 
                e.movementX < 0 ? "left" :
                e.movementY < 0 ? "down" :
                e.movementY > 0 ? "up": "";



        });   
    }

    keydown = (e) =>{
            if(e.code === "ArrowUp"){
                this.upPressed = true
            }
            if(e.code === "ArrowDown"){
                this.downPressed = true
            }
            if(e.code === "ArrowRight"){
                this.rightPressed = true
            }
            if(e.code === "ArrowLeft"){
                this.leftPressed = true
            }
            if(e.code === "Space"){
                

                    this.shootPressed = true;
                
            }

    }
    keyup = (e) =>{
        if(e.code === "ArrowUp"){
            this.upPressed = false
        }
        if(e.code === "ArrowDown"){
            this.downPressed = false
        }
        if(e.code === "ArrowRight"){
            this.rightPressed = false
        }
        if(e.code === "ArrowLeft"){
            this.leftPressed = false
        }
        if(e.code === "Space"){




                    this.shootPressed = false;
                    
                
        }
    }




    draw() {
        this.move()
        this.ctx.beginPath();
        this.ctx.fillStyle = "#FF0000";
        this.ctx.arc(this.x,this.y, this.r, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
        this.shoot();
    }


    move() {
        if(this.downPressed){
            this.y += 10;
            
        }
        if(this.upPressed){
            this.y -= 10;
        }
        if(this.leftPressed){
            this.x -= 10;
        }
        if(this.rightPressed){
            this.x += 10;
        }

        // if(this.y >= this.canvasH){
        //     this.y -= 10;
        // }else if(this.y <= -this.canvasH){
        //     this.y += 10;
        // }
        // if(this.x >= this.canvasX){
        //     this.x -= 10;
        // }else if(this.x <= -this.canvasX){
        //     this.x+= 10;
        // }
    }

    eat(player,obstacle){
        if(player > obstacle){
            this.r += obstacle * 0.0075;
            return true;
        }else if(player < obstacle){
            return false;
            
        }else if(player === obstacle){

        }
    }
}
