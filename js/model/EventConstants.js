/**
 * TODO: rename to EventCalculator?
 * Created by Maxim Moinat.
 */
define(['lib/knockout-3.4.2','model/Formula'], function(ko, Formula) {
    return function(data, formulas, refEvents) {
        var self = this;
        this.event = refEvents.getEvent(data.event);
        this.eventName = ko.observable(this.event.getName());

        // TODO: for timed events, use speed as variable
        this.performanceMin = ko.observable(this.event.getPerformanceLowerBound());
        this.performanceMax = ko.observable(this.event.getPerformanceUpperBound());

        // this.formula = "A*(x-B)^C".replace('A', data.A).replace('B', data.B).replace('C', data.C);
        var formulaString = formulas.getFormula(data.formula);
        this.formula = new Formula(formulaString, data);

        this.x = ko.observable(this.event.getReferencePerformance());
        this.points = ko.computed(function () {
            return self.formula.evaluate(this.x());
        }, this);
    }
});