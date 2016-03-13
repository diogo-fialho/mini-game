App = function() {

	this.MAX_HEIGHT = 225;
	this.MAX_WIDTH = 150;
	this.clicks = 0;
	this.numberBalls = 0;

	this.load = function() {
		wade.loadImage('imgs/background.jpg');
		wade.loadImage('imgs/button.png');
		wade.loadImage('imgs/ball.png');
		wade.loadScript('button.js');
		wade.loadScript('ball.js');
	};
	this.init = function() {
		wade.addSceneObject(new SceneObject(new Sprite('imgs/background.jpg', 30)));
		wade.addSceneObject(new SceneObject(0, [Button], 0, (this.MAX_HEIGHT - 25)), true);

	};
	this.onClick = function() {
		if (this.clicks == 2) {
			this.clicks = 0;
			var diffX = event.clientX - wade.getScreenWidth() / 2;
			var diffY = Math.abs((this.MAX_HEIGHT - 55) - (event.clientY - wade.getScreenHeight() / 2));
			this.interval = setInterval(function() {wade.app.addBall(diffX, diffY)}, 100);
		}
		else if(this.clicks == 1) {
			this.clicks = 2;
		}
	}
	this.addBall = function(diffX, diffY) {
		if (this.numberBalls < 20) {
			var ballObject = new SceneObject(0, [Ball], 0, (this.MAX_HEIGHT - 55));
			var h = Math.sqrt(Math.abs(diffX) + diffY);
			var ball = ballObject.getBehaviorByIndex(0);
			ball.velocity.x = (diffX / h) * 0.5;
			ball.velocity.y = (diffY / h) * 0.5;
			wade.addSceneObject(ballObject, true);
			this.numberBalls++;
		} else {
			clearInterval(this.interval);
		}
	}
};
