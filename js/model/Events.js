/**
 * Created by Maxim on 14-10-2017.
 */
define(['lib/d3-4.10.2','model/Event'], function(d3, Event) {
    return function (eventPath) {
        var self = this;
        self.eventMap = {};

        // Build the formula map
        $.get(eventPath,
            function (rawText) {
                var data = d3.csvParse(rawText);
                data.forEach(function(d) {
                    self.eventMap[d.event_key.toLowerCase()] = new Event(d);
                });
                console.log("Reference events loaded");
            }
        );

        this.getEvent = function(eventKey) {
            return self.eventMap[eventKey.toLowerCase()];
        };
    }
});