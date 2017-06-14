'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:StandingsCtrl
 * @description
 * # StandingsCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('StandingsCtrl', ['$scope', '$http', '$rootScope', 'States', 'Config', 'Translation', function ($scope, $http, $rootScope, States, Config, Translation) {
        States.setCurrentPage(3);
        $scope.selected = {
            sport: null,
            league: null
        };
        var store = this;

        this.isLoggedIn = function () {
            return States.isLoggedIn();
        };
        this.username = function () {
            return States.username();
        };
        this.tr = function (msg) {
            return Translation.tr(msg, States.language());
        };
        this.selectSport = function (obj) {
            $scope.selected.sport = obj.id;
            $scope.selected.league = null;
            $rootScope.standingList = [];
        };
        this.selectLeague = function (obj) {
            $scope.selected.league = obj.id;
            store.getStandings();
        };
        this.getStandings = function () {
            $http({
                    url: Config.url + 'standings',
                    method: 'POST',
                    params: {
                        apiKey: Config.apiKey,
                        token: States.token()
                    },
                    data: {
                        league: $scope.selected.league
                    }
                })
                .then(function (res) {
                    // console.log('Successfully get the standings for ' + $scope.selected.league);
                    $rootScope.standingList = res.data.data;
                    // console.log($rootScope.standingList);
                }, function (res) {
                    console.log('Error while getting standings!');
                    store.status = res.data;
                    console.log(store.status);
                });
        };
        this.getDetail = function (keyword, keywordsSet) {
            for (var i in keywordsSet) {
                if (keyword == keywordsSet[i].id) {
                    return keywordsSet[i];
                }
            }
            return false;
        };
    }]);
