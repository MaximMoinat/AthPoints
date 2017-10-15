/**
 * Created by Maxim on 24-9-2017.
 */
define(['lib/d3-4.10.2', 'model/Formula'], function(d3, Formula) {
    return function (formulaPath) {
        var self = this;
        self.formulaMap = {};

        // Build the formula map
        $.get(formulaPath,
            function (rawText) {
                var data = d3.csvParse(rawText);
                data.forEach(function(d) {
                    self.formulaMap[d.name.toLowerCase()] = new Formula(d);
                });
                console.log("Formulas loaded");
            }
        );

        this.get = function(formulaName) {
            return self.formulaMap[formulaName.toLowerCase()];
        };
    }
});