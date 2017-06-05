'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('NewsCtrl', ['States', 'Translation', function (States, Translation) {
        States.setCurrentPage(4);
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
