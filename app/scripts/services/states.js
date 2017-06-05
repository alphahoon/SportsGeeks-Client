'use strict';

/**
 * @ngdoc service
 * @name SportsGeeksApp.States
 * @description
 * # States
 * Factory in the SportsGeeksApp.
 */
angular.module('SportsGeeksApp')
    .factory('States', ['$http', '$cookies', 'Config', function ($http, $cookies, Config) {
        // Service logic
        var currentPage = 1;
        var isLoggedIn = false;
        var username = null;
        var password = null;
        var token = null;
        var email = null;
        var utcOffset = Config.utcOffset;
        var language = Config.language;
        var date = null;
        var states = this;

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
            login: function (_username, _password, _token, _email, _utcOffset, _language, _date) {
                if (!isLoggedIn) {
                    username = _username;
                    password = _password;
                    token = _token;
                    email = _email;
                    utcOffset = _utcOffset;
                    language = _language;
                    date = _date;
                    isLoggedIn = true;
                    $cookies.put('username', username);
                    $cookies.put('password', password);
                    $cookies.put('token', token);
                    // console.log('Updated the States');
                } else {
                    console.log('You are already logged in!');
                }
            },
            logout: function () {
                if (isLoggedIn) {
                    username = null;
                    password = null;
                    token = null;
                    email = null;
                    utcOffset = Config.utcOffset;
                    language = Config.language;
                    date = null;
                    isLoggedIn = false;
                    $cookies.remove('username');
                    $cookies.remove('password');
                    $cookies.remove('token');
                    // console.log('Updated the States');
                } else {
                    console.log('You are not logged in!');
                }
            },
            cookieLogin: function () {
                if (!isLoggedIn) {
                    // console.log('Trying to login with cookies...');
                    var tmpUsername = $cookies.get('username');
                    var tmpPassword = $cookies.get('password');
                    var tmpToken = $cookies.get('token');
                    // console.log(tmpUsername);
                    // console.log(tmpPassword);
                    // console.log(tmpToken);
                    if (tmpUsername === undefined || tmpPassword === undefined || tmpToken === undefined) {
                        // If no cookies
                        // console.log('No cookies existing.');
                    } else {
                        // If cookie exists, try sign in
                        $http({
                                url: Config.url + 'login',
                                method: 'POST',
                                params: {
                                    apiKey: Config.apiKey
                                },
                                data: {
                                    username: tmpUsername,
                                    password: tmpPassword
                                }
                            })
                            .then(function (res) {
                                // console.log('Successfully logged in with cookie!');
                                states.status = res.data;
                                // console.log(states.status);
                                username = tmpUsername;
                                password = tmpPassword;
                                token = states.status.token;
                                email = states.status.email;
                                utcOffset = states.status.utcOffset;
                                language = states.status.language;
                                date = states.status.date;
                                isLoggedIn = true;
                                $cookies.put('username', username);
                                $cookies.put('password', password);
                                $cookies.put('token', token);
                                // console.log('Updated the States');

                            }, function (res) {
                                // console.log('Error while login with cookie!');
                                states.status = res.data;
                                // console.log(states.status);
                                $cookies.remove('username');
                                $cookies.remove('password');
                                $cookies.remove('token');
                                // console.log('Delted the invalid cookies!');
                            });
                    }
                }
            },
            updateSettings: function (_utcOffset, _language) {
                utcOffset = _utcOffset;
                language = _language;
            },
            setLanguage: function (_language) {
                language = _language;
            },
            username: function () {
                return username;
            },
            password: function () {
                return password;
            },
            token: function () {
                return token;
            },
            email: function () {
                return email;
            },
            utcOffset: function () {
                return utcOffset;
            },
            language: function () {
                return language;
            },
            date: function () {
                return date;
            }
        };
    }]);
