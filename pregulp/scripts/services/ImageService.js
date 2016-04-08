(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('ImageService',['$interval', 'GlobalCanvas', function($interval, globalCanvas){
            var me = this;

            var gameImage = function(name, src, x, y){
                this.name = name;
                this.image = new Image;
                this.loaded =  false;
                this.pos = [x,y];
                this.src = src;
            };

            me.getNumberOfImagesToLoad = function(){
                var total = 0;
                me.gameImages.forEach(function(value, index){
                    if(!value.image.complete){
                        total++;
                    }
                });
                console.log('waiting for', total);
                if(total === 0){
                    me.stopWait();
                }
                return total;
            };

            me.timer = null;

            me.startWait = function (){
                console.log('waiting for loads');
                me.timer = $interval(me.getNumberOfImagesToLoad, 2);
            };

            me.stopWait = function (){
                console.log('stop');
                if (angular.isDefined(me.timer)){
                    console.log('cancelled');
                    $interval.cancel(me.timer);
                    me.draw();
                }
            };
            me.draw = function (){
                console.log('draw');
                globalCanvas.drawImage(me.gameImages[0].image, me.gameImages[0].pos[0],me.gameImages[0].pos[1]);
                globalCanvas.drawImage(me.gameImages[1].image, me.gameImages[1].pos[0],me.gameImages[1].pos[1]);
            };
            me.waitThenDraw = function(){
                me.timer= $interval(me.getNumberOfImagesToLoad, 2);
            };

            me.gameImages = [];

            me.getImageByName = function(name){
                for (var i = 0; i < me.gameImages.length; i++){
                    if(me.gameImages[i].name = name){
                        return me.gameImages[i];
                    }
                }
                return 'error';
            };

            me.onAllLoaded = function(){
                console.log('allLoaded');
            };

            me.addImage = function (name, imageSource, x, y) {
                console.log('addImage', name);
                var img = new gameImage(name, imageSource, x, y);
                img.image.onload = function(){
                    console.log('loaded', name);
                    img.loaded = true;
                };
                img.image.src = imageSource;
                me.gameImages.push(img);
            };

            me.addBackground = function(imageSource){
                me.addImage('background', imageSource, 0, 0);
            };

            me.addBorder = function(imageSource){
                me.addImage('border',imageSource, 0, 0);
            };
        }])
})();