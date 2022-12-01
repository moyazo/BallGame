const Game = {
    canvas: undefined,
    ctx: undefined,
    scoreBoard: undefined,
    fps: 60, 

    init: function() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.start();
    },

    start: function() {
        this.reset();
            



        // Bucle de renderizado
        this.interval = setInterval(() => {
            this.clear();
            // this.drawObstacle();
            this.frameCounter++;

     if(this.frameCounter % 3 === 0)
                this.generateObstacle();

                if(this.isCollision()) 
                    this.eatAll()
                
                // if(this.isBulletCollision()) 
                //     this.destroyObstacle()

                
                this.drawAll();
                this.moveAll();

            this.clearObstacles()
        }, 1500 / this.fps)
        

    },

    reset: function() {
        this.background = new Background(this.canvas.width, this.canvas.height, this.ctx);
        this.bulletController = new bulletController(this.canvas,this.ctx); 
        this.player = new Player(this.canvas.width, this.canvas.height, this.ctx,this.bulletController);
        this.obstacle = new Obstacle();
        this.frameCounter = 0;

        this.obstacles = [];
        this.shoots = this.bulletController.bullets ;
    },

    clear: function () {
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height,this.bullet);
    },

    drawAll: function() {
        this.background.draw();
        this.player.draw();
        this.player.setControls();
        this.bulletController.draw(this.ctx);
        this.obstacles.forEach(obstacle => {
            obstacle.draw(this.frameCounter);
        })
    },

    moveAll: function() {
 
        this.obstacles.forEach(obstacle => {
            obstacle.move();
        })
    },

    generateObstacle: function(){
        this.obstacles.push(new Obstacle(this.canvas.width, this.canvas.height, this.ctx,this.player.r))
    },
    clearObstacles: function () {
        
        this.obstacles = this.obstacles.filter((obstacle) => obstacle.y < this.canvas.height)
        this.obstacles = this.obstacles.filter((obstacle) => obstacle.y > 10);
    },

    isCollision: function(){
        return this.obstacles.some((obstacle) => {
            return (
                this.player.x + this.player.r >= obstacle.x &&
                this.player.x <= obstacle.x + obstacle.r &&
                this.player.y + this.player.r>= obstacle.y &&
                this.player.y <= obstacle.y + obstacle.r
            )
        })
    },
    // isBulletCollision: function(){ 
    //     return this.shoots.some(shoot => {
    //         let bool = false
    //         console.log(shoot.x); 
    //         this.obstacles.some(obstacle => {
                
    //             if(obstacle.x + obstacle.r >= shoot.x && obstacle.x <= shoot.x + shoot.r && obstacle.y + obstacle.r >= shoot.y && obstacle.y <= shoot.y + shoot.r){
    //                 bool = true;
    //                 return bool;
    //             }
    //             console.log(obstacle.x + obstacle.r >= shoot.x );            
    //         });
    //         return bool;
    //     })
    // },

    eatAll: function(){
            this.obstacles = this.obstacles.filter((obstacle) => this.player.eat(this.player.r,obstacle.r) === false); 
    },
    // destroyObstacle(){
    //     this.obstacles.forEach(obstacle => {
    //         this.shoots.some(shoot => shoot.x === obstacle.x);
    // });
 
        
    }
 