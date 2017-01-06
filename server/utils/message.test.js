var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        from = 'john';
        text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude(from, text);
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        it('should generate correct location object', () => {
            var from = 'xyz',
            var latitude = 15;
            var longitude = 19;
            var url = 'http://www.google.com/maps?q=15=19';
            var message = generateLocationMessage(from, latitude, longitude);

            expect(message.createdAt).toBeA('number');
            expect(message).toInclude(from, url);
        })
    });
});