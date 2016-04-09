App = function() {

	this.MAX_HEIGHT = 225;
	this.MAX_WIDTH = 141;
	this.clicks = 0;
	this.number_balls = 0;
	this.maxBoxLine = 7;
	this.maxBoxHeight = 7;
	this.play_number = 1;
	this.can_play = true;
	this.boxArray = [];

	this.load = function() {
		wade.loadScript('button.js');
		wade.loadScript('ball.js');
		wade.loadScript('box.js');
		wade.loadImage('imgs/background.jpg');
		wade.loadImage('imgs/button.png');
		wade.loadImage('imgs/ball.png');
	};

	this.init = function() {
		var spriteBackground = new Sprite('imgs/background.jpg', 30);
		spriteBackground.setSize(282, 450);
		wade.addSceneObject(new SceneObject(spriteBackground));
		wade.addSceneObject(new SceneObject(0, [Button], 0, (this.MAX_HEIGHT - 25)), true);
		for (var i = 0; i < this.maxBoxHeight; i++) {
			this.boxArray[i] = [];
			for (var j = 0; j < this.maxBoxLine; j++) {
				this.boxArray[i][j] = 0;
			}
		}
		this.addBoxes();
	};

	this.onClick = function() {
		if (this.clicks == 2 && this.can_play) {
			this.clicks = 0;
			var cur = wade.getMousePosition();
			var diffX = cur.x;
			var diffY = Math.abs((this.MAX_HEIGHT - 55) - cur.y);
			this.interval = setInterval(function() {wade.app.addBall(diffX, diffY)}, 90);
			this.can_play = false;
		}
		else if(this.clicks == 1 && this.can_play) {
			this.clicks = 2;
		}
	};

	this.addBall = function(diffX, diffY) {
		if (this.number_balls < 1) {
			var ballObject = new SceneObject(0, [Ball], 0, (this.MAX_HEIGHT - 55));
			var h = Math.sqrt( Math.pow(Math.abs(diffX),2) + Math.pow(Math.abs(diffY),2));
			var ball = ballObject.getBehaviorByIndex(0);
			ball.velocity.x = (diffX / h) * 5;
			ball.velocity.y = (diffY / h) * -5;
			wade.addSceneObject(ballObject, true);
			this.number_balls++;
		} else {
			clearInterval(this.interval);
		}
	};

	this.addBoxes = function()
	{
		var spaceDiff = 40;
		var nBox = Math.floor((Math.random() * 7) + 3);
		for (var i = 0; i < nBox; i++) {
			var pos = Math.floor(Math.random() * 7);
			if (this.boxArray[0][pos] == 0) {
				this.boxArray[0][pos] = new SceneObject(0, [Box], -this.MAX_WIDTH + 20 + spaceDiff * pos, -this.MAX_HEIGHT + 20);
				wade.addSceneObject(this.boxArray[0][pos]);
				this.boxArray[0][pos].getBehavior().moveBox(0, pos)
			}
		}
	};
	
	this.moveBoxes = function () 
	{
		for (var i = this.boxArray.length - 1; i >= 0; i--) {
			for (var j = this.maxBoxLine - 1; j >= 0 ; j--) {
				if (this.boxArray[i][j] != 0) {
					this.boxArray[i][j].getBehavior().moveBox(i, j);
				}
			}
		}	
	};
};
