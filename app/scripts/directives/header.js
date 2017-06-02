'use strict';

/**
 * @ngdoc directive
 * @name SportsGeeksApp.directive:header
 * @description
 * # header
 */
angular.module('SportsGeeksApp')
    .directive('header', function () {
        return {
            templateUrl: '/views/header.html',
            restrict: 'E'
        };
    });
