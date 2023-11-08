class Obstacle {
    constructor(x,y,width,height,color="black") {
        this.x =x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }
    update() {
        
    }
    draw(ctx) {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.rect(this.x,this.y,this.width,this.height)
        ctx.fill()
    }
}
