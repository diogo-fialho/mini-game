Button = function() {
    this.clicks = 0;
    this.onAddToScene = function() {
        this.buttonSprite = new Sprite('imgs/button.png');
        this.buttonSprite.setSize(30, 30);
        this.owner.addSprite(this.buttonSprite);
    }

    this.onClick = function() {
        wade.app.clicks = 1;
    }

}