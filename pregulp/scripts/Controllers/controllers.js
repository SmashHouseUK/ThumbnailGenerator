(function() {
    'use strict';
    angular.module('ThumbnailGenerator')
        .controller('MainController', ['$scope', 'ScreenshotCreator', 'CanvasEngine', 'ImageService',
            function($scope, screenshotCreator, canvasEngine, imageService) {
                $scope.gen = function(){
                    console.log('generate');
                    canvasEngine.addImages();
                    imageService.waitThenDraw();
                };
                $scope.showCanvas = false;
                $scope.createImage = screenshotCreator.createImage;
                $scope.getImage = screenshotCreator.getImage;
            }])
})();