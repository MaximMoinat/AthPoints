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
        this.doFloorPoints = true;

        this.calculatePoints = function(performance, constants) {
            var formulaParsed = self.insertConstants(self.formulaPoints, constants);
            return self.eval(performance, formulaParsed, self.doFloorPoints);
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

        this.eval = function(x, formula, doFloor) {
            var result = eval(formula);
            if (isNaN(result)) {
                return 0;
            }

            if (doFloor) {
                result = Math.floor(result);
            }
            return result;
        };
    }
});