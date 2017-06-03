'use strict';

/**
 * @ngdoc directive
 * @name SportsGeeksApp.directive:rank
 * @description
 * # rank
 */
angular.module('SportsGeeksApp')
    .directive('rank', function () {
        return {
            templateUrl: '/views/rank.html',
            restrict: 'E'
        };
    });
