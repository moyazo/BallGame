class Obstacle {
    constructor(width, height,ctx){

        this.height = height
        this.ctx = ctx
        this.x = width;
        this.y = Math.random() * (this.height + 1 - 1) + 1;
        this.speed = 4;
        this.r = Math.floor(Math.random() * (100 +  11 - 1) + 10);
        // this.color = ["green","yellow","black"];    
        this.dx = 3

        this.dy = this.getRandomIntInclusive(-10, 10)

    }


    draw(frameCounter){
            let colorRandom = Math.floor(Math.random() * (50 + 1 - 1) + 1);

             
            this.ctx.beginPath();
            this.ctx.shadowColor  = "yellow    ";
            this.ctx.shadowBlur = 8;    
            this.ctx.fillStyle = "white";

            this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.closePath();
       
        
            
    }
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    move() {
        this.x -= this.dx
        this.y += this.dy

    }
}