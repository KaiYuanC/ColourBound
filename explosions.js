// explosions //

function createExplosion(x, y) {
	let explosion = createSprite({
		image:loadImage("assets/explosion.png"),
		frameWidth: 128,
		frameHeight: 128,
		anims: {
			explode: {
				startFrame: 0,
				length: 10,
				frameTime: 0.05
			}
		},
	
		onLoop: removeSprite
	});
	explosion.x = x;
	explosion.y = y;
	
	playAnim(explosion, "explode");
		return explosion;
}