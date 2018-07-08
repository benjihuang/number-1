"use strict";
var user = (function (user) {
    /**
     * 遊戲結束
     *
     * @class user.OverLevel
     * @extends Framework.Level
     */
    user.OverLevel = class extends Framework.Level {
        constructor() {
            super();
            this.data = {};
        }

        load() {
            this.scene = new user.GameOverScene();
            this.scene.setData(this.data);
            this.rootScene.attach(this.scene);
        }

        receiveExtraDataWhenLevelStart(extraData) {
            this.data = extraData;
        }
    };


    return user;
})(user || {});
