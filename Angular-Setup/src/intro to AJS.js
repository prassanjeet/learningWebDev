"use strict";

angular.module('myApp',[]);

angular.module('myApp').controller('MainController',['$scope','$interval',function($scope,$interval){
    //part0
    console.log('Hello!');

    //part1
    $scope.message = "Hello";

    $scope.sayHello = function(name){
        return $scope.message + ' ' + name + '.';
    };

    //part2
    var items = ['bananas','apples','pears','cherries','peaches'];  // private variable
    $scope.itemIndex = null;
    $scope.currentItem = '';

    $scope.getItem = function(){
        $scope.currentItem = items[$scope.itemIndex];
    };

    $interval(function(){

        $scope.itemIndex = Math.round(Math.random()*(items.length - 1));
        $scope.getItem();
    }, 2000);   //2000 milliseconds

    //part3
    $scope.randomValue = -999;

    $scope.names = ['David','Thomas','Joe'];

    $scope.qty = 20;
    $scope.cost = 1.99;

    $scope.pWidth = 100;

    $interval(function(){
        $scope.randomValue = Math.round(Math.random()*1000000);
    }, 2000);
    
}]);
    
//part4
angular.module('myApp').controller('ParentController',['$scope',function($scope){
    // $scope.name = 'Nathha Shikari';
    $scope.model = {
        name : 'Nathha Shikari'
    };
}]);
angular.module('myApp').controller('ChildController',['$scope',function($scope){
    
}]);