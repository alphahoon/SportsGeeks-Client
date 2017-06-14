'use strict';

/**
 * @ngdoc service
 * @name SportsGeeksApp.Config
 * @description
 * # Config
 * Constant in the SportsGeeksApp.
 */
angular.module('SportsGeeksApp')
    .constant('Config', {
        url: 'http://52.78.29.175:9000/',
        apiKey: 'LM7JDrHT2RyzzW5D',
        utcOffset: 9,
        language: 'en'
    })
    .constant('moment', moment);
