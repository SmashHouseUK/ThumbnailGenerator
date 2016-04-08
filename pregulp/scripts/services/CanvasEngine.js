(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('CanvasEngine', ['ImageService', 'GameSettings',
            function (imageService, gameSettings) {
                var me = this;

                var addBackground = function () {
                    imageService.addImage('background', 'images/background/background.png');
                };

                var addBorder = function () {
                    imageService.addImage('border', 'images/border/border.png');
                };

                var addLogo = function () {
                    imageService.addImage('logo', 'images/logos/melee logo.png');
                };

                var addCharacters = function () {
                    if (gameSettings.selectedGameMode === 'singles') {
                        for (var i = 0; i < gameSettings.singlesCharacterList.length; i++) {
                            for (var j = 0; j < gameSettings.singlesCharacterList[i].length; j++) {
                                imageService.addCharacter(gameSettings.singlesCharacterList[i][j], 'player' + i + 'character' + j);
                            }
                        }
                    }
                };

                me.addImages = function () {
                    addBackground();
                    addBorder();
                    addCharacters();
                    addLogo();
                };
            }])
})();