'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:MyPageCtrl
 * @description
 * # MyPageCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('MyPageCtrl', ['$http', '$location', 'Config', 'States', function ($http, $location, Config, States) {
        States.setCurrentPage(8);
        var store = this;
        this.isLoggedIn = function () {
            return States.isLoggedIn();
        };
        this.username = function () {
            return States.username();
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
                    console.log('Successfully deleted account!');
                    store.status = res.data;
                    console.log(store.status);
                    $location.path('/');
                }, function (res) {
                    console.log('Error while deleting account!');
                    store.status = res.data;
                    console.log(store.status);
                    $location.path('/');
                });
        }
    }]);
