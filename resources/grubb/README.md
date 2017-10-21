# Grubb Percentage 2015
Also know as WMA age grade.

Source: http://www.howardgrubb.co.uk/athletics/wmalookup15.html

The constants are meaningful:

`a` = world record at elite level in 2015

`b` = age grade. For now, this constant **is always 1** as we look at elite level.

The resulting points is the percentage of the world record, where 100 is the world record.

## Formulas
||||
|--|--|--|
|Timed Events | `(100 * a) / (x * b)`| `(100 * a) / (x * b)`
|Distance Events | `(100 * x * b) / a`| `(x * a) / (100 * b)`