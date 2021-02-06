'use strict';

import { Program } from "../models/program";
import * as angular from "angular/angular.min";

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'appStoreService', function($scope, appStoreService) {

    appStoreService.currentUser = appStoreService.getUsers(1);
    $scope.currentUser = appStoreService.currentUser;
    $scope.currentProgram = new Program();
    
}]);