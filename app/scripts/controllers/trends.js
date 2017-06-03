'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:TrendsCtrl
 * @description
 * # TrendsCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('TrendsCtrl', ['$http', 'Config', 'States', function ($http, Config, States) {
        States.setCurrentPage(5);
        var store = this;
        this.getTrends = function () {
            $http({
                    url: Config.url + 'trends',
                    method: 'GET',
                    params: {
                        apiKey: Config.apiKey
                    }
                })
                .then(function (res) {
                    store.trends = res;
                    console.log(store.trends);
                }, function (res) {
                    console.log(res);
                });
        };
    }]);
