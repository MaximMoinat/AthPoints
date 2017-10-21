# AthPoints

This repository has two purposes:
 - standardize different scoring systems
 - provide interactive visualizations of these scoring systems
 
## Scoring systems
Every scoring system has two parts: the formula and the constants. In this repository, the data files for both are stored in csv format and can be found in the [`resources`](resources) folder.
This folder also contains a readme with an explanation if you want to contribute to this.

The following scoring systems are either incorporated are going to be incorporated:
 - [x] [IAAF combined events](resources/iaaf-combined)
 - [x] [IAAF Hungarian](resources/iaaf-hungarian)
 - [ ] Dutch AtletiekUnie Competition
 - [x] [Mercier](resources/mercier)
 - [x] [Howard Grubb percentage grading](resources/grubb)

## Technology
 - KnockoutJS, to create reactive pages with limited html
 - D3, to process csv and create plots
 - requireJS, to create the illusion of OOP with JS
 - Bootstrap, for pretty tables
 - Jquery, for get requests
 
## Contribute
You are welcome to ask questions, raise issues or contribute to this repository.
Contributing can be done on two areas:
 * develop javascript to create a new visualization
 * update/add to scoring systems