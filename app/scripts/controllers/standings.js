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
        $scope.trimmed = {};
        $scope.selected = {
            sport: null,
            league: null,
            team: null
        };
        this.aliasMode = true;
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
        this.getList = function (aliasMode) {
            $scope.trimmed.sports = States.getTrimmedData('sports', aliasMode, States.language());
            $scope.trimmed.leagues = States.getTrimmedData('leagues', aliasMode, States.language());
            $scope.trimmed.teams = States.getTrimmedData('teams', aliasMode, States.language());
        };
        $scope.$watch(function () {
            return States.mainData() + States.language() + store.aliasMode;
        }, function () {
            store.getList(store.aliasMode);
        }, true);
        this.selectSport = function (obj) {
            $scope.selected.sport = obj.id;
        };
        this.selectLeague = function (obj) {
            $scope.selected.league = obj.id;
        };
        this.selectTeam = function (obj) {
            $scope.selected.team = obj.id;
        };
    }]);
