'use strict';

/**
 * @ngdoc function
 * @name tareasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tareasApp
 */
angular.module('tareasApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tareas = ['Item 1','Item 2','Item 3','Item 123'];
    $scope.addTarea = function(){
    	$scope.tareas.push($scope._tarea);
    	$scope._tarea='';
    }
    $scope.eliminarTarea = function(index){
    	$scope.tareas.splice(index,1);
    	$scope._tarea='';
    }
  });
