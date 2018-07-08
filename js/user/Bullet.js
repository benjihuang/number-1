"use strict";
var user = (function (user) {
    const BULLET_WIDTH = 20;
    const BULLET_HEIGHT = 6;

    /**
     * 子彈
     *
     * @class user.Bullet
     * @extends Framework.GameObject
     */
    user.Bullet = class Bullet extends Framework.GameObject {
        constructor() {
            super();
            this.isFriends = true;
            this.used = false;
        }

        get width() {
            return BULLET_WIDTH;
        }

        get height() {
            return BULLET_HEIGHT;
        }

        update() {
            if (this.isFriends) {
                this.position.x += 20;
            } else {
                this.position.x -= 20;
            }

            if (this.spriteParent) {
                if (this.position.x < -BULLET_WIDTH || this.position.x > Framework.Config + BULLET_WIDTH) {
                    this.spriteParent.detach(this);
                }
            }
        }

        draw(ctx) {
            const oldFillColor = ctx.fillStyle;

            if (this.isFriends) {
                ctx.fillStyle = '#FF0';
            } else {
                ctx.fillStyle = '#F0F';
            }

            //TODO: 繪製子彈
            ctx.fillRect(
                this.position.x, this.position.y,
                BULLET_WIDTH, BULLET_HEIGHT
            );
            ctx.fillStyle = oldFillColor;

        }

        initialize() {
        }

        load() {
        }

        teardown() {
        }
    };
    return user;
})(user || {});
