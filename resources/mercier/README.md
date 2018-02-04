# Mercier Scoring

Source: [Mercier Scoring Tables 1999: A How-To Guide](http://myweb.lmu.edu/jmureika/track/mercier/Merc99.html#field) by J. Mureika.

In contrast to the other formulas, the points are rounded up.

## Formulas
||To Points|To Performance|
|--|--|--|
|Timed Events|<img src="https://latex.codecogs.com/gif.latex?p=\frac{a\cdot\frac{d}{t}-b&plus;c}{y}" title="\frac{a\cdot\frac{d}{t}-b+c}{y}" />|<img src="https://latex.codecogs.com/gif.latex?t=\frac{d\cdot&space;a}{y\cdot&space;p-c&plus;b}" title="t=\frac{d\cdot a}{p\cdot y-c+b}" />
|Distance Events|<img src="https://latex.codecogs.com/gif.latex?p=\frac{a\cdot\sqrt{x}-b&plus;c}{y}" title="\frac{a\cdot\sqrt{x}-b+c}{y}" /> |<img src="https://latex.codecogs.com/gif.latex?x=\left(\frac{y\cdot&space;p-c&plus;b}{a}\right)^2" title="x=\left(\frac{p\cdot y-c+b}{a}\right)^2" />
|Points Events|<img src="https://latex.codecogs.com/gif.latex?p=\frac{a\cdot\rho-b&plus;c}{y}" title="\frac{a\cdot\rho}-b+c}{y}" />|<img src="https://latex.codecogs.com/gif.latex?\rho=\frac{y\cdot&space;p-c&plus;b}{a}" title="\rho=\frac{p\cdot y-c+b}{a}" />

`t` = time in seconds, `x` = distance in meters, `ρ` = combined events points, `p` =  mercier points

### Simplified form
The above formulas use the original constants. However, we can simplify these to get a better understanding of the relationships.

||To Points|To Performance|
|--|--|--|
|Timed Events|<img src="https://latex.codecogs.com/gif.latex?p=A\cdot\frac{d}{t}&plus;B" title="A\cdot\frac{d}{t}+B" />|<img src="https://latex.codecogs.com/gif.latex?t=A\cdot\frac{d}{p-B}" />
|Distance Events|<img src="https://latex.codecogs.com/gif.latex?p=A\cdot\sqrt{x}&plus;B" title="A\cdot\sqrt{x}+B" />|<img src="https://latex.codecogs.com/gif.latex?x=\left&space;(\frac{p-B}{A}\right&space;)^2" />
|Points Events|<img src="https://latex.codecogs.com/gif.latex?p=A\cdot&space;\rho&plus;B" title="A\cdot x+B" />|<img src="https://latex.codecogs.com/gif.latex?\rho=\frac{p-B}{A}" title="\rho=\frac{p-B}{A}" />

by defining `A` and `B` as:\
<img src="https://latex.codecogs.com/gif.latex?A=\frac{a}{y}" />\
<img src="https://latex.codecogs.com/gif.latex?B=\frac{c-b}{y}" />
