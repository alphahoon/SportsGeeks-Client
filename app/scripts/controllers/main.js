'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('MainCtrl', ['$cookies', '$scope', '$rootScope', 'States', 'Translation', function ($scope, $rootScope, $cookies, States, Translation) {
        States.setCurrentPage(1);
        $scope.currentTime = Translation.currentTime(States.utcOffset(), States.language());
        this.isLoggedIn = function () {
            return States.isLoggedIn();
        };
        this.username = function () {
            return States.username();
        };
        this.date = function (date) {
            return Translation.date(date, States.utcOffset(), States.language());
        };
        this.tr = function (msg) {
            return Translation.tr(msg, States.language());
        };
        this.getCurrentTime = function () {
            return $scope.currentTime;
        };
        setInterval(function () {
            $rootScope.$apply(function () {
                $scope.currentTime = Translation.currentTime(States.utcOffset(), States.language());
            });
        }, 1000);
    }]);
