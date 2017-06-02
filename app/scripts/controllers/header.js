'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('HeaderCtrl', function () {
        this.currentPage = 1;
        this.isCurrentPage = function (page) {
            return this.currentPage === page;
        };
        this.setPageCursor = function (page) {
            this.currentPage = page;
        };
    });
