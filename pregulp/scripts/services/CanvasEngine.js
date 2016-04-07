(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('CanvasEngine', ['ImageService',
            function (imageService) {
                var me = this;

                me.addBackground = function () {
                    imageService.addBackground('images/background/background.png');
                };

                me.addBorder = function () {
                    imageService.addBorder('images/border/border.png');
                };

                me.addImages = function () {
                    me.addBackground();
                    me.addBorder();
                };

                //me.drawImages = imageService.drawImages;
            }])
})();