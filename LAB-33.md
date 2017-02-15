401 JS --  Lab 33 component bindings
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  
## Learning Objectives  
* Angular component binding
* Understand Container vs Presintation components

## Requirements  
#### Feature Tasks  
* refactor your gallery component to act like a `"container component"` and manage all state and methods
* add update and delete functions to the `galleryService` that make ajax requests to the backend
*  refactor your `gallery-create` component to have no controller and instead inhhert its state and callbacks from the gallery-container
* refactor your `gallery-list` commponent to be a `gallery-item` `"presintation"` component 
 * should inherrit a `gallery` through one way data binnding from the `gallery-container`
 * should inherrit a `deleteGallery` function through one way data binding from the `gallery-container`
 * should inherrit a `updateGallery` function through one way data binding from the `gallery-container`
* create a `gallery-update` component that will be used inside the `gallery-item` component
 
####  Documentation  
* Write an explination about the difference between `container` components and `presintation` components in your readme
* None

#### Testing  
* None

## Rubric  
* 2ps Configuration
* 3pts Feature Tasks
* 3pts Tests
* 2pts Documentation

<!-- links --> 
