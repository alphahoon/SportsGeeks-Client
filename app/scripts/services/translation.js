'use strict';

/**
 * @ngdoc service
 * @name SportsGeeksApp.Translation
 * @description
 * # Translation
 * Factory in the SportsGeeksApp.
 */
angular.module('SportsGeeksApp')
    .factory('Translation', function () {
        var translation = {
            'English': {
                'en': 'English',
                'kr': '영어'
            },
            'Korean': {
                'en': 'Korean',
                'kr': '한국어'
            },
            'Unauthorized Access': {
                'en': 'Unauthorized Access',
                'kr': '허가되지 않은 접근'
            },
            'Toggle navigation': {
                'en': 'Toggle navigation',
                'kr': '네비게이션 토글'
            },
            'Today\'s Match': {
                'en': 'Today\'s Match',
                'kr': '오늘의 경기'
            },
            'Calendar': {
                'en': 'Calendar',
                'kr': '캘린더'
            },
            'Standings': {
                'en': 'Standings',
                'kr': '순위표'
            },
            'News': {
                'en': 'News',
                'kr': '뉴스'
            },
            'Trends': {
                'en': 'Trends',
                'kr': '트렌드'
            },
            'Sign Up': {
                'en': 'Sign Up',
                'kr': '가입하기'
            },
            'Sign In': {
                'en': 'Sign In',
                'kr': '로그인'
            },
            'Sign Out': {
                'en': 'Sign Out',
                'kr': '로그아웃'
            },
            'Language': {
                'en': 'Language',
                'kr': '언어'
            },
            'Timezone': {
                'en': 'Timezone',
                'kr': '타임존'
            },
            'Match Schedules': {
                'en': 'Match Schedules',
                'kr': '경기 일정'
            },
            'Hello': {
                'en': 'Hello',
                'kr': '안녕하세요'
            },
            'Top 30 Trending Keywords': {
                'en': 'Top 30 Trending Keywords',
                'kr': 'Top 30 트렌딩 키워드'
            },
            'Last updated at: ': {
                'en': 'Last updated at: ',
                'kr': '마지막 업데이트 시각: '
            },
            'This data has been collected by crawling the Google Trends.': {
                'en': 'This data has been collected by crawling the Google Trends.',
                'kr': '이 데이터는 구글 트렌드를 크롤링해서 수집되었습니다.'
            },
            'Welcome Back!': {
                'en': 'Welcome Back!',
                'kr': '돌아오신 것을 환영합니다!'
            },
            'Username': {
                'en': 'Username',
                'kr': '아이디'
            },
            'Password': {
                'en': 'Password',
                'kr': '비밀번호'
            },
            'is required': {
                'en': ' is required',
                'kr': '는 필수입니다'
            },
            'Email': {
                'en': 'Email',
                'kr': '이메일 주소'
            },
            'General Account Information': {
                'en': 'General Account Information',
                'kr': '일반 계정 정보'
            },
            'Registered at': {
                'en': 'Registered at',
                'kr': '가입 시각'
            },
            'My Account Settings': {
                'en': 'My Account Settings',
                'kr': '내 계정 설정'
            },
            'My Localization Settings': {
                'en': 'My Localization Settings',
                'kr': '내 현지화 설정'
            },
            'Delete My Account': {
                'en': 'Delete My Account',
                'kr': '탈퇴하기'
            },
            'Update': {
                'en': 'Update',
                'kr': '업데이트'
            },
            'My Preference Settings': {
                'en': 'My Preference Settings',
                'kr': '내 기호 설정'
            },
            'News View': {
                'en': 'News View',
                'kr': '뉴스'
            },
            'E-mail': {
                'en': 'E-mail',
                'kr': '이메일 주소'
            },
            'Create Your Account!': {
                'en': 'Create Your Account!',
                'kr': '당신의 계정을 만드세요!'
            },
            'League Standings': {
                'en': 'League Standings',
                'kr': '리그 순위표'
            },
            'Current Time': {
                'en': 'Current Time',
                'kr': '현재 시각'
            }
        };
        return {
            tr: function (msg, language) {
                return translation[msg][language];
            },
            date: function (date, utcOffset, language) {
                // console.log(utcOffset);
                var dateTime = moment(date)
                    .locale(language)
                    .utcOffset(0)
                    .add(utcOffset, 'hours')
                    .format('LLLL');
                // console.log(dateTime);
                return dateTime;
            },
            customDate: function (date, utcOffset, language, format) {
                var dateTime = moment(date)
                    .locale(language)
                    .utcOffset(0)
                    .add(utcOffset, 'hours')
                    .format(format);
                return dateTime;
            },
            currentTime: function (utcOffset, language) {
                var temp = moment()
                    .locale(language)
                    .utcOffset(0)
                    .add(utcOffset, 'hours')
                    .format('LLLL');
                var mmss = moment()
                    .locale(language)
                    .utcOffset(0)
                    .add(utcOffset, 'hours')
                    .format(':mm:ss');
                var begin = temp.indexOf(':');
                var end = begin + 2;
                return temp.substr(0, begin) + mmss + temp.substr(end + 1);
            }
        };
    });
