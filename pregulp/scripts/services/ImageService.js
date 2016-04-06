(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('ImageService',[function(){
            var me = this;

            me.images = {
                backgroundImage : new Image(),
                borderImage : new Image()
            };

            me.drawImage = function (img, canvas, imageSource, x, y) {
                img = new Image();

                img.onload = function () {
                    canvas.drawImage(img, x, y);
                };

                img.src = imageSource;

                return img;
            };

            me.drawBackground = function(canvas, imageSource){
                me.drawImage(me.images.backgroundImage, canvas, imageSource, 0, 0);
            };

            me.drawBorder = function(canvas, imageSource){
                me.drawImage(me.images.borderImage, canvas, imageSource, 0, 0);
            }
        }])
})();