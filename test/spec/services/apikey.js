'use strict';

describe('Service: Server', function () {

    // load the service's module
    beforeEach(module('SportsGeeksApp'));

    // instantiate service
    var Server;
    beforeEach(inject(function (_Server_) {
        Server = Server;
    }));

    it('should do something', function () {
        expect(!!Server)
            .toBe(true);
    });

});
