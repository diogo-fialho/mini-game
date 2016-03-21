Ball = function() {

    this.velocity = {x: 0, y: 0};
    this.endMove = false;

    this.onAddToScene = function() {
        this.ballSprite = new Sprite('imgs/ball.png');
        this.ballSprite.setSize(15,15);
        this.owner.addSprite(this.ballSprite);
        this.originalPos = this.owner.getPosition();
    };
    this.onMoveComplete = function() {
        wade.removeSceneObject(this.owner);
        wade.app.number_balls--;
        if (wade.app.number_balls == 0) wade.app.can_play = true;
    };
    this.onUpdate = function()
    {
        var x = this.owner.getPosition().x;
        var y = this.owner.getPosition().y;
        if (!this.endMove) {
            var overlaps = this.owner.getOverlappingObjects()[0];
            console.log();
            if (x < -wade.app.MAX_WIDTH + 10 ||
                x > wade.app.MAX_WIDTH - 10 ||
                (overlaps != undefined &&
                overlaps.getSprite().getName() == "box" &&
                    y > overlaps.getPosition().y - 25 &&
                    y < overlaps.getPosition().y + 25
                )) {
                this.velocity.x *= -1;
            }
            else if (y < -wade.app.MAX_HEIGHT + 10 ||
                (overlaps != undefined &&
                overlaps.getSprite().getName() == "box" && (
                    x > overlaps.getPosition().x - 25 ||
                    x < overlaps.getPosition().x + 25
                ))) {
                this.velocity.y *= -1;
            }

            if (overlaps != undefined && overlaps.getSprite().getName() == "box") overlaps.getBehavior(0).hitted();

            x += this.velocity.x;
            y += this.velocity.y;
            if (y > this.originalPos.y) this.endMove = true;
            this.owner.setPosition(x, y);
        } else {
            this.owner.moveTo(this.originalPos.x, this.originalPos.y, 200);
        }

    };
};
