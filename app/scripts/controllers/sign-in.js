'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:SignInCtrl
 * @description
 * # SignInCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('SignInCtrl', ['States', function (States) {
        States.setCurrentPage(7);
    }]);
