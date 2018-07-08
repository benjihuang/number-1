'use strict';
(function () {
    const GAME_COMPONENT=[
        'define.js',
        'Utils.js',
        //Load Objects
        'Background.js',
        'Bullet.js',
        'Player.js',
        'Asteroid.js',
        'BloodPack.js',

        //Load Scenes
        'GameMenu.js',
        'GameScene.js',
        'GameOverScene.js',

        //Load Levels
        'LaunchLevel.js',
        'MainLevel.js',
        'OverLevel.js',

        '!MainGame.js',
    ];

    LoadScriptInSequence.call(document.currentScript, GAME_COMPONENT);
})();
