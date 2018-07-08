"use strict";
var user = (function (user) {

    /**
     * 主遊戲
     *
     * @class user.MainLevel
     * @extends Framework.Level
     */
    user.MainLevel = class extends Framework.Level {
        constructor() {
            super();
        }

        load() {
            this.scene = new user.GameScene();
            this.rootScene.attach(this.scene);
        }

        keydown(a, b, e) {
            this.scene.onKeyDown(e);
        }

        keyup(e) {
            this.scene.onKeyUp(e);
        }

        receiveExtraDataWhenLevelStart(extraData) {
        }
    };


    return user;
})(user || {});
