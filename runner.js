var listener = require('./listener');

var testCase = {
    run:function (options) {
        var name = options['name'];
        var handler = options['handler'];
        var handlerWrapper = function (data) {
            try {
                handler(data);
                listener.emit('pass', name);
            } catch (e) {
                listener.emit('fail', name);
            }
        };
        options['handler'] = handlerWrapper;
        delete options['name'];
        require('./httpclient').send(options);
    }
};

module.exports = testCase;