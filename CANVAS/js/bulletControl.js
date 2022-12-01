class bulletController {
    bullets = [];
    timerTillNextBullet = 0;
    constructor(canvas,ctx) {
        this.ctx = ctx
        this.canvas = canvas
        

    }

    draw(ctx) {
        this.bullets.forEach((bullet) => bullet.draw(ctx,bullet.sense));


    }

    shoot(bulletX,bulletY,speed,delay,sense) {
        if(this.timerTillNextBullet <= 0){
            this.bullets.push(new Bullet(bulletX,bulletY,speed,sense));
            this.timerTillNextBullet = delay;
        }
        this.timerTillNextBullet--;
    }

}