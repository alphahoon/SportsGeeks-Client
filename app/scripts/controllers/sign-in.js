'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:SignInCtrl
 * @description
 * # SignInCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('SignInCtrl', ['$http', '$location', 'Config', 'States', function ($http, $location, Config, States) {
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
                    console.log('Successfully logged in!');
                    store.status = res.data;
                    console.log(store.status);
                    States.login(store.user.username, store.user.password);
                    $location.path('/');
                }, function (res) {
                    console.log('Error while login!');
                    store.status = res.data;
                    console.log(store.status);
                    store.user = {};
                });
        };
    }]);
