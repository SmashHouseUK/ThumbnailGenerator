(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('GlobalCanvas', [function(){
            var me = this;

            me.setCanvas = function(canvas) {
                me.canvas = canvas;
            };

            me.getCanvasContext = function(){
                return me.canvas.getContext("2d");
            };

            me.getCanvas = function(){
                return me.canvas;
            };

            me.drawImage = function(image, x, y){
                me.canvas.getContext("2d").drawImage(image, x, y);
            };
        }])
})();