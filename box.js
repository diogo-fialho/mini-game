Box = function () {

    this.hits = 100;
    this.onAddToScene = function ()
    {
        this.sprite = new Sprite();
        this.sprite.setDrawFunction(wade.drawFunctions.drawRect_("blue", 3));
        this.sprite.setSize(40, 40);
        this.sprite.setName("box");
        this.text = new TextSprite(this.hits);
        this.text.setColor("blue");
        this.owner.addSprite(this.sprite);
        this.owner.addSprite(this.text, {x: -10, y: 5});
    };

    this.hitted = function()
    {
        this.hits--;
        if (this.hits != 0) {
            this.text.setText(this.hits.toString());
            this.sprite.setDrawFunction(wade.drawFunctions.fadeOpacity_(0, 1, 0.08, this.sprite.draw));
        } else {
            wade.removeSceneObject(this.owner);
        }
    }
};