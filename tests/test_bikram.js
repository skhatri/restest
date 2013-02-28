var Assert = require('./../assert');

var testBsDate = function (data) {
    var response = JSON.parse(data);
    Assert.assertTrue(response.date.dt === 'AD');
    Assert.assertTrue(response.date.year == 2013);

};

var options = {
    host:"bsdate.cloudfoundry.com",
    port:80,
    path:"/bikram/2069/12/14",
    method:"GET",

    handler:testBsDate,
    log:false,
    name: "test bikram to ad"
};


module.exports = {
    run: function() {
        require('./../runner').run(options);
    }
};
