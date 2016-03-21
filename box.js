Box = function () {

    this.hits = wade.app.play_number;
    
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
    };
    
    this.moveBox = function (i, j) 
    {
        this.owner.setPosition(this.owner.getPosition().x, this.owner.getPosition().y + 40);
        wade.app.boxArray[i + 1][j] = wade.app.boxArray[i][j];
        wade.app.boxArray[i][j] = 0;
    };
};