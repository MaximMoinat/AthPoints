/**
 * Created by Maxim Moinat.
 */
define(['lib/knockout-3.4.2','model/Formula'], function(ko, Formula) {
    return function(data, formulas) {
        var self = this;
        this.eventName = ko.observable(data.event);
        // this.formulaName = ko.observable(data.formula);
        // this.mu = ko.observable(data.mu);
        // this.sigma = ko.observable(data.sigma);

        this.formula = "A*(x-B)^C".replace('A', data.A).replace('B', data.B).replace('C', data.C);
        var formulaString = formulas.getFormula(data.formula);
        this.formula = new Formula(formulaString, data);


        this.x = ko.observable(25);
        this.points = ko.computed(function () {
            return self.formula.evaluate(this.x());
        }, this);
    }
});