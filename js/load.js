'use strict';
//立即執行函式, 並封裝所有變數避免衝突
(function () {
    const jsArray = [
        //Load framework
        "Framework/AttachableInterface.js",
        "Framework/KeyboardEventInterface.js",
        "Framework/MouseEventInterface.js",

        "Framework/Config.js",
        "Framework/Record.js",
        "Framework/Replay.js",
        "Framework/Util.js",
        "Framework/DebugInfo.js",
        "Framework/Point.js",
        "Framework/Point3D.js",
        "Framework/GameObject.js",
        "Framework/Sprite.js",
        "Framework/AnimationSprite.js",
        "Framework/Scene.js",
        "Framework/ResourceManager.js",
        "Framework/Level.js",
        "Framework/Game.js",
        "Framework/MouseManager.js",
        "Framework/KeyBoardManager.js",
        "Framework/Audio.js",

        //Game Component
        "user/!loadComponent.js",
    ];

    LoadScriptInSequence.call(document.currentScript, jsArray);
})();

