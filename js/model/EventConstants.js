/**
 * Created by Maxim Moinat.
 */
define(['lib/knockout-3.4.2'], function(ko) {
    return function(data) {
        var self = this;
        this.eventName = ko.observable(data.event);
        // this.formulaName = ko.observable(data.formula);
        // this.mu = ko.observable(data.mu);
        // this.sigma = ko.observable(data.sigma);

        this.formula = "A*(x-B)^C".replace('A', data.A).replace('B', data.B).replace('C', data.C);

        this.x = ko.observable(25);
        this.points = ko.computed(function () {
            var x = this.x();
            return eval(this.formula);
        }, this);
    }
});