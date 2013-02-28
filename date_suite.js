var fs = require('fs');
var listener = require('./listener');


var testPattern = /^(test.*)\.js$/;
(function () {
    console.log("Running Date Test Suite");
    fs.readdir('./tests', function (err, files) {
        if (err) {
            throw err;
        }

        files.forEach(function (file) {
            var matches = testPattern.exec(file);
            if (matches) {
                var matchedTest = matches[1];
                require('./tests/' + matchedTest).run();
            }
        });
    });
}());
