"use strict";
var user = (function (user) {
    const getCenterX = (objectWidth) => (Framework.Config.canvasWidth - objectWidth) >> 1;
    const Utils = user.Utils;

    /**
     * 遊戲進入畫面
     *
     * @class user.GameMenu
     */
    user.GameMenu = class GameMenu extends Framework.Scene {
        load() {
            this.background = new user.Background();
            this.logo = new Framework.Sprite("images/logo.png");
            this.playBtn = new Framework.Sprite("images/play-btn-normal.png");
            this.playBtnHover = new Framework.Sprite("images/play-btn-hover.png");
            this.attach(this.background);
            this.attach(this.playBtn);
            this.attach(this.playBtnHover);
            this.attach(this.logo);
        }

        initialize() {
            this.logo.position.x = getCenterX(600);
            this.logo.position.y = 90;

            this.playBtn.position.x = getCenterX(230);
            this.playBtn.position.y = 370;

            this.playBtnHover.position.x = getCenterX(230);
            this.playBtnHover.position.y = -362;

            this.btnRange = {...this.playBtn.rect};
        }

        onMouseMove(e) {
            if (Utils.pointInRect(e, this.btnRange)) {
                this.playBtn.position.y = -370;
                this.playBtnHover.position.y = 362;
            } else {
                this.playBtn.position.y = 370;
                this.playBtnHover.position.y = -362;
            }
        }

        onMouseUp(e) {
            //TODO: 進入遊戲, Framework.Game.goToLevel('main');
            if (Utils.pointInRect(e, this.btnRange)) {
                Framework.Game.goToLevel('main');
            }
        }

        teardown() {
        }
    };
    return user;
})(user || {});
