(function() {
    'use strict';
    angular.module('ThumbnailGenerator')
        .controller('MainController', ['$scope', 'ScreenshotCreator',
            function($scope, screenshotCreator) {
                $scope.createImage = screenshotCreator.createImage;
                $scope.getImage = screenshotCreator.getImage;
            }])
})();