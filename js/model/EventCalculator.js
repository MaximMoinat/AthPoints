/**
 * Created by Maxim Moinat.
 */
define(['lib/knockout-3.4.2','model/FormulaEvaluator'], function(ko, FormulaEvaluator) {
    return function(data, eventNamePrefix, formulas, events) {
        var self = this;
        // TODO: unpack data, like for Event => put constants in separate object
        this.event = events.getEvent(data.event);
        this.formulaEvaluator = new FormulaEvaluator(formulas.getFormula(data.formula), data);

        /* The observables */
        this.eventName = ko.observable(eventNamePrefix + " - " + this.event.getName());

        // Note: order of defining the function and using it is important. Can this be done better? This now gives spaghetti code...
        this.setSliderValue = function(value) {
            // has to be milliseconds and centimeters precision
            self.sliderValue(value);
        };

        this.sliderValue = ko.observable();
        // Note: slider thumbs are only correctly initialized when done via timeout. Even if the timeout is 0.
        setTimeout(this.setSliderValue, 0, self.event.getPerformanceDefault());

        this.getDisplayValue = function() {
            var displayVal = Math.round(self.sliderValue())/100;
            return displayVal.toLocaleString('en-US', {minimumFractionDigits: 2});
        };

        this.displayValue = ko.computed(this.getDisplayValue);

        this.points = ko.computed(function () {
            return self.formulaEvaluator.evaluate(this.sliderValue()/100);
        }, this);

        // TODO: for timed events, use speed as variable
        this.performanceMin = ko.observable(this.event.getPerformanceLowerBound());
        this.performanceMax = ko.observable(this.event.getPerformanceUpperBound());
    }
});