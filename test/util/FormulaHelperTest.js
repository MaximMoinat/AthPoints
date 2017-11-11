define(function (require) {

	// Import dependencies.
	var FormulaHelper = require("./FormulaHelper");

	// Define the QUnit module and lifecycle.
	QUnit.module("util/FormulaHelper", {
		setup: function () {
		},
		teardown: function () {
		}
	});

	// Define some testdata which we will consume in the following testcases; 
	// note this does not beling in the Setup method as our Game object is 
	// immutable and only needs to be created once.
	var testSet = {
	    formula: '(x + a) * b',
        a: 5,
        b: 7,
        x: 4.5,
        expected_formula: '(x + 5) * 7',
        expected_result: 66.5
	};

	var formulaHelper = new FormulaHelper();

    QUnit.test("Simple formula evaluation", function(assert) {
        var formula =  '(x + a) * b';
        var constants = { a: 5, b: 7};
        var formulaWithConstants = formulaHelper.insertConstants(formula, constants);
        assert.equal(formulaWithConstants, '(x + 5) * 7', "Constants inserted in formula");

        var result = formulaHelper.eval(5, formulaWithConstants);
        assert.deepEqual(result, 70, "Formula evaluated");
    });

    QUnit.test("Formula with decimals evaluation", function(assert) {
        var formula =  '(x + a) * b';
        var constants = { a: 5.43, b: 7.1333};
        var formulaWithConstants = formulaHelper.insertConstants(formula, constants);
        assert.equal(formulaWithConstants, '(x + 5.43) * 7.1333', "Constants inserted in formula");

        var result = formulaHelper.eval(5, formulaWithConstants);
        assert.deepEqual(result, 74.400319, "Formula evaluated");
    });

    QUnit.test("Formula with powers evaluation", function(assert) {
        var formula =  'a * x ** 2 - b ** 0.5';
        var constants = { a: 5, b: 9};
        var formulaWithConstants = formulaHelper.insertConstants(formula, constants);
        assert.equal(formulaWithConstants, '5 * x ** 2 - 9 ** 0.5', "Constants inserted in formula");

        var result = formulaHelper.eval(5, formulaWithConstants);
        assert.deepEqual(result, 122, "Formula evaluated");
    });
});