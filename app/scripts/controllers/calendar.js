'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('CalendarCtrl', ['$scope', '$rootScope', 'States', 'Translation', function ($scope, $rootScope, States, Translation) {
        States.setCurrentPage(2);

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
