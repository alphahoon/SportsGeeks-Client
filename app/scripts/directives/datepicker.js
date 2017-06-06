'use strict';

/**
 * @ngdoc directive
 * @name SportsGeeksApp.directive:datepicker
 * @description
 * # datepicker
 */
angular.module('SportsGeeksApp')
    .directive('datepicker', function () {
        return {
            templateUrl: '/views/datepicker.html',
            restrict: 'E'
        };
    });
