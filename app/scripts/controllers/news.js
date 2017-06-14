'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('NewsCtrl', ['$scope', '$http', '$rootScope', 'States', 'Config', 'Translation', function ($scope, $http, $rootScope, States, Config, Translation) {
        States.setCurrentPage(4);

        $scope.selected = {
            sport: null,
            league: null,
            team: null
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
            $scope.selected.team = null;
        };
        this.selectLeague = function (obj) {
            $scope.selected.league = obj.id;
            $scope.selected.team = null;
        };
        this.selectTeam = function (obj) {
            $scope.selected.team = obj.id;
            store.getNews();
        };

        this.getNews = function () {
            $http({
                    url: Config.url + 'news',
                    method: 'POST',
                    params: {
                        apiKey: Config.apiKey,
                        token: States.token()
                    },
                    data: {
                        team: $scope.selected.team
                    }
                })
                .then(function (res) {
                    // console.log('Successfully get the standings for ' + $scope.selected.league);
                    // console.log(res.data);
                    $rootScope.newsList = res.data.articles;
                    // console.log($rootScope.newsList);
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
        this.getNewsTime = function (date) {
            return Translation.date(date, States.utcOffset(), States.language());
        };
    }]);
