'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('NewsCtrl', ['States', function (States) {
        States.setCurrentPage(4);
    }]);
