'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('HeaderCtrl', ['$http', '$route', '$location', 'Config', 'States', 'Translation', function ($http, $route, $location, Config, States, Translation) {
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
                    States.setMainData(res.data);
                    console.log(States.mainData());
                }, function (res) {
                    console.log('Error while retrieving data!');
                    console.log(res.data);
                });
        };
        this.getMainData();
    }]);
