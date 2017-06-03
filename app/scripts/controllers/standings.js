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
        this.isLoggedIn = function () {
            return States.isLoggedIn();
        };
        this.username = function () {
            return States.username();
        };
    }]);
