'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:SignInCtrl
 * @description
 * # SignInCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('SignInCtrl', ['$http', '$location', 'Config', 'States', 'Translation', function ($http, $location, Config, States, Translation) {
        States.setCurrentPage(7);
        this.user = {};
        var store = this;
        this.login = function () {
            $http({
                    url: Config.url + 'login',
                    method: 'POST',
                    params: {
                        apiKey: Config.apiKey
                    },
                    data: {
                        username: store.user.username,
                        password: store.user.password
                    }
                })
                .then(function (res) {
                    // console.log('Successfully logged in!');
                    store.status = res.data;
                    store.user.token = res.data.token;
                    store.user.email = res.data.email;
                    store.user.utcOffset = res.data.utcOffset;
                    store.user.language = res.data.language;
                    store.user.date = res.data.date;
                    // console.log(store.status);
                    States.login(store.user.username, store.user.password, store.user.token, store.user.email, store.user.utcOffset, store.user.language, store.user.date);
                    $location.path('/');
                }, function (res) {
                    console.log('Error while login!');
                    store.status = res.data;
                    console.log(store.status);
                    store.user = {};
                });
        };
        this.tr = function (msg) {
            return Translation.tr(msg, States.language());
        };
    }]);
