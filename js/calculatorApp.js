/**
 * Created by Maxim Moinat
 */
define(['lib/knockout-3.4.2', 'lib/d3-4.10.2', 'model/EventConstants', 'model/Formulas', 'model/Events'],
    function(ko, d3, EventConstants, Formulas, Events) {
        return function() {
            var self = this;
            self.csvData = ko.observable("");
            self.eventCalculators = ko.observableArray([]);

            // Load all csv files
            self.formulas = new Formulas("./resources/formulas.csv");
            self.events = new Events("./resources/events.csv");
            // TODO: wait until loading has finished

            // https://raw.githubusercontent.com/Atletieknu/atletiek-nu-scoring/master/parameters/men/field_men.csv
            // TODO: wrap this in a separate class, taking formulas and referencePerformance events as input
            $.get(
                "./resources/iaaf-combined/men.csv",
                function (rawText) {
                    self.csvData(rawText);

                    var data = d3.csvParse(rawText);
                    var mappedEvents = $.map(data, function (item) {
                        return new EventConstants(item, self.formulas, self.events);
                    });
                    self.eventCalculators(mappedEvents);
                    console.log("Event calculators loaded");
                }
            );
        };
    }
);