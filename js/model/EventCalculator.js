/**
 * Created by Maxim Moinat.
 */
define(['lib/knockout-3.4.2','model/FormulaEvaluator'], function(ko, FormulaEvaluator) {
    return function(data, eventNamePrefix, formulas, events) {
        var self = this;
        // TODO: unpack data, like for Event
        this.event = events.getEvent(data.event);
        this.formulaEvaluator = new FormulaEvaluator(formulas.getFormula(data.formula), data);

        /* The observables */
        this.eventName = ko.observable(eventNamePrefix + " - " + this.event.getName());

        this.sliderValue = ko.observable(this.event.getPerformanceDefault());

        this.displayValue = ko.computed(function () {
           return Math.round(self.sliderValue())/100;
        });

        this.points = ko.computed(function () {
            return self.formulaEvaluator.evaluate(this.sliderValue()/100);
        }, this);

        // TODO: for timed events, use speed as variable
        this.performanceMin = ko.observable(this.event.getPerformanceLowerBound());
        this.performanceMax = ko.observable(this.event.getPerformanceUpperBound());

        // TODO: slider position is not correctly updated (all at min). Refresh sliders?
    }
});