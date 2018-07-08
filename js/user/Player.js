"use strict";
var user = (function (user) {
    const SHOOT_DELAY = 100;
    const HURT_DELAY = 1000;
    const HEALTH_DELAY = 1000;

    /**
     * 玩家
     *
     * @class user.Player
     * @extends Framework.AnimationSprite
     */
    user.Player = class Player extends Framework.AnimationSprite {
        constructor() {
            super({
                url: 'images/ship_2.png',
                col: 4,
                row: 1,
                loop: true,
                speed: 4
            });

            this.hp = 100;
            this.lastShootTime = 0;
            this.audio = new Framework.Audio({
                shoot: 'audio/shoot.m4a'
            });

            this.lastHurtTime = 0;
            this.lastHealthTime = 0;
        }

        initialize() {
            super.initialize();
            this.start({from: 3, to: 0});

            this._widthLimit = Framework.Config.canvasWidth - Math.floor(this.width / this.col);
            this._heightLimit = Framework.Config.canvasHeight;
            console.log(this._widthLimit, this._heightLimit);
        }

        shoot() {
            const now = new Date().getTime();
            if (now - this.lastShootTime > SHOOT_DELAY) {
                //TODO: 射擊功能
                let b = new user.Bullet();
                b.position.x = this.position.x +55;
                b.position.y = this.position.y +25;
                this.spriteParent.attach(b);
                this.audio.play('shoot');
                this.lastShootTime = now;
            }
        }

        move(x, y) {
            this.position.x += x;
            this.position.y += y;

            if (this.position.x < 0) this.position.x = 0;
            if (this.position.y < 0) this.position.y = 0;
            if (this.position.x >= this._widthLimit) this.position.x = this._widthLimit;
            if (this.position.y >= this._heightLimit) this.position.y = this._heightLimit;
        }

        hurt(damage) {
            const now = new Date().getTime();
            if (now - this.lastHurtTime > HURT_DELAY) {
                this.hp -= damage;
                if (this.hp < 0) this.hp = 0;
                this.lastHurtTime = now;
            }
        }

        health(amount) {
            const now = new Date().getTime();
            if (now - this.lastHealthTime > HEALTH_DELAY) {
                this.hp += amount;
                this.lastHealthTime = now;
            }
        }
    };
    return user;
})(user || {});
