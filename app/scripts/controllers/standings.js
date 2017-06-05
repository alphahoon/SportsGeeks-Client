'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:StandingsCtrl
 * @description
 * # StandingsCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('StandingsCtrl', ['States', 'Translation', function (States, Translation) {
        States.setCurrentPage(3);
        this.isLoggedIn = function () {
            return States.isLoggedIn();
        };
        this.username = function () {
            return States.username();
        };
        this.tr = function (msg) {
            return Translation.tr(msg, States.language());
        };
    }]);
