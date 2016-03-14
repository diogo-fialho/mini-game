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
        this.text.setText(this.hits.toString());
    }
};