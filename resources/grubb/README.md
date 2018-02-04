# Grubb Percentage 2015
Also know as WMA age grade.

Source: http://www.howardgrubb.co.uk/athletics/wmalookup15.html

The constants are meaningful:

`a` = world record at elite level in 2015

`b` = age grade. For now, this constant **is always 1** as we look at elite level.

The resulting points is the percentage of the world record, where 100 is the world record.

## Formulas
||To Points|To Performance|
|--|--|--|
|Timed Events | <img src="https://latex.codecogs.com/gif.latex?p=\frac{a}{b\cdot&space;t}&space;\cdot&space;100&space;\%" title="\frac{a}{t\cdot b} \cdot 100 \%" />| <img src="https://latex.codecogs.com/gif.latex?t=\frac{a}{b\cdot&space;p}&space;\cdot&space;100" title="\frac{a}{p\cdot b} \cdot 100" />
|Distance Events | <img src="https://latex.codecogs.com/gif.latex?p=\frac{b\cdot&space;x}{a}&space;\cdot&space;100&space;\%" />| <img src="https://latex.codecogs.com/gif.latex?x=\frac{a\cdot&space;p}{b}\cdot&space;100" />

`t` = time in seconds, `x` = distance in meters, `p` =  points
