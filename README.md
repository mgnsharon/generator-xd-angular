generator-xd-angular
====================

Yeoman generator for creating AngularJS applications.
It currently serves as a project starter for my own projects, but I figured I would share in case anyone else finds it useful.

###Features
* Modularized AngularJS app structured by functionality, instead of type.
* Stripped down express 4 server ready to be configured anyway you choose.
* Gulp dev, tdd and test tasks
* Clientside jade partials built by gulp
* Clientside jade templates for views and directives compiled and added to the $templateCache
* Sass-Bootstrap, Compass, Font-Awesome pre-configured
* Generators for directive, view and factory get generated as separate modules with a passing mocha-chai test

###Prerequisites
* Compass
* Gulp
* Yeoman

###Generators
App generator:
```
yo xd-angular
```
creates an angular application in app directory
creates an express server in server directory
creates a gulpfile with dev, test and tdd tasks
creates karma configuration that can be used from gulp or webstorm
creates a starter README.md for your project
installs bower & npm modules

View generator:
```
yo xd-angular:view view-name
```
creates a new directory view-name in app/views
creates an angular controller and spec in that directory
creates a jade template
creates a sass file

Directive generator:
```
yo xd-angular:directive directive-name
```
creates a new directory directive-name in app/components
creates an angular directive and spec in that directory
creates a jade template
creates a sass file

Factory generator:
```
yo xd-angular:factory factory-name
```
creates a new directory factory-name in app/services
creates an angular service and spec in that directory

API generator:
```
yo xd-angular:api api-name baseUrl resourceName
```
creates a new directory api-name in app/api
creates a restangular service, mock data value, e2e mock and spec in that directory