# Atletiek Unie scoring for club competition
Both scoring for the men and women, as well as the Under 16 category ('Junioren C/D') and Under 12 category ('Pupillen').


Source: [Atletiek Unie](http://www.atletiek.nl)

## Formulas
||To Points|To Performance|
|--|--|--|
|Timed Events | <img src="https://latex.codecogs.com/gif.latex?p=\frac{a}{t}-b" />|<img src="https://latex.codecogs.com/gif.latex?t=\frac{a}{p&plus;b}" />|
|Distance Events | <img src="https://latex.codecogs.com/gif.latex?p=a\cdot\sqrt{x}-b" />|<img src="https://latex.codecogs.com/gif.latex?x=\left(\frac{p&plus;b}{a}\right)^{2}" />|

`t` = time in seconds, `x` = distance in meters, `p` =  points

# Note
The following events have an aberrant scoring for performances under a certain limit.
This aberrant scoring is **NOT** implemented.

|event|file|implemented?|
|--|--|--|
|High jump|women.csv|no|
|High jump|U16.csv|no|
|Long jump|U16.csv|no|
|High jump|U12.csv|no|
|Long jump|U12.csv|no|

