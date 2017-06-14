'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('HeaderCtrl', ['$scope', '$rootScope', '$http', '$route', '$location', '$timeout', 'Config', 'States', 'Translation', function ($scope, $rootScope, $http, $route, $location, $timeout, Config, States, Translation) {
        $rootScope.receivedData = 0;
        $rootScope.trimmedData = 0;

        $rootScope.trimmed = {};
        $rootScope.schedules = [];
        $rootScope.pref = [];
        $rootScope.aliasMode = true;
        $rootScope.prefMode = false;

        var store = this;
        States.cookieLogin();
        this.isCurrentPage = function (page) {
            return States.isCurrentPage(page);
        };
        this.setCurrentPage = function (page) {
            States.setCurrentPage(page);
        };
        this.isLoggedIn = function () {
            return States.isLoggedIn();
        };
        this.username = function () {
            return States.username();
        };
        this.logout = function () {
            $http({
                    url: Config.url + 'logout',
                    method: 'GET',
                    params: {
                        apiKey: Config.apiKey
                    }
                })
                .then(function (res) {
                    // console.log('Successfully logged out!');
                    store.status = res.data;
                    // console.log(store.status);
                    States.logout();
                    $location.path('/');
                    $route.reload();
                }, function (res) {
                    // console.log('Error while logout!');
                    store.status = res.data;
                    // console.log(store.status);
                    States.logout();
                    $location.path('/');
                    $route.reload();
                });
        };
        this.setLanguage = function (language) {
            States.setLanguage(language);
        };
        this.tr = function (msg) {
            return Translation.tr(msg, States.language());
        };
        this.getKeywordsList = function (aliasMode) {
            $rootScope.trimmed.sports = States.getTrimmedData('sports', aliasMode, States.language());
            $rootScope.trimmed.leagues = States.getTrimmedData('leagues', aliasMode, States.language());
            $rootScope.trimmed.teams = States.getTrimmedData('teams', aliasMode, States.language());
            $rootScope.trimmedData++;
        };
        this.getSchedulesList = function (prefMode) {
            $rootScope.schedules = States.getSchedules(prefMode);
        };
        $rootScope.$watch(function () {
            return $rootScope.receivedData + $rootScope.aliasMode + States.language();
        }, function () {
            store.getKeywordsList($rootScope.aliasMode);
        }, true);
        $rootScope.$watch(function () {
            return $rootScope.receivedData + $rootScope.trimmedData + $rootScope.prefMode + States.getPref();
        }, function () {
            store.getSchedulesList($rootScope.prefMode);
        }, true);
        this.getMainData = function () {
            $http({
                    url: Config.url,
                    method: 'GET',
                    params: {
                        apiKey: Config.apiKey,
                        token: States.token()
                    }
                })
                .then(function (res) {
                    // console.log("Received Data!");
                    $rootScope.receivedData++;
                    States.setMainData(res.data);
                    // console.log(res.data);
                    store.getKeywordsList($rootScope.aliasMode);
                    store.getSchedulesList($rootScope.prefMode);
                }, function (res) {
                    console.log('Error while retrieving data!');
                    console.log(res.data);
                });
        };
        this.setAliasMode = function (mode) {
            if (mode == false) {
                $rootScope.aliasMode = false;
            } else {
                $rootScope.aliasMode = true;
            }
        };
        this.setPrefMode = function (mode) {
            if (mode == false) {
                $rootScope.prefMode = false;
            } else {
                $rootScope.prefMode = true;
            }
        };
        this.getMainData();
    }]);
