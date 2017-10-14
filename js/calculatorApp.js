/**
 * Created by Maxim Moinat
 */
define(['lib/knockout-3.4.2', 'lib/d3-4.10.2', 'model/EventCalculators', 'model/Formulas', 'model/Events'],
    function(ko, d3, EventCalculators, Formulas, Events) {
        return function() {
            // Load all csv files, synchronously
            $.ajaxSetup({async:false}); // files have to be loaded sequentially
            this.formulas = new Formulas("./resources/formulas.csv");
            this.events = new Events("./resources/events.csv");
            $.ajaxSetup({async:true});

            this.eventCalculators = new EventCalculators(this.formulas, this.events);
            this.eventCalculators.addFromConstants("./resources/iaaf-combined/men.csv", "Men");
            this.eventCalculators.addFromConstants("./resources/iaaf-combined/women.csv", "Women");
        };
    }
);