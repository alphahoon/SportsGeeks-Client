'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('MainCtrl', ['States', function (States) {
        States.setCurrentPage(1);
        this.isLoggedIn = function () {
            return States.isLoggedIn();
        };
        this.username = function () {
            return States.username();
        };
    }]);
