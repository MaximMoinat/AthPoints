/**
 * Created by Maxim on 15-10-2017.
 */
define(function() {
    return function (data) {
        var self = this;
        this.name = data.name;
        this.system = data.system;
        this.formulaPoints = data.formula_points;
        this.formulaPerformance = data.formula_performance;
        this.pointsRoundingType = data.rounding_type;

        this.calculatePoints = function(performance, constants) {
            var formulaParsed = self.insertConstants(self.formulaPoints, constants);
            var pointsRaw = self.eval(performance, formulaParsed);
            return this.doPointsRounding(pointsRaw);
        };

        this.calculatePerformance = function(points, constants) {
            var formulaParsed = self.insertConstants(self.formulaPerformance, constants);
            return self.eval(points, formulaParsed, false);
        };

        /** Static utility functions **/
        this.insertConstants = function(formula, constants) {
            var constantValue;
            var constantName;
            for (constantName in constants) {
                constantValue = constants[constantName];
                constantName = constantName;
                // TODO: only replace single characters with regex. (e.g. problem when using 'Math.sqrt' and the constant a)
                formula = formula.replace(constantName, constantValue);
            }
            return formula;
        };

        this.eval = function(x, formula) {
            var result = Number(eval(formula));
            if (isNaN(result)) {
                return 0;
            }
            return result;
        };

        this.doPointsRounding = function(result) {
            if (self.doFloorPoints()) {
                return Math.floor(result);
            } else if (self.doRoundPoints()) {
                return Math.round(result);
            } else if (self.doCeilPoints()) {
                return Math.ceil(result);
            }
        };

        // TODO: standardize the enums
        this.doFloorPoints = function() {
            return self.pointsRoundingType === "FLOOR";
        };

        this.doRoundPoints = function() {
            return self.pointsRoundingType === "ROUND";
        };

        this.doCeilPoints = function() {
            return self.pointsRoundingType === "CEIL";
        };
    }
});