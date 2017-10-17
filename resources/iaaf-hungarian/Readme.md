# IAAF Hungarian Scoring 2017

Source: the original tables in pdf format can be found on [the IAAF website](https://www.iaaf.org/about-iaaf/documents/technical).

The constants have been calculated from these tables by a Java script provided in [this Github repository](https://www.github.com/maximmoinat/ScoringTablesIAAF).

Indoor events are scored differently and therefore a separate set of tables is given for Indoor events.

## Formulas
In contrast to the other scoring systems, there is just one formula to calculate points.
On the other hand, the formula to calculate performance is slightly different for timed and distance events. This is due to the square root in the formula that only returns the positive result. For timed events this should be the negative result.

||||
|--|--|--|
|Timed Events | `a * (x + b)^2 + c` | `-1 * √((x - c) / a) - b` |
|Distance Events | `a * (x + b)^2 + c` | `√((x - c) / a) - b` |

