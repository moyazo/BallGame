class Background {
    constructor(canvasW, canvasH, ctx){
        console.log("Background creado");

        this.ctx = ctx

        // Tamaño imagen
        this.w = canvasW
        this.h = canvasH

        // Posición inicial
        this.x = 0
        this.y = 0

        this.dx = 10
    }

    draw() {
        this.ctx.fillStyle = "#000";
        this.ctx.fillRect(0, 0, this.w, this.h);
    }   
}





