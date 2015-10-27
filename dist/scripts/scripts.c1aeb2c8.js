"use strict";angular.module("tareasApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.sortable","LocalStorageModule"]).config(["localStorageServiceProvider",function(a){a.setPrefix("ls")}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("tareasApp").controller("MainCtrl",["$scope","localStorageService",function(a,b){var c=b.get("tareas");a.tareas=c&&c.split("\n")||[],a.$watch("tareas",function(){b.add("tareas",a.tareas.join("\n"))},!0),a.addTarea=function(){a.tareas.push(a._tarea),a._tarea=""},a.eliminarTarea=function(b){a.tareas.splice(b,1),a._tarea=""}}]),angular.module("tareasApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("tareasApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="container"> <h2>Mis tareas</h2> <form role="form" ng-submit="addTarea()"> <div class="row"> <div class="input-group"> <input type="text" ng-model="_tarea" placeholder="Qué tarea quieres añadir ??" class="form-control"> <span class="input-group-btn"> <input type="submit" class="btn btn-primary" value="Añadir"> </span> </div> </div> </form> <div ui-sortable ng-model="tareas"> <p class="input-group" ng-repeat="tarea in tareas" style="padding:5px 10px; cursor:move"> <input type="text" ng-model="tarea" class="form-control"> <span class="input-group-btn"> <button class="btn btn-danger" ng-click="eliminarTarea($index)" aria-label="Eliminar">X</button> </span> </p> </div> </div>')}]);