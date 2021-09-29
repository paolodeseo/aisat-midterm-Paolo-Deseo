class Background {
    constructor(imagePath, width, height) {
        this.image = new Image();
        this.image.src = imagePath;
        this.image.width = width;
        this.image.height = height;
        this.x1 = 0;
        this.minX = -this.image.width/2-710;
        this.speed = 8;
    }   

    update() {
        this.x1 = this.x1 - this.speed;
        if (this.x1 < this.minX){
                this.speed = 0;
        }

        }

    draw() {

    context.drawImage(
           this.image, 
           this.x1, 0, 
           this.image.width, 
           this.image.height);
    }
}
