/**
 * Created by Maxim on 15-10-2017.
 */
define(['util/FormulaHelper'],function(FormulaHelper) {
    return function (data) {
        var self = this;
        this.helper = new FormulaHelper();
        this.name = data.name;
        this.system = data.system;
        this.formulaPoints = data.formula_points;
        this.formulaPerformance = data.formula_performance;
        this.pointsRoundingType = data.rounding_type;
        this.isBuild = false;
        this.event = null;
        this.formulaPointsParsed = null;
        this.formulaPerformanceParsed = null;
        this.zeroPointPerformance = null;

        this.buildConstants = function(event, constants) {
            this.event = event;
            this.formulaPointsParsed = this.helper.insertConstants(self.formulaPoints, constants);
            this.formulaPerformanceParsed = this.helper.insertConstants(self.formulaPerformance, constants);
            this.isBuild = true;
            this.zeroPointPerformance = this.calculatePerformance(0);
        };

        this.calculatePoints = function(performance) {
            if (!this.isBuild) {
                console.log("Formula object  " + this.name + " constants not build")
                return null;
            }

            // If timed performance worse than 0 point performance, set to zero points.
            // prevents e.g. points going up again or negative points.
            if (this.event.isTimed() && performance > this.zeroPointPerformance) {
                return 0;
            }

            var pointsRaw = this.helper.eval(performance, this.formulaPointsParsed);
            return this.doPointsRounding(pointsRaw);
        };

        this.calculatePerformance = function(points) {
            if (!this.isBuild) {
                console.log("Formula object " + this.name + " constants not build")
                return null;
            }
            return this.helper.eval(points, this.formulaPerformanceParsed);
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