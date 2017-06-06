'use strict';

/**
 * @ngdoc overview
 * @name SportsGeeksApp
 * @description
 * # SportsGeeksApp
 *
 * Main module of the application.
 */
angular
    .module('SportsGeeksApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngLocale',
        'ui.bootstrap'
    ])
    .config(function ($provide, $routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/calendar', {
                templateUrl: 'views/calendar.html',
                controller: 'CalendarCtrl',
                controllerAs: 'calendar'
            })
            .when('/standings', {
                templateUrl: 'views/standings.html',
                controller: 'StandingsCtrl',
                controllerAs: 'standings'
            })
            .when('/news', {
                templateUrl: 'views/news.html',
                controller: 'NewsCtrl',
                controllerAs: 'news'
            })
            .when('/trends', {
                templateUrl: 'views/trends.html',
                controller: 'TrendsCtrl',
                controllerAs: 'trends'
            })
            .when('/sign-in', {
                templateUrl: 'views/sign-in.html',
                controller: 'SignInCtrl',
                controllerAs: 'signIn'
            })
            .when('/sign-up', {
                templateUrl: 'views/sign-up.html',
                controller: 'SignUpCtrl',
                controllerAs: 'signUp'
            })
            .when('/my-page', {
                templateUrl: 'views/my-page.html',
                controller: 'MyPageCtrl',
                controllerAs: 'myPage'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.hashPrefix('');
    });
