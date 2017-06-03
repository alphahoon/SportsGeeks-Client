'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:StandingsCtrl
 * @description
 * # StandingsCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('StandingsCtrl', ['States', function (States) {
        States.setCurrentPage(3);
    }]);
