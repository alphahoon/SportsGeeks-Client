'use strict';

/**
 * @ngdoc service
 * @name SportsGeeksApp.States
 * @description
 * # States
 * Factory in the SportsGeeksApp.
 */
angular.module('SportsGeeksApp')
    .factory('States', function () {
        // Service logic
        var currentPage = 1;

        // Public API here
        return {
            isCurrentPage: function (page) {
                return currentPage === page;
            },
            setCurrentPage: function (page) {
                currentPage = page;
            }
        };
    });
