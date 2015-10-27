'use strict';

/**
 * @ngdoc function
 * @name tareasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tareasApp
 */
angular.module('tareasApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
   
    var tareasEnAlmacen = localStorageService.get('tareas');
    $scope.tareas = tareasEnAlmacen && tareasEnAlmacen.split('\n') || [] ;
    $scope.$watch('tareas', function(){
        localStorageService.add('tareas', $scope.tareas.join('\n'));
    },true);
   // $scope.tareas = [];
    $scope.addTarea = function(){
    	$scope.tareas.push($scope._tarea);
    	$scope._tarea='';
    }
    $scope.eliminarTarea = function(index){
    	$scope.tareas.splice(index,1);
    	$scope._tarea='';
    }
  });
