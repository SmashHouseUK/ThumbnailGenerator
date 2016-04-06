(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('CanvasEngine', ['ImageService',
            function (imageService) {
                var me = this;

                me.initialise = function (canvasContext) {
                    me.canvas = canvasContext;
                };

                me.drawBackground = function () {
                    me.backgroundImage = imageService.drawBackground(me.canvas, 'images/background/background.png');
                };

                me.drawBorder = function () {
                    me.BorderImage = imageService.drawBorder(me.canvas, 'images/border/border.png');
                };

                me.refresh = function () {
                    console.log('refresh');
                    me.drawBackground();
                    me.drawBorder();
                }
            }])
})();