"use strict";
var user = (function (user) {
    /**
     * 遊戲結束畫面
     *
     * @class user.GameOverScene
     * @extends Framework.Scene
     */
    user.GameOverScene = class GameOverScene extends Framework.Scene {
        constructor() {
            super();
            this.data = {};
            this.isStop = false;
        }

        load() {
            this.background = new Framework.Sprite("images/game-over.png");
            this.attach(this.background);
            this.remTime = 0;
        }

        initialize() {
            this.restartTime = new Date().getTime() + 1000 * 5;
        }

        update() {
            if (this.isStop) return;

            this.remTime = Math.floor((new Date().getTime() - this.restartTime) / 1e3);
            if (this.remTime >= 0) {
                Framework.Game.goToLevel('launch');
                this.isStop = true;
            }
        }

        draw(ctx) {
            super.draw(ctx);

            let oldFillStyle = ctx.fillStyle;

            ctx.fillStyle = '#FFF';
            ctx.font = "32px Arial";
            ctx.textAlign = 'center';
            ctx.fillText("SCORE: " + (this.data.score || 0), Framework.Config.canvasWidth / 2, 400);
            ctx.font = "20px Arial";
            ctx.fillText(`Restart In ${-this.remTime} Sec.`, Framework.Config.canvasWidth / 2, 440);

            ctx.fillStyle = oldFillStyle;
        }

        teardown() {
        }

        setData(data) {
            this.data = data;
            return this;
        }
    };
    return user;
})(user || {});
