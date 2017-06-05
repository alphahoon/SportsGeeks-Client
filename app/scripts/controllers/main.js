'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('MainCtrl', ['$cookies', 'States', 'Translation', function ($cookies, States, Translation) {
        States.setCurrentPage(1);
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
