(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('ScreenshotCreator', ['GlobalCanvas', function (globalCanvas) {
            var me = this;

            me.downloadPromt = function(image){
                console.log('attempting to download');
                var link = document.createElement('a');
                link.download = 'testname.png';
                link.href = image;
                link.click();
            };

            me.createImage = function(){
                console.log('attempting to create image');
                me.image = globalCanvas.getCanvas().toDataURL("image/png").replace("image/png", "image/octet-stream");
                console.log('imageCreated', typeof me.image, me.image);

                me.downloadPromt(me.image);
            };
        }])
})();