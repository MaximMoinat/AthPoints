/**
 * Created by Maxim Moinat
 */
define(['lib/knockout-3.4.2', 'lib/d3-4.10.2', 'model/EventCalculators', 'model/Formulas', 'model/Events'],
    function(ko, d3, EventCalculators, Formulas, Events) {
        return function() {
            var self = this;
            // Load all csv files, synchronously
            $.ajaxSetup({async:false}); // files have to be loaded sequentially
            this.formulas = new Formulas("./resources/formulas.csv");
            this.events = new Events("./resources/events.csv");
            $.ajaxSetup({async:true});

            this.eventCalculators = new EventCalculators(this.formulas, this.events);
            // this.eventCalculators.addFromConstants("./resources/iaaf-hungarian/women.csv", "Hungarian - Women");
            // this.eventCalculators.addFromConstants("./resources/iaaf-hungarian/men.csv", "Hungarian - Men");
            // this.eventCalculators.addFromConstants("./resources/iaaf-hungarian/men_indoor.csv", "Hungarian I - Men");
            // this.eventCalculators.addFromConstants("./resources/iaaf-hungarian/men_indoor.csv", "Hungarian I - Men");
            // this.eventCalculators.addFromConstants("./resources/mercier/women.csv", "Mercier - Women");
            // this.eventCalculators.addFromConstants("./resources/mercier/men.csv", "Mercier - Men");
            // this.eventCalculators.addFromConstants("./resources/iaaf-combined/men.csv", "Men");
            // this.eventCalculators.addFromConstants("./resources/iaaf-combined/women.csv", "IAAF - Women");
            this.eventCalculators.addFromConstants("./resources/grubb/men.csv", "% Men");
            // this.eventCalculators.addFromConstants("./resources/grubb/women.csv", "% - Women");

            // Observable to change the points input of all event calculators
            this.pointsMaster = ko.observable();
            this.pointsMaster.subscribe(function(points) {
                this.eventCalculators.updateAllPoints(points);
            }, this);
        };
    }
);