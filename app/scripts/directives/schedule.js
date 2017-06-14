'use strict';

/**
 * @ngdoc directive
 * @name SportsGeeksApp.directive:schedule
 * @description
 * # schedule
 */
angular.module('SportsGeeksApp')
    .directive('schedule', function () {
        return {
            templateUrl: 'views/schedule.html',
            restrict: 'E'
        };
    });
