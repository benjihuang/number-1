"use strict";
var user = (function (user) {
    class Game {

        /** Default constructor. */
        constructor() {
            Framework.Game.addNewLevel({launch: new user.LaunchLevel()});
            Framework.Game.addNewLevel({main: new user.MainLevel()});
            Framework.Game.addNewLevel({over: new user.OverLevel()});
        }

        /**
         * Starts this object.
         *
         * @return  .
         */
        start() {
            Framework.Game.start();
        }
    }

    user['!MainGame'] = new Game();
    user['!MainGame'].start();


    return user;
})(user || {});