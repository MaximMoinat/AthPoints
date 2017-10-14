/**
 * Created by Maxim Moinat.
 */
define(['lib/knockout-3.4.2','model/FormulaEvaluator'], function(ko, FormulaEvaluator) {
    return function(data, eventNamePrefix, formulas, refEvents) {
        var self = this;
        // TODO: unpack data, like for Event
        this.event = refEvents.getEvent(data.event);
        this.formulaEvaluator = new FormulaEvaluator(formulas.getFormula(data.formula), data);

        /* The observables */
        this.eventName = ko.observable(eventNamePrefix + " - " + this.event.getName());
        this.x = ko.observable(this.event.getReferencePerformance());

        this.points = ko.computed(function () {
            return self.formulaEvaluator.evaluate(this.x());
        }, this);

        // TODO: for timed events, use speed as variable
        this.performanceMin = ko.observable(this.event.getPerformanceLowerBound());
        this.performanceMax = ko.observable(this.event.getPerformanceUpperBound());
    }
});