Box = function () {

    this.onAddToScene = function ()
    {
        this.sprite = new Sprite();
        this.sprite.setDrawFunction(wade.drawFunctions.drawRect_("blue", 3));
        this.sprite.setSize(40, 40);
        this.sprite.setName("box");
        this.hits = new TextSprite(100);
        this.hits.setColor("blue");
        this.owner.addSprite(this.sprite);
        this.owner.addSprite(this.hits, {x: -10, y: 5});
    };
};