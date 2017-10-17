/**
 * Created by Maxim on 14-10-2017.
 */
define(function() {
    return function (data) {
        this.eventKey = data.event_key;
        this.abbreviation = data.name_short;
        this.performanceType = data.type;
        this.eventDistance = Number(data.distance); // string
        this.referencePerformance = Number(data.wr); // string

        /**
         * @returns string
         */
        this.getName = function() {
            return this.abbreviation;
        };

        /**
         * In whole milliseconds or centimeters.
         * @returns float
         */
        this.getReferencePerformance = function() {
            if (this.isTimed()) {
                return Math.round(this.eventDistance / this.referencePerformance * 100);
            }
            // DISTANCE and POINTS types
            return Math.round(this.referencePerformance * 100);
        };

        /**
         * @returns float
         */
        this.getPerformanceLowerBound = function() {
            if (this.isTimed()) {
                return this.getReferencePerformance();
            }
            // DISTANCE and POINTS types
            return 0;
        };

        /**
         * @returns float
         */
        this.getPerformanceUpperBound = function() {
            if (this.isTimed()) {
                return 2 * this.getReferencePerformance();
            }
            // DISTANCE and POINTS types
            return this.getReferencePerformance();
        };

        this.getPerformanceDefault = function() {
            return Math.round((this.getPerformanceUpperBound() + this.getPerformanceLowerBound()) / 2);
        };

        // TODO: standardize the enums and use string equals
        this.isTimed = function() {
            return this.performanceType == 'TIME';
        };

        this.isDistance = function() {
            return this.performanceType == 'DISTANCE';
        };

        this.isScored = function() {
            return this.performanceType == 'POINTS';
        };
    }
});