(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('GlobalCanvas', [function(){
            var me = this;

            me.setCanvas = function(canvasContext) {
                me.canvas = canvasContext;
            };
            me.getCanvas = function(){
                return me.canvas;
            };
            me.drawImage = function(image, x, y){
                me.canvas.drawImage(image, x, y);
            };
        }])
})();