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
        var isLoggedIn = false;
        var username = null;
        var password = null;

        // Public API here
        return {
            isCurrentPage: function (page) {
                return currentPage === page;
            },
            setCurrentPage: function (page) {
                currentPage = page;
            },
            isLoggedIn: function () {
                return isLoggedIn;
            },
            login: function (_username, _password) {
                if (!isLoggedIn) {
                    username = _username;
                    password = _password;
                    isLoggedIn = true;
                    console.log('Updated the States');
                } else {
                    console.log('You are already logged in!');
                }
            },
            logout: function () {
                if (isLoggedIn) {
                    username = null;
                    password = null;
                    isLoggedIn = false;
                    console.log('Updated the States');
                } else {
                    console.log('You are not logged in!');
                }
            },
            username: function () {
                return username;
            },
            password: function () {
                return password;
            }
        };
    });
