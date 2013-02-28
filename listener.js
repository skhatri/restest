var EventEmitter = require('events').EventEmitter;
var testListener = new EventEmitter();


var TestRunner = {
    skip:0,
    failed:[],
    passed:[]
};

testListener.on('fail', function(name){
    TestRunner.failed.push(name);
    console.log("\"" + name + "\" failed");
});
testListener.on("pass", function(name){
    TestRunner.passed.push(name);
    console.log("\"" + name + "\" passed");
});
testListener.on("report", function(reportStyle){
    console.log("Passed:");
    for (var testName in TestRunner.passed) {
        console.log(testName);
    }
    console.log("Failed:");
    for(var testName in TestRunner.failed) {
        console.log(testName);
    }
});


module.exports = testListener;