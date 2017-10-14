/**
 * Created by Maxim on 14-10-2017.
 */
define(function() {
    return function (data) {
        this.eventKey = data.event_key;
        this.abbreviation = data.name_short;
        this.performanceType = data.type;
        this.eventDistance = data.distance; // string
        this.referencePerformance = data.wr; // string

        /**
         * @returns string
         */
        this.getName = function() {
            return this.abbreviation;
        };

        /**
         * @returns float
         */
        this.getReferencePerformance = function() {
            if (this.distance == 'null') {
                return this.referencePerformance;
            }

            return this.eventDistance / this.referencePerformance;
        };

        /**
         * @returns float
         */
        this.getPerformanceLowerBound = function() {
            if (this.performanceType == 'TIME') {
                return this.getReferencePerformance();
            }
            // DISTANCE and POINTS types
            return 0;
        };

        /**
         * @returns float
         */
        this.getPerformanceUpperBound = function() {
            if (this.performanceType == 'TIME') {
                return 2 * this.getReferencePerformance();
            }
            // DISTANCE and POINTS types
            return this.getReferencePerformance();
        };
    }
});