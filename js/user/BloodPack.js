"use strict";
var user = (function (user) {
    /**
     * 隕石
     *
     * @class user.Asteroid
     * @extends Framework.Sprite
     */
    user.BloodPack = class BloodPack extends Framework.Sprite {
        constructor() {
            //TODO: 設定隕石大小, 圖片
            super("images/blood_pack.png");  //TODO: 設定隕石圖片

            this.size = 1;

            this.audio = new Framework.Audio({
                hit: 'audio/hit.m4a',
                destroy: 'audio/destroy.m4a',
            });
        }

        initialize() {
            this.position.x = Framework.Config.canvasWidth;
            this.position.y = (Math.random() * Framework.Config.canvasHeight) | 0;
            this.speed = (3 - this.size) * 2;
            this.hp = 50;
        }

        load() {

        }

        update() {
            //TODO: 移動隕石、判斷HP、是否超出界線
            this.position.x -= this.speed;
            　if(this.hp<=0){this.audio.play('destroy');}
            if(this.position.x<-100|| this.hp<=0){
                this.spriteParent.detach(this);
            }
        }

        hurt(damage) {
            this.hp -= damage;
            if (this.hp < 0) this.hp = 0;
            this.audio.play('hit');
        }
    };
    return user;
})(user || {});
