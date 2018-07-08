"use strict";
var user = (function (user) {
    /**
     * 背景
     *
     * @class user.Background
     * @extends Framework.Sprite
     */
    user.Background = class Background extends Framework.Sprite {
        constructor() {
            super("images/background-1.png");
            this.position.x = 0;
            this.position.y = 0;
        }

        initialize() {

        }

        load() {
        }

        update() {
            this.position.x -= 1;
            if (this.position.x < -960) this.position.x = 0;
        }

        teardown() {
        }
    };
    return user;
})(user || {});
