'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('HeaderCtrl', ['$scope', '$rootScope', '$http', '$route', '$location', 'Config', 'States', 'Translation', function ($scope, $rootScope, $http, $route, $location, Config, States, Translation) {
        $rootScope.receivedData = 0;

        $rootScope.trimmed = {};
        $rootScope.aliasMode = true;

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
        this.getList = function (aliasMode) {
            $rootScope.trimmed.sports = States.getTrimmedData('sports', aliasMode, States.language());
            $rootScope.trimmed.leagues = States.getTrimmedData('leagues', aliasMode, States.language());
            $rootScope.trimmed.teams = States.getTrimmedData('teams', aliasMode, States.language());
        };
        $rootScope.$watch(function () {
            return $rootScope.receivedData + $rootScope.aliasMode + States.language();
        }, function () {
            store.getList($rootScope.aliasMode);
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
                    console.log("Received Data!");
                    $rootScope.receivedData += 1;
                    States.setMainData(res.data);
                    store.getList($rootScope.aliasMode);
                }, function (res) {
                    console.log('Error while retrieving data!');
                    console.log(res.data);
                });
        };
        this.getMainData();
    }]);
