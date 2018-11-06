class GameView {
    constructor(game) {
        this.game = game;
        this.potatoOne = this.game.addPotatoOne();
        this.potatoTwo = this.game.addPotatoTwo();
        this.hpOne = this.game.addHPOne();
        this.hpTwo = this.game.addHPTwo();
    }

    start() {
        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
    }

    animate(time) {
        this.game.play();
        this.lastTime = time;
        requestAnimationFrame(this.animate.bind(this));
    }
}

module.exports = GameView;
