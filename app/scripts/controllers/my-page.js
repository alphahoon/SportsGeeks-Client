'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:MyPageCtrl
 * @description
 * # MyPageCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('MyPageCtrl', ['States', function (States) {
        States.setCurrentPage(8);
        this.isLoggedIn = function () {
            return States.isLoggedIn();
        };
        this.username = function () {
            return States.username();
        };
    }]);
