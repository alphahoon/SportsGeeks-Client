'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:StandingsCtrl
 * @description
 * # StandingsCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('StandingsCtrl', ['$scope', '$rootScope', 'States', 'Translation', function ($scope, $rootScope, States, Translation) {
        States.setCurrentPage(3);
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
        };
    }]);
