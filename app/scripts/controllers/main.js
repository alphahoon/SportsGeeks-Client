'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('MainCtrl', ['$cookies', '$scope', '$rootScope', '$http', '$timeout', 'Config', 'States', 'Translation', function ($scope, $rootScope, $cookies, $http, $timeout, Config, States, Translation) {
        States.setCurrentPage(1);
        $scope.currentTime = Translation.currentTime(States.utcOffset(), States.language());
        $rootScope.schedules_list = [];

        var store = this;

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

        this.getSchedulesList = function () {
            $rootScope.schedules_list = [];
            var today = moment()
                .format('YYYY-MM-DD')
                .toString();
            for (var i in $rootScope.schedules) {
                var date = moment($rootScope.schedules[i].datetime)
                    .utcOffset(0)
                    .add(States.utcOffset(), 'hours')
                    .format('YYYY-MM-DD')
                    .toString();
                if (date == today) {
                    $rootScope.schedules_list.push($rootScope.schedules[i]);
                }
            }
        };

        $rootScope.$watch(function () {
            return $rootScope.schedules;
        }, function () {
            store.getSchedulesList();
        }, true);

        this.getDetail = function (keyword, keywordsSet) {
            for (var i in keywordsSet) {
                if (keyword == keywordsSet[i].id) {
                    return keywordsSet[i];
                }
            }
            return false;
        };

        this.getScheduleTime = function (date) {
            return Translation.date(date, States.utcOffset(), States.language());
        };
    }]);
