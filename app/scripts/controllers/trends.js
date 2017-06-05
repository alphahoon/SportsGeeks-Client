'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:TrendsCtrl
 * @description
 * # TrendsCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('TrendsCtrl', ['$http', 'Config', 'States', 'Translation', function ($http, Config, States, Translation) {
        States.setCurrentPage(5);
        this.isLoggedIn = function () {
            return States.isLoggedIn();
        };
        this.username = function () {
            return States.username();
        };
        var store = this;
        this.getTrends = function () {
            $http({
                    url: Config.url + 'trends',
                    method: 'GET',
                    params: {
                        apiKey: Config.apiKey,
                        token: States.token()
                    }
                })
                .then(function (res) {
                    store.trends = res.data.trends;
                }, function (res) {
                    console.log('Error while retrieving trends!');
                    console.log(res.data);
                });
        };
        this.getTrends();
        this.getProgressClass = function (value) {
            if (value >= 75) {
                return 'progress-bar-danger';
            } else if (value >= 50) {
                return 'progress-bar-warning';
            } else if (value >= 25) {
                return 'progress-bar-success';
            } else if (value >= 0) {
                return 'progress-bar-info';
            }
        };
        this.date = function (date) {
            return Translation.date(date, States.utcOffset(), States.language());
        };
        this.tr = function (msg) {
            return Translation.tr(msg, States.language());
        };
    }]);
