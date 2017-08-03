<<<<<<< HEAD
"use strict";

angular.module('myApp',[]);

//part2
angular.module('myApp').service('SharedService',function(){
    return{name: 'Bill Johnson'};
});
//part1
angular.module('myApp').controller('MainController',['$scope','$interval',function($scope,$interval){
    
}]);
    
//part1-2
angular.module('myApp').controller('ParentController',['$scope',function($scope){
    // $scope.name = 'Nathha Shikari';
    $scope.model = {
        name : 'Nathha Shikari'
    };
}]);

//part 1
angular.module('myApp').controller('ChildController',['$scope',function($scope){
    
}]);
angular.module('myApp').controller('indieController',['$scope',function($scope){
    $scope.model = {
        name : 'Michael Jaykison'
    };
}]);

//part 2
angular.module('myApp').controller('FirstController',['$scope','SharedService',function($scope,SharedService){
    // $scope.model = {
    //     name : 'Abish Mathew'
    // };
    $scope.model = SharedService;
}]);
angular.module('myApp').controller('SecondController',['$scope','SharedService',function($scope,SharedService){
    // $scope.model = {
    //     name : 'Munna Supari'
    // };
    $scope.model = SharedService;
}]);

//part 3
angular.module('myApp').controller('Parent',['$scope',function($scope){
    $scope.parentMessage = 'Hello from Parent';
}]);
angular.module('myApp').controller('FirstChild',['$scope',function($scope){
    $scope.firstMessage = 'Hello from First Child';
}]);
angular.module('myApp').controller('SecondChild',['$scope',function($scope){
    $scope.secondMessage = 'Hello from Second Child';
}]);
//part 3 Controller as Syntax
angular.module('myApp').controller('ParentCAS',[function(){
    this.message = 'Hello from Parent';
}]);
angular.module('myApp').controller('FirstChildCAS',[function(){
    this.message = 'Hello from First Child';
}]);
angular.module('myApp').controller('SecondChildCAS',['$interval','$scope',function($interval,$scope){
    this.message = 'Hello from Second Child';
    this.value = 1;
    $interval(function(){
        this.value = Math.round(Math.random()* 10000000) + 1;
    }.bind(this), 2000);
    $scope.$watch('second.value',function(newValue, oldValue){
        console.log('New :', newValue,'Old :', oldValue);
    });
=======
"use strict";

angular.module('myApp',[]);

//part2
angular.module('myApp').service('SharedService',function(){
    return{name: 'Bill Johnson'};
});
//part1
angular.module('myApp').controller('MainController',['$scope','$interval',function($scope,$interval){
    
}]);
    
//part1-2
angular.module('myApp').controller('ParentController',['$scope',function($scope){
    // $scope.name = 'Nathha Shikari';
    $scope.model = {
        name : 'Nathha Shikari'
    };
}]);

//part 1
angular.module('myApp').controller('ChildController',['$scope',function($scope){
    
}]);
angular.module('myApp').controller('indieController',['$scope',function($scope){
    $scope.model = {
        name : 'Michael Jaykison'
    };
}]);

//part 2
angular.module('myApp').controller('FirstController',['$scope','SharedService',function($scope,SharedService){
    // $scope.model = {
    //     name : 'Abish Mathew'
    // };
    $scope.model = SharedService;
}]);
angular.module('myApp').controller('SecondController',['$scope','SharedService',function($scope,SharedService){
    // $scope.model = {
    //     name : 'Munna Supari'
    // };
    $scope.model = SharedService;
}]);

//part 3
angular.module('myApp').controller('Parent',['$scope',function($scope){
    $scope.parentMessage = 'Hello from Parent';
}]);
angular.module('myApp').controller('FirstChild',['$scope',function($scope){
    $scope.firstMessage = 'Hello from First Child';
}]);
angular.module('myApp').controller('SecondChild',['$scope',function($scope){
    $scope.secondMessage = 'Hello from Second Child';
}]);
//part 3 Controller as Syntax
angular.module('myApp').controller('ParentCAS',[function(){
    this.message = 'Hello from Parent';
}]);
angular.module('myApp').controller('FirstChildCAS',[function(){
    this.message = 'Hello from First Child';
}]);
angular.module('myApp').controller('SecondChildCAS',['$interval','$scope',function($interval,$scope){
    this.message = 'Hello from Second Child';
    this.value = 1;
    $interval(function(){
        this.value = Math.round(Math.random()* 10000000) + 1;
    }.bind(this), 2000);
    $scope.$watch('second.value',function(newValue, oldValue){
        console.log('New :', newValue,'Old :', oldValue);
    });
>>>>>>> d9de8fdf651a9639272074a99a5c5076a6900d63
}]);