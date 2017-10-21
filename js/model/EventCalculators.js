/**
 * Created by Maxim on 14-10-2017.
 */
define(['lib/knockout-3.4.2', 'lib/d3-4.10.2','model/EventCalculator'], function(ko, d3, EventCalculator) {
    return function (formulas, events) {
        var self = this;
        this.calculatorArray = ko.observableArray([]);

        // TODO: load formulas and events from csv here instead of in calculatorApp.js?
        self.formulas = formulas;
        self.events = events;

        this.addFromConstants = function(constantsPath, prefix) {
            // https://raw.githubusercontent.com/Atletieknu/atletiek-nu-scoring/master/parameters/men/field_men.csv
            $.get(constantsPath,
                function (rawText) {
                    var data = d3.csvParse(rawText);
                    data.forEach(function(d) {
                        var eventCalculator = new EventCalculator(d, prefix, self.formulas, self.events);
                        if (eventCalculator.creationSuccessful) {
                            self.calculatorArray.push(eventCalculator)
                        }
                    });
                    console.log(prefix + " Event calculators loaded");
                }
            );
        };

        this.updateAllPoints = function(masterPoints) {
            var calculator;
            for(var i in self.calculatorArray()) {
                calculator = self.calculatorArray()[i];
                calculator.points(masterPoints);
            }
        }
    }
});