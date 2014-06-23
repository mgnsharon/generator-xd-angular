<%= _.camelize(projectName) %>
=============================

####Requirements
* NodeJS
* Bower

####Installation
```bash
npm install
bower install
```

####Gulp Tasks
```bash
gulp dev  #Development - builds application, runs development server, watches for changes, runs tdd server

gulp tdd  #TDD - Test Driven Development, automatically runs mocha units tests as you edit files.

gulp test #Test - Run mocha unit tests using PhantomJS and exits

```
#### Technologies Used
* Client
  * [Angular JS](https://angularjs.org/)
  * [Bootstrap](http://getbootstrap.com/)
  * [Restangular](https://github.com/mgonto/restangular)
  * [Angular UI Router](https://github.com/angular-ui/ui-router)
  * [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
* Server
  * [Node JS](http://nodejs.org/)
  * [Express](http://expressjs.com/)
* Build Tools
  * [Bower](http://bower.io/)
  * [Jade](http://jade-lang.com/)
  * [Gulp](gulpjs.com)
  * [Sass](http://sass-lang.com/)
  * [Compass](http://compass-style.org/)
* Testing
  * [Karma](https://github.com/karma-runner/karma)
  * [Mocha](http://visionmedia.github.io/mocha/)
  * [Chai](http://chaijs.com/)