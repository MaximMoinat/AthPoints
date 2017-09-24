/**
 * Created by Maxim Moinat
 */
define(['lib/knockout-3.4.2', 'lib/d3-4.10.2', 'model/EventConstants', 'model/Formulas'], function(ko, d3, EventConstants, Formulas) {
    return function() {
        var self = this;
        self.csvData = ko.observable("");
        self.events = ko.observableArray([]);

        self.formulas = new Formulas("./resources/formulas.csv");


        // https://raw.githubusercontent.com/Atletieknu/atletiek-nu-scoring/master/parameters/men/field_men.csv
        $.get(
            "./resources/iaaf-combined/men.csv",
            function (rawText) {
                self.csvData(rawText);

                var data = d3.csvParse(rawText);
                var mappedEvents = $.map(data, function (item) {
                    return new EventConstants(item, self.formulas);
                });
                self.events(mappedEvents);
            }
        );
    };
});