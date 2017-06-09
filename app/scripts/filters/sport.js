'use strict';

/**
 * @ngdoc filter
 * @name SportsGeeksApp.filter:sport
 * @function
 * @description
 * # sport
 * Filter in the SportsGeeksApp.
 */
angular.module('SportsGeeksApp')
    .filter('sport', function () {
        return function (input, sportID) {
            var array = [];
            for (var index in input) {
                if (input[index].sport == sportID)
                    array.push(input[index])
            }
            return array;
        };
    });
