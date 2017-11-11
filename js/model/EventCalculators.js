/**
 * Created by Maxim on 14-10-2017.
 */
define(['lib/knockout-3.4.2', 'lib/d3-4.10.2','model/EventCalculator'], function(ko, d3, EventCalculator) {
    return function (formulas, events) {
        var self = this;
        this.calculatorLookup = {};
        this.calculatorArray = ko.observableArray([]);

        // TODO: load formulas and events from csv here instead of in calculatorApp.js?
        self.formulas = formulas;
        self.events = events;

        this.addFromConstants = function(constantsPath, prefix) {
            // https://raw.githubusercontent.com/Atletieknu/atletiek-nu-scoring/master/parameters/men/field_men.csv
            $.get(constantsPath,
                function (rawText) {
                    var data = d3.csvParse(rawText);
                    self.calculatorLookup[constantsPath] = {};
                    data.forEach(function(d) {
                        var eventCalculator = new EventCalculator(d, prefix, self.formulas, self.events);
                        if (eventCalculator.creationSuccessful) {
                            self.calculatorArray.push(eventCalculator);
                            self.calculatorLookup[constantsPath][eventCalculator.event.eventKey] = eventCalculator;
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
        };

        // TODO: create lookup via map (based on eventname, scoring system and category)
        this.get = function(eventKey) {
            // Hack to get function for certain event
            // Returns first event
            var path, eventCalculatorLookup;
            for(path in self.calculatorLookup) {
                if (!self.calculatorLookup.hasOwnProperty(path)) {
                    continue;
                }
                eventCalculatorLookup = self.calculatorLookup[path];
                if (eventCalculatorLookup.hasOwnProperty(eventKey)) {
                    return eventCalculatorLookup[eventKey];
                }
            }
            return null;
        };
    }
});