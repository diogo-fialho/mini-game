Box = function () {

    this.onAddToScene = function ()
    {
        this.sprite = new Sprite();
        this.sprite.setDrawFunction(wade.drawFunctions.drawRect_("blue", 3));
        this.sprite.setSize(40, 40);
        this.owner.addSprite(this.sprite);
    };

    this.onUpdate = function()
    {

    };
};