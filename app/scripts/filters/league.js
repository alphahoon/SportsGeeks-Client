'use strict';

/**
 * @ngdoc filter
 * @name SportsGeeksApp.filter:league
 * @function
 * @description
 * # league
 * Filter in the SportsGeeksApp.
 */
angular.module('SportsGeeksApp')
    .filter('league', function () {
        return function (input, leagueID) {
            var array = [];
            for (var index in input) {
                if (input[index].league == leagueID)
                    array.push(input[index])
            }
            return array;
        };
    });
