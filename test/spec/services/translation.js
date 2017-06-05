'use strict';

describe('Service: Translation', function () {

    // load the service's module
    beforeEach(module('SportsGeeksApp'));

    // instantiate service
    var translation;
    beforeEach(inject(function (_translation_) {
        translation = _translation_;
    }));

    it('should do something', function () {
        expect(!!Translation)
            .toBe(true);
    });

});
