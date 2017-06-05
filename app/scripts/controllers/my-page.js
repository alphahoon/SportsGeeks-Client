'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:MyPageCtrl
 * @description
 * # MyPageCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('MyPageCtrl', ['$http', '$location', 'Config', 'States', 'Translation', function ($http, $location, Config, States, Translation) {
        States.setCurrentPage(8);
        this.user = {
            utcOffset: States.utcOffset()
                .toString(),
            language: States.language()
        };
        var store = this;
        this.isLoggedIn = function () {
            return States.isLoggedIn();
        };
        this.getUserSettings = function () {
            store.user.utcOffset = States.utcOffset()
                .toString();
            store.user.language = States.language();
            $('#timezone')
                .val(States.utcOffset()
                    .toString());
            $('#language')
                .val(States.language());
        };
        this.updateSettings = function () {
            $http({
                    url: Config.url + 'settings',
                    method: 'POST',
                    params: {
                        apiKey: Config.apiKey,
                        token: States.token()
                    },
                    data: {
                        username: States.username(),
                        password: States.password(),
                        utcOffset: parseInt(store.user.utcOffset),
                        language: store.user.language
                    }
                })
                .then(function (res) {
                    console.log('Successfully updated the localization settings!');
                    store.status = res.data;
                    States.updateSettings(store.status.utcOffset, store.status.language);
                    console.log(store.status);
                    store.getUserSettings();
                }, function (res) {
                    console.log('Error while updating the localization settings!');
                    store.status = res.data;
                    console.log(store.status);
                });
        };
        this.deleteAccount = function () {
            var tmpUsername = States.username();
            var tmpPassword = States.password();
            var tmpToken = States.token();
            States.logout();

            $http({
                    url: Config.url + 'delete-account',
                    method: 'POST',
                    params: {
                        apiKey: Config.apiKey,
                        token: tmpToken
                    },
                    data: {
                        username: tmpUsername,
                        password: tmpPassword
                    }
                })
                .then(function (res) {
                    // console.log('Successfully deleted account!');
                    store.status = res.data;
                    // console.log(store.status);
                    $location.path('/');
                }, function (res) {
                    console.log('Error while deleting account!');
                    store.status = res.data;
                    console.log(store.status);
                    $location.path('/');
                });
        };
        this.username = function () {
            return States.username();
        };
        this.email = function () {
            return States.email();
        };
        this.date = function () {
            return Translation.date(States.date(), States.utcOffset(), States.language());
        };
        this.tr = function (msg) {
            return Translation.tr(msg, States.language());
        };
        this.getUserSettings();
    }]);
