'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:SignUpCtrl
 * @description
 * # SignUpCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('SignUpCtrl', ['$http', '$location', 'Config', 'States', function ($http, $location, Config, States) {
        States.setCurrentPage(6);
        const defaultSetting = {
            utcOffset: Config.utcOffset,
            language: Config.language
        };
        this.user = defaultSetting;
        var store = this;
        this.register = function () {
            $http({
                    url: Config.url + 'register',
                    method: 'POST',
                    params: {
                        apiKey: Config.apiKey
                    },
                    data: {
                        username: store.user.username,
                        password: store.user.password,
                        email: store.user.email,
                        utcOffset: store.user.utcOffset,
                        language: store.user.language
                    }
                })
                .then(function (res) {
                    // console.log('Successfully registered!');
                    store.status = res.data;
                    // console.log(store.status);
                    $location.path('/sign-in');
                }, function (res) {
                    console.log('Error while register!');
                    store.status = res.data;
                    console.log(store.status);
                    store.user = defaultSetting;
                });
        };
    }]);
