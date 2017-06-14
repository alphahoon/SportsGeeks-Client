'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('CalendarCtrl', ['$scope', '$http', '$rootScope', 'States', 'Config', 'Translation', function ($scope, $http, $rootScope, States, Config, Translation) {
        States.setCurrentPage(2);
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

        this.getSchedules = function () {
            $http({
                    url: Config.url,
                    method: 'POST',
                    params: {
                        apiKey: Config.apiKey,
                        token: States.token()
                    },
                    data: {
                        begin: $rootScope.utcBegin,
                        end: $rootScope.utcEnd
                    }
                })
                .then(function (res) {
                    console.log('Successfully get the Schedules.');
                    var schedules = res.data.schedules;
                    $rootScope.schedules = [];
                    for (var i in schedules) {
                        $rootScope.schedules.push(schedules[i]);
                    }
                }, function (res) {
                    console.log('Error while getting standings!');
                    store.status = res.data;
                    console.log(store.status);
                });
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

        $rootScope.$watch(function () {
            return $rootScope.utcBegin;
        }, function () {
            store.getSchedules();
            console.log($rootScope.localBegin.toISOString());
            console.log($rootScope.utcBegin.toISOString());
        }, true);
    }]);
