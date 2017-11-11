(function () {
    // Configure RequireJS so it resolves relative module paths from the `src`
	// folder.
    require.config({
        baseUrl: "../js"
    });

	// A list of all QUnit test Modules.  Make sure you include the `.js` 
	// extension so RequireJS resolves them as relative paths rather than using
	// the `baseUrl` value supplied above.
	var testModules = [
		"./calculatorAppTest.js"
		,"./util/FormulaHelperTest.js"
        ,"./model/EventCalculatorTest.js"
	];
	
    // Resolve all testModules and then start the Test Runner.
	require(testModules, function(){
        QUnit.load();
        QUnit.start();
	});
}());

