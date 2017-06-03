'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('HeaderCtrl', ['States', function (States) {
        this.isCurrentPage = function (page) {
            return States.isCurrentPage(page);
        };
        this.setCurrentPage = function (page) {
            States.setCurrentPage(page);
        };
    }]);
