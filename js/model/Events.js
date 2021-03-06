/**
 * Created by Maxim on 14-10-2017.
 */
define(['lib/d3-4.10.2','model/Event'], function(d3, Event) {
    return function (eventPath) {
        var self = this;
        self.eventMap = {};

        $.ajaxSetup({async:false}); // files have to be loaded sequentially

        $.get(eventPath,
            function (rawText) {
                var data = d3.csvParse(rawText);
                data.forEach(function(d) {
                    self.eventMap[d.event_key.toLowerCase()] = new Event(d);
                });
                console.log("Reference events loaded");
            }
        );

        this.get = function(eventKey) {
            return self.eventMap[eventKey.toLowerCase()];
        };
    }
});