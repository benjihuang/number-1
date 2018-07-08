"use strict";
var user = (function (user) {
    let Utils;
    /**
     * @class lf2.Utils
     */
    user.Utils = Utils = {
        /**
         * Axis-Aligned Bounding Box
         *
         * @param rect1
         * @param rect2
         * @returns {boolean}
         */
        aabb: function (rect1, rect2) {
            return (rect1.x < rect2.x + rect2.width &&
                rect1.x + rect1.width > rect2.x &&
                rect1.y < rect2.y + rect2.height &&
                rect1.height + rect1.y > rect2.y);
        },

        pointInRect(p, rect) {
            if (p && rect && isFinite(p.x) && isFinite(p.y)) {
                return (p.x.inRange(rect.x, rect.x + rect.width) && p.y.inRange(rect.y, rect.y + rect.height));
            }
            return false;
        }
    };

    return user;
})(user || {});
