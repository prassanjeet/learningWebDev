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

// custom filters
angular.module('myApp').filter('capitalize',function(){

    return function(value){
        var result = null;
        var words = value.split(' ');
        words.forEach(function(item) {
            if(result){
                result += '.';
            }else{
                result = '';
            }
            result += item.substr(0,1).toUpperCase() + item.substr(1).toLowerCase();
        },);
        return result;
    };

});