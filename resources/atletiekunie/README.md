# Atletiek Unie scoring for club competition
Both scoring for the men and women, as well as the Under 16 category ('Junioren C/D') and Under 12 category ('Pupillen').


Source: [Atletiek Unie](atletiek.nl)

## Formulas
||||
|--|--|--|
|Timed Events | <img src="https://latex.codecogs.com/gif.latex?\frac{a}{t}-b" title="\frac{a}{t}-b" />|<img src="https://latex.codecogs.com/gif.latex?\frac{a}{p&plus;b}" title="\frac{a}{p+b}" />|
|Distance Events | <img src="https://latex.codecogs.com/gif.latex?a\cdot\sqrt{x}-b" title="a\cdot\sqrt{x}-b" />|<img src="https://latex.codecogs.com/gif.latex?\left(\frac{p&plus;b}{a}\right)^{2}" title="\left(\frac{p+b}{a}\right)^{2}" />|

`t` = time in seconds, `x` = distance in meters, `p` =  points

Note that the following events have an aberrant scoring for performances under a certain limit.
This aberrant scoring is **NOT** implemented.

|event|file|implemented?|
|--|--|--|
|High jump|women.csv|no|
|High jump|U16.csv|no|
|Long jump|U16.csv|no|
|High jump|U12.csv|no|
|Long jump|U12.csv|no|

