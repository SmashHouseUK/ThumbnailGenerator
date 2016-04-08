(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('GameSettings', [function () {
            var me = this;

            me.date = '11/11/1111';

            me.charactersLocation = 'images/characterPortraits/';

            me.gameModes = ['singles', 'doubles'];
            me.selectedGameMode = 'singles';

            me.numberOfCharacters = [1, 1];
            me.doublesCharacterList = ['fox', 'fox', 'fox', 'fox'];
            me.singlesCharacterList = [['fox'],['fox']];

            me.doublesPlayerNames = ['player1', 'player2', 'player3', 'player4'];
            me.singlesPlayerNames = ['player1', 'Really Long Name'];
            me.singlesNamePositions = [[320, 100],[960,100]];


            me.datePos = [770, 700];
        }])
})();