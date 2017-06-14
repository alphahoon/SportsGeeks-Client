'use strict';

/**
 * @ngdoc function
 * @name SportsGeeksApp.controller:DatepickerCtrl
 * @description
 * # DatepickerCtrl
 * Controller of the SportsGeeksApp
 */
angular.module('SportsGeeksApp')
    .controller('DatepickerCtrl', ['$scope', '$rootScope', '$locale', 'States', 'Translation', function ($scope, $rootScope, $locale, States, Translation) {
        $scope.today = function () {
            $scope.dt = moment()
                .toDate();
        };
        $scope.today();

        $scope.$watch(function () {
            return $scope.dt + States.language();
        }, function () {
            $rootScope.localBegin = moment($scope.dt)
                .set({
                    hour: 0,
                    minute: 0,
                    second: 0,
                    millisecond: 1
                })
                .utcOffset(0)
                .add(9, 'hours');
            console.log($rootScope.localBegin.format('LLLL'));
            $rootScope.utcBegin = moment($rootScope.localBegin)
                .subtract(States.utcOffset(), 'hours');
            $rootScope.utcEnd = moment($rootScope.utcBegin)
                .add(24, 'hours');
        }, true);

        $scope.options = {
            customClass: getDayClass,
            showWeeks: false
        };

        $scope.setDate = function (year, month, day) {
            $scope.dt = new Date(year, month, day);
        };

        var locales = {
            en: {
                "DATETIME_FORMATS": {
                    "AMPMS": [
                        "AM",
                        "PM"
                    ],
                    "DAY": [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ],
                    "ERANAMES": [
                        "Before Christ",
                        "Anno Domini"
                    ],
                    "ERAS": [
                        "BC",
                        "AD"
                    ],
                    "FIRSTDAYOFWEEK": 6,
                    "MONTH": [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ],
                    "SHORTDAY": [
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat"
                    ],
                    "SHORTMONTH": [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ],
                    "STANDALONEMONTH": [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ],
                    "WEEKENDRANGE": [
                        5,
                        6
                    ],
                    "fullDate": "EEEE, MMMM d, y",
                    "longDate": "MMMM d, y",
                    "medium": "MMM d, y h:mm:ss a",
                    "mediumDate": "MMM d, y",
                    "mediumTime": "h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    "shortDate": "M/d/yy",
                    "shortTime": "h:mm a"
                },
                "NUMBER_FORMATS": {
                    "CURRENCY_SYM": "$",
                    "DECIMAL_SEP": ".",
                    "GROUP_SEP": ",",
                    "PATTERNS": [{
                            "gSize": 3,
                            "lgSize": 3,
                            "maxFrac": 3,
                            "minFrac": 0,
                            "minInt": 1,
                            "negPre": "-",
                            "negSuf": "",
                            "posPre": "",
                            "posSuf": ""
                        },
                        {
                            "gSize": 3,
                            "lgSize": 3,
                            "maxFrac": 2,
                            "minFrac": 2,
                            "minInt": 1,
                            "negPre": "-\u00a4",
                            "negSuf": "",
                            "posPre": "\u00a4",
                            "posSuf": ""
                        }
                    ]
                },
                "id": "en-us",
                "localeID": "en_US"
            },
            kr: {
                "DATETIME_FORMATS": {
                    "AMPMS": [
                        "\uc624\uc804",
                        "\uc624\ud6c4"
                    ],
                    "DAY": [
                        "\uc77c\uc694\uc77c",
                        "\uc6d4\uc694\uc77c",
                        "\ud654\uc694\uc77c",
                        "\uc218\uc694\uc77c",
                        "\ubaa9\uc694\uc77c",
                        "\uae08\uc694\uc77c",
                        "\ud1a0\uc694\uc77c"
                    ],
                    "ERANAMES": [
                        "\uae30\uc6d0\uc804",
                        "\uc11c\uae30"
                    ],
                    "ERAS": [
                        "BC",
                        "AD"
                    ],
                    "FIRSTDAYOFWEEK": 6,
                    "MONTH": [
                        "1\uc6d4",
                        "2\uc6d4",
                        "3\uc6d4",
                        "4\uc6d4",
                        "5\uc6d4",
                        "6\uc6d4",
                        "7\uc6d4",
                        "8\uc6d4",
                        "9\uc6d4",
                        "10\uc6d4",
                        "11\uc6d4",
                        "12\uc6d4"
                    ],
                    "SHORTDAY": [
                        "\uc77c",
                        "\uc6d4",
                        "\ud654",
                        "\uc218",
                        "\ubaa9",
                        "\uae08",
                        "\ud1a0"
                    ],
                    "SHORTMONTH": [
                        "1\uc6d4",
                        "2\uc6d4",
                        "3\uc6d4",
                        "4\uc6d4",
                        "5\uc6d4",
                        "6\uc6d4",
                        "7\uc6d4",
                        "8\uc6d4",
                        "9\uc6d4",
                        "10\uc6d4",
                        "11\uc6d4",
                        "12\uc6d4"
                    ],
                    "STANDALONEMONTH": [
                        "1\uc6d4",
                        "2\uc6d4",
                        "3\uc6d4",
                        "4\uc6d4",
                        "5\uc6d4",
                        "6\uc6d4",
                        "7\uc6d4",
                        "8\uc6d4",
                        "9\uc6d4",
                        "10\uc6d4",
                        "11\uc6d4",
                        "12\uc6d4"
                    ],
                    "WEEKENDRANGE": [
                        5,
                        6
                    ],
                    "fullDate": "y\ub144 M\uc6d4 d\uc77c EEEE",
                    "longDate": "y\ub144 M\uc6d4 d\uc77c",
                    "medium": "y. M. d. a h:mm:ss",
                    "mediumDate": "y. M. d.",
                    "mediumTime": "a h:mm:ss",
                    "short": "yy. M. d. a h:mm",
                    "shortDate": "yy. M. d.",
                    "shortTime": "a h:mm"
                },
                "NUMBER_FORMATS": {
                    "CURRENCY_SYM": "\u20a9",
                    "DECIMAL_SEP": ".",
                    "GROUP_SEP": ",",
                    "PATTERNS": [{
                            "gSize": 3,
                            "lgSize": 3,
                            "maxFrac": 3,
                            "minFrac": 0,
                            "minInt": 1,
                            "negPre": "-",
                            "negSuf": "",
                            "posPre": "",
                            "posSuf": ""
                        },
                        {
                            "gSize": 3,
                            "lgSize": 3,
                            "maxFrac": 2,
                            "minFrac": 2,
                            "minInt": 1,
                            "negPre": "-\u00a4",
                            "negSuf": "",
                            "posPre": "\u00a4",
                            "posSuf": ""
                        }
                    ]
                },
                "id": "ko-kr",
                "localeID": "ko_KR"
            }
        };

        // locale change
        $scope.setLocale = function () {
            angular.copy(locales[States.language()], $locale);
            if (States.language() === 'en') {
                $scope.isEnLocale = true;
                $scope.isKrLocale = false;
            } else if (States.language() === 'kr') {
                $scope.isEnLocale = false;
                $scope.isKrLocale = true;
            }
        };
        $scope.setLocale();
        $scope.$watch(States.language, function () {
            $scope.setLocale();
        }, true);

        // events
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date(tomorrow);
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        $scope.events = [];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date)
                    .setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date)
                        .setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }

        this.tr = function (msg) {
            return Translation.tr(msg, States.language());
        };
    }]);
