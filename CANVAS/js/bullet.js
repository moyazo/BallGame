class Bullet{
    constructor(x,y,speed,sense){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sense = sense;

        this.width = 5;
        this.height = 15;
        this.color = "red";
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        if(this.sense === "downleft"){
            this.x -= this.speed;
            this.y -= this.speed;
        }
        else if(this.sense === "upleft"){
            this.x -= this.speed;
            this.y += this.speed;
        }
        else if(this.sense === "upright"){
            this.x += this.speed;
            this.y += this.speed;
        }
        else if(this.sense === "downright"){
            this.x += this.speed;
            this.y -= this.speed;
        }


        else if(this.sense === "right"){
            this.x += this.speed;
            this.y -= 0;
        }
        else if(this.sense === "left"){
            this.x -= this.speed;
            this.y -= 0;
        }
        else if(this.sense === "up"){
            this.y += this.speed;
        }
        else if(this.sense === "down"){
            this.y -= this.speed;
        }

       
            ctx.beginPath()
            ctx.fillStyle = "red"
            ctx.arc(this.x, this.y, 3, 0, Math.PI * 2)
            ctx.fill()
            ctx.closePath()


        
        
        // ctx.fillRect(this.x,this.y,this.width,this.height); 
    }

    destroy(){
        
    }
}