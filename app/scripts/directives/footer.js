'use strict';

/**
 * @ngdoc directive
 * @name SportsGeeksApp.directive:footer
 * @description
 * # footer
 */
angular.module('SportsGeeksApp')
    .directive('footer', function () {
        return {
            templateUrl: '/views/footer.html',
            restrict: 'E'
        };
    });
