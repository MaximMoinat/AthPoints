# IAAF combined events scoring
The official IAAF scoring for combined events.

Source: [IAAF Rules and Regulations](iaaf.org)

The throw and jump events have a separate formula, because in the original formulas the jumps formula had centimeters as input instead of meters as for the throw events.

## Formulas
||To points|To performance|
|--|--|--|
|Timed Events | <img src="https://latex.codecogs.com/gif.latex?p=a\cdot&space;(b-t)^c" />|<img src="https://latex.codecogs.com/gif.latex?t=b-\sqrt[c]{\frac{p}{a}}" />|
|Throw Events | <img src="https://latex.codecogs.com/gif.latex?p=a\cdot&space;(x-b)^c" />|<img src="https://latex.codecogs.com/gif.latex?x=b+\sqrt[c]{\frac{p}{a}}"  />|
|Jump Events | <img src="https://latex.codecogs.com/gif.latex?p=a\cdot&space;(x\cdot100-b)^c" />|<img src="https://latex.codecogs.com/gif.latex?x=\frac{b+\sqrt[c]{\frac{p}{a}}}{100}" />|

`t` = time in seconds, `x` = distance in meters, `p` =  points
