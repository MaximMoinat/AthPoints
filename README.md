# AthPoints

This repository has two purposes:
 - standardize different scoring systems
 - provide interactive visualizations of these scoring systems
 
## Scoring systems
Every scoring system has two parts: the formula and the constants. 
In this repository, the data for both are stored in csv files.
All the formulas are stored in [`resources/formulas.csv`](resources/formulas.csv).
The constants are stored for every scoring system, gender and age category separeately.

The following scoring systems are either incorporated are going to be incorporated:
 - [x] [IAAF combined events](resources/iaaf-combined)
 - [] IAAF Hungarian
 - [] Dutch AtletiekUnie Competition
 - [] Mercier
 - [] Howard Grubb age grading

## Technology
 - KnockoutJS, to create reactive pages with limited html
 - D3, to process csv and create plots
 - requireJS, to create the illusion of OOP with JS
 - Bootstrap, for pretty tables
 - Jquery, for get requests
