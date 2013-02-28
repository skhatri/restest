var http = require('http');

var httpclient = (function () {

    var client = {

        send:function (options) {
            var responseHandler = options['handler'];
            delete options['handler'];
            var log = options['log'];
            delete options['log'];

            var request = http.request(options, function (response) {
                if (log) {
                    console.log("Status: " + response.statusCode);
                    for (var header in response.headers) {
                        console.log(header + " = " + response.headers[header]);
                    }
                }
                response.setEncoding('utf8');
                response.on('data', function (chunk) {
                    if (typeof responseHandler === 'function') {
                        if (log) {
                            console.log(chunk);
                        }
                        responseHandler(chunk);
                    }
                });
            });
            request.end();
        }
    };
    return client;
}());

module.exports = httpclient;

