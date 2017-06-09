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
        this.trimmed = {};
        this.selected = {
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
            this.trimmed.sports = States.getTrimmedData('sports', aliasMode, States.language());
            this.trimmed.leagues = States.getTrimmedData('leagues', aliasMode, States.language());
            this.trimmed.teams = States.getTrimmedData('teams', aliasMode, States.language());
        };
        $scope.$watch(function () {
            return States.mainData() + States.language() + store.aliasMode;
        }, function () {
            store.getList(store.aliasMode);
        }, true);
        this.selectSport = function (obj) {
            this.selected.sport = obj.id;
        };
        this.selectLeague = function (obj) {
            this.selected.league = obj.id;
        };
        this.selectTeam = function (obj) {
            this.selected.team = obj.id;
        };
    }]);
