'use strict';

import * as angular from 'angular/angular.min';

var modules = ['ngRoute', 'myApp.view1', 'myApp.view2', 'myApp.version', 'myApp.appService'];
modules.forEach((module) => angular.module(module, []));
angular.module('myApp', modules)
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
