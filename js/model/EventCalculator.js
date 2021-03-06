/**
 * Created by Maxim Moinat.
 */
define(['lib/knockout-3.4.2', 'util/Time'], function(ko, Time) {
    return function(data, eventNamePrefix, formulas, events) {
        var self = this;
        this.creationSuccessful = true;

        this.event = events.get(data.event);
        if (typeof this.event === 'undefined') {
            console.log("Event " + data.event + " was not recognised.")
            this.creationSuccessful = false;
            return;
        }

        // Create a new formula object
        this.formula = $.extend({},formulas.get(data.formula));
        if (typeof this.formula === 'undefined') {
            console.log("Formula " + data.formula + " was not recognised.")
            this.creationSuccessful = false;
            return;
        }

        this.constants = data; // TODO: remove the other properties from the object
        this.constants.d = this.event.getDistance(); //
        this.formula.buildConstants(this.event, this.constants);

        var timeParser = new Time();

        // Note: order of defining the function and using it is important. Can this be done better? This now gives spaghetti code...
        this.setPerformance = function(performance) {
            // has to be milliseconds and centimeters precision
            self.performance(performance * 100);
        };

        this.getPerformance = function() {
            return self.performance()/100;
        };

        this.formatPerformance = function(performance) {
            if (self.event.isTimed()) {
                return timeParser.toHMS(performance);
            }
            return performance.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        };

        /**
         *  The observables
         */
        this.eventName = ko.observable(eventNamePrefix + " - " + this.event.getName());

        // Performance and points as input
        this.performance = ko.observable();
        this.points = ko.observable();

        // Performance and points as output
        this.performanceOutput = ko.computed(function () {
            return this.formula.calculatePerformance(this.points()) * 100;
        }, this);
        this.pointsOutput = ko.computed(function () {
            return this.formula.calculatePoints(this.getPerformance());
        }, this);

        // Formatting of performance
        this.performanceInputFormatted = ko.pureComputed(function () {
            return this.formatPerformance(this.performance()/100);
        },this);
        this.performanceOutputFormatted = ko.pureComputed(function () {
            return this.formatPerformance(this.performanceOutput()/100);
        },this);

        // TODO: for timed events, use speed as variable so better performance is higher value
        this.performanceMin = ko.observable(this.event.getPerformanceLowerBound());
        this.performanceMax = ko.observable(this.event.getPerformanceUpperBound());

        var referencePoints = this.formula.calculatePoints(this.event.getReferencePerformance() / 100, this.constants)
        this.pointsMin = ko.observable(0);
        this.pointsMax = ko.observable(referencePoints);

        // Set slider defaults
        // Note: slider thumbs are only correctly initialized when done via timeout. Even if the timeout is 0.
        setTimeout(this.setPerformance, 0, this.event.getReferencePerformance() / 100);
        setTimeout(this.points, 0, referencePoints);
    }
});