# IAAF Hungarian Scoring 2017

Source: the original tables in pdf format can be found on [the IAAF website](https://www.iaaf.org/about-iaaf/documents/technical).

The constants have been calculated from these tables by a Java script provided in [this Github repository](https://www.github.com/maximmoinat/ScoringTablesIAAF).

Indoor events are scored differently and therefore a separate set of tables is given for Indoor events.

Points are rounded to the nearest integer (half up).

## Formulas
In contrast to the other scoring systems, there is just one formula to calculate points.
On the other hand, the formula to calculate performance is slightly different for timed and distance events. This is due to the square root in the formula that only returns the positive result. For timed events this should be the negative result.

||To Points|To Performance|
|--|--|--|
|Timed Events | <img src="https://latex.codecogs.com/gif.latex?p=a\cdot(t&plus;b)^2&plus;c" /> | <img src="https://latex.codecogs.com/gif.latex?t=-\sqrt{\frac{p-c}{a}}-b" /> |
|Distance Events | <img src="https://latex.codecogs.com/gif.latex?p=a\cdot(x&plus;b)^2&plus;c" /> | <img src="https://latex.codecogs.com/gif.latex?x=\sqrt{\frac{p-c}{a}}-b" /> |

`t` = time in seconds, `x` = distance in meters, `p` =  points
