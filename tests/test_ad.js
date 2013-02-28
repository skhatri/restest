var Assert = require('./../assert');

var testAdDate = function (data) {
    var response = JSON.parse(data);
    Assert.assertTrue(response.date.dt === 'BS');
    Assert.assertTrue(response.date.year == 2069);
};

var options = {
    host:"bsdate.cloudfoundry.com",
    port:80,
    path:"/ad/2013/2/27",
    method:"GET",

    handler:testAdDate,
    log:false,
    name:"test ad to bs date"
};


module.exports = {
    run:function () {
        require('./../runner').run(options)
    }
};
