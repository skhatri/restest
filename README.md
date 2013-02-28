restest
=======

Lightweight Node based Rest Service tester



httpclient -> a simple wrapper around http. may be use request, may be no big deal.




*suite.js -> Test Suite file: example date_suite.js uses a pattern match to classify test_*.js files as test modules.

listener.js -> an event listener keeping count of passed and failed tests. does simple reporting.

runner.js -> calls httpclient as this is REST test remember. Before that, it processes the options that the individual
             test modules pass and extracts "name" to be used in reporting and proxies the handler so it can get pass
             listener events when test result is available for each test that is run.
             

test_*.js -> Each test module passes options to runner. three things it passes which are removed from the options thats
             passed to the http request are
             handler -> a function to handle the response. is usually a test method.
             name -> a name this test is identified by. runner will delete this attribute before sending to the httpclient.
             log -> a boolean flag to control printing of http headers and response body.
