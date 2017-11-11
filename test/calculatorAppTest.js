define(function (require) {

    // Import dependencies.
    var $ = require('./lib/jquery-3.2.1');
    var Formulas = require("./model/Formulas");
    var Events = require("./model/Events");
    var EventCalculators = require("./model/EventCalculators");

    // Define the QUnit module and lifecycle.
    QUnit.module("./calculatorApp", {
        beforeEach: function( assert ) {
            eventCalculators = new EventCalculators(formulas, events);
        },
        setup: function () {
        },
        teardown: function () {
        }
    });

    var formulas = new Formulas("../resources/formulas.csv");
    var events = new Events("../resources/events.csv");

    var eventCalculators = new EventCalculators(formulas, events);

    QUnit.test("Calculations for the AtletiekUnie points system", function(assert) {
        eventCalculators.addFromConstants("../resources/atletiekunie/men.csv", "AU - Men");
        var testCases = [
            {eventName: 'TRACK_100', performance: 10, points: 1073}
            ,{eventName: 'DISCUS_THROW', performance: 25, points: 355}
            ,{eventName: 'SHOT_PUT', performance: 20, points: 1066}
            ,{eventName: 'HIGH_JUMP', performance: 1.6, points: 492}
        ];
        var testCase, eventCalculator, calculatedPoints, calculatedPerformance;
        for(var i in testCases) {
            testCase = testCases[i];
            eventCalculator = eventCalculators.get(testCase.eventName);
            calculatedPoints = eventCalculator.formula.calculatePoints(testCase.performance);
            assert.deepEqual(calculatedPoints, testCase.points, "Points calculated for " + testCase.eventName);

            calculatedPerformance = eventCalculator.formula.calculatePerformance(testCase.points);
            calculatedPerformance = calculatedPerformance.toPrecision(2);
            assert.equal(calculatedPerformance, testCase.performance, "Performance calculated for " + testCase.eventName);
        }
    });

    QUnit.test("Calculations for the Mercier points system", function(assert) {
        eventCalculators.addFromConstants("../resources/mercier/men.csv", "Mercier - Men");
        var testCases = [
            {eventName: 'TRACK_100', performance: 10, points: 953}
            ,{eventName: 'DISCUS_THROW', performance: 25, points: 345}
            ,{eventName: 'SHOT_PUT', performance: 20, points: 926}
            ,{eventName: 'HIGH_JUMP', performance: 1.6, points: 371}
        ];

        var testCase, eventCalculator, calculatedPoints, calculatedPerformance;
        for(var i in testCases) {
            testCase = testCases[i];
            eventCalculator = eventCalculators.get(testCase.eventName);

            // To points
            calculatedPoints = eventCalculator.formula.calculatePoints(testCase.performance);
            assert.deepEqual(calculatedPoints, testCase.points, "Points calculated for " + testCase.eventName);

            // To performance
            calculatedPerformance = eventCalculator.formula.calculatePerformance(testCase.points);
            calculatedPerformance = calculatedPerformance.toPrecision(2);
            assert.equal(calculatedPerformance, testCase.performance, "Performance calculated for " + testCase.eventName);
        }
    });

});