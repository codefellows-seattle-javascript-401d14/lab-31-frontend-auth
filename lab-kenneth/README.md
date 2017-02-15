![cf](http://i.imgur.com/7v5ASc8.png) lab-27-slugram
====

# To Submit this Assignment
* fork this repository
* write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
* push to your repository
* submit a pull request to this repository
* submit a link to your PR in canvas
* write a question and observation on canvas

# Directions
* inclde an .eslintrc
* inclde an .eslintingore
* inclde a .gitignore
 * ignore the build directory
* include a package.json
 * must have watch script 
* inclde a webpack.config.js
 * include all the production configurations
* Create these directories to organize your code: 
 * app
 * app/scss
 * app/service
 * app/component
 * app/component/\<your-component-dir\>
* create a **bass.scss** file 

## Requirements
* create a landing component
  * with a template containing your signup and login components
* create a signup component
  * should have its own controller and use controllerAs syntax
  * should have a form with username, email, and password
  * should use the auth service to signup
* create a login component
  * should have its own controller and use controllerAs syntax
  * should have a form with username and password
  * should use the auth service to login 
