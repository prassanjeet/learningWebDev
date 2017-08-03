"use strict";

angular.module('myApp',[]);

angular.module('myApp').controller('MainController',[function(){
    this.user = {
        firstName: 'John',
        lastName: 'Dorian',
        accountType: 'CHECKING',
        balance: 1349.2
    };
}]);
