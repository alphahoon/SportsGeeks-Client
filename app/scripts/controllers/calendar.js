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
        $rootScope.schedules_date = [];
        var store = this;

        this.isLoggedIn = function () {
            return States.isLoggedIn();
        };
        this.username = function () {
            return States.username();
        };
        this.tr = function (msg) {
            return Translation.tr(msg, States.language());
        };

        this.getScheduleByDate = function (date) {
            $rootScope.schedules_date = [];
            var selected_date = moment(date)
                .format('YYYY-MM-DD')
                .toString();
            for (var i in $rootScope.schedules) {
                var date = moment($rootScope.schedules[i].datetime)
                    .utcOffset(0)
                    .add(States.utcOffset(), 'hours')
                    .format('YYYY-MM-DD')
                    .toString();
                if (date == selected_date) {
                    $rootScope.schedules_date.push($rootScope.schedules[i]);
                }
            }
        };

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

        this.getScheduleByDate(moment());
        $rootScope.$watch(function () {
            return $rootScope.localBegin;
        }, function () {
            store.getScheduleByDate($rootScope.localBegin);
        }, true);
    }]);
