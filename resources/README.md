# Resources

There are two global data files to which the files with constants refer.

`events.csv` contains all events with a key, type, distance and a reference performance

`formulas.csv` contains all formulas. Each row contains a formula to calculate points from a performance and one to calculate performance from points, called `formula_points` and `formula_performance` respectively.
The value of the constants for each event are stored in separate csv files.

Some rules must be followed when adding or updating scoring systems. See below for the documentation. 

## Constants
Note that the constants in the csv files must have a distinct one character name. 
The characters are case sensitive.
Javascript Math functions can be used in the formulas, e.g. `Math.sqrt()` to calculate a square root. 

The following special character are reserved:
 - `x` for the variable (performance or points)
 - `d` for the distance of a track or road event
 
Otherwise conflicts may occur when replacing the constants with their numeric value.

## Formulas
Allowed rounding types:
 - `FLOOR`
 - `ROUND`
 - `CEIL`
 
## Events
Allowed performance types:
 - `TIME`
 - `DISTANCE`
 - `POINTS`