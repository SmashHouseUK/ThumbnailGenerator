(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('Drawer', ['GlobalCanvas', 'GameSettings', function (globalCanvas, gameSettings) {
            var me = this;

            var gameImages;

            var getImageByName = function (name) {
                for (var i = 0; i < gameImages.length; i++) {
                    if (gameImages[i].name === name) {
                        return gameImages[i];
                    }
                }
                return 'does not exist';
            };

            var drawImage = function (imageObj) {
                globalCanvas.drawImage(imageObj.image, imageObj.pos[0], imageObj.pos[1]);
            };

            var drawFlippedImage = function (imageObj) {
                globalCanvas.drawFlippedImage(imageObj.image, imageObj.pos[0], imageObj.pos[1]);
            };

            var drawBackground = function () {
                drawImage(getImageByName('background'));
            };

            var drawBorder = function () {
                drawImage(getImageByName('border'));
            };

            var drawCharacter = function (playerNumber, characterNumber) {
                var addressString = 'player' + playerNumber + 'character' + characterNumber;
                if(gameSettings.selectedGameMode === 'singles') {
                    if(playerNumber === 0){
                        drawImage(getImageByName(addressString));
                    }
                    else if (playerNumber === 1) {
                        console.log('drawingFlipped');
                        drawFlippedImage(getImageByName(addressString));
                    }
                }
            };

            var drawPlayerCharacters = function (playerNumber) {
                if (gameSettings.singlesCharacterList[playerNumber].length === 1) {
                    drawCharacter(playerNumber, 0);
                }
            };

            var drawLogo = function (){
                drawImage(getImageByName('logo'));
            };

            var writeSinglesNames = function(){
                for(var i = 0; i < gameSettings.singlesPlayerNames.length; i++){
                    globalCanvas.writeText(gameSettings.singlesPlayerNames[i],
                        100,
                        'center',
                        gameSettings.singlesNamePositions[i][0],
                        gameSettings.singlesNamePositions[i][1])
                }
            };

            var writeDoublesNames = function(){
                console.log('not done yet lol');
            };

            var writeDate = function(){
                globalCanvas.writeText(gameSettings.date,
                    140,
                    'left',
                    gameSettings.datePos[0],
                    gameSettings.datePos[1])
            };

            me.draw = function (Images) {
                gameImages = Images;
                drawBackground();
                drawPlayerCharacters(0);
                drawPlayerCharacters(1);
                drawBorder();
                drawLogo();
                writeDate();
                writeSinglesNames();
            };
        }])
})();