/**
 * Created by Maxim Moinat
 */
define(['lib/knockout-3.4.2', 'lib/d3-4.10.2', 'model/EventConstants'], function(ko, d3, EventConstants) {
    return function() {
        var self = this;
        self.csvData = ko.observable("");
        self.events = ko.observableArray([]);


        // https://raw.githubusercontent.com/Atletieknu/atletiek-nu-scoring/master/parameters/men/field_men.csv
        $.get(
            "./resources/iaaf-combined/men.csv",
            function (rawText) {
                self.csvData(rawText);

                var data = d3.csvParse(rawText);
                var mappedEvents = $.map(data, function (item) {
                    return new EventConstants(item)
                });
                self.events(mappedEvents);
            }
        );
    };
});