Ball = function() {

    this.velocity = {x: 0, y: 0};
    this.destX = 0;
    this.destY = 0;

    this.onAddToScene = function() {
        this.ballSprite = new Sprite('imgs/ball.png');
        this.ballSprite.setSize(15,15);
        this.owner.addSprite(this.ballSprite);
        this.originalPos = this.owner.getPosition();
    }
    this.onMoveComplete = function() {
        alert(this.owner.getPosition().x + " " + this.owner.getPosition().y);
    }
    this.onUpdate = function()
    {
        var x = this.owner.getPosition().x;
        var y = this.owner.getPosition().y;

        if (x < -wade.app.MAX_WIDTH + 20 ||
            x > wade.app.MAX_WIDTH - 20) {
            this.velocity.x *= -1;
        }
        if (y < -wade.app.MAX_HEIGHT + 20 ||
            y > this.originalPos.y - 20) {
            this.velocity.y *= -1;
        }

        x += this.velocity.x;
        y += this.velocity.y;

        this.owner.setPosition(x, y);

    }
}