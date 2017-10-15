/**
 * Created by Maxim Moinat.
 */
define(['lib/knockout-3.4.2'], function(ko) {
    return function(data, eventNamePrefix, formulas, events) {
        var self = this;
        // TODO: unpack data, like for Event => put constants in separate object
        this.event = events.get(data.event);
        this.formula = formulas.get(data.formula);
        this.constants = data; // TODO: remove the other properties from the object

        // Note: order of defining the function and using it is important. Can this be done better? This now gives spaghetti code...
        this.setPerformance = function(performance) {
            // has to be milliseconds and centimeters precision
            self.performance(performance * 100);
        };

        this.getPerformance = function() {
            return self.performance()/100;
        };

        /* The observables */
        this.eventName = ko.observable(eventNamePrefix + " - " + this.event.getName());

        this.performance = ko.observable();
        // Note: slider thumbs are only correctly initialized when done via timeout. Even if the timeout is 0.
        setTimeout(this.setPerformance, 0, this.formula.calculatePerformance(1000, this.constants));

        this.getPerformanceAsString = function() {
            // TODO: display time as mm:ss.xx
            var displayVal = Math.round(self.performance())/100;
            return displayVal.toLocaleString('en-US', {minimumFractionDigits: 2});
        };

        this.performanceFormatted = ko.computed(this.getPerformanceAsString);

        this.pointsDependant = ko.computed(function () {
            return this.formula.calculatePoints(this.getPerformance(), this.constants);
        }, this);

        // TODO: for timed events, use speed as variable
        this.performanceMin = ko.observable(this.event.getPerformanceLowerBound());
        this.performanceMax = ko.observable(this.event.getPerformanceUpperBound());
    }
});