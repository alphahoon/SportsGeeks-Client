'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:SignUpCtrl
 * @description
 * # SignUpCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('SignUpCtrl', ['States', function (States) {
        States.setCurrentPage(6);
    }]);
