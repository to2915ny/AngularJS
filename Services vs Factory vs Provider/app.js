var application = angular.module('mainApp',[]);

application.service('fromService',function(){
  this.message = "This is from Service!";
  //return아 필요없다.
});

application.factory('fromFactory',function(){
  var factory = {}; //factory는 object를 만들어줘야된다.
  factory.message = "This is from factory!";
  return factory; //factory는 return을 해줘야된다.
});

application.provider('fromProvider',function(){
  var m1 = 'This is from provider';
  return{
    $get: function(){
      return{
        message: m1
      }
    }
  }

});

application.controller('myCtrl',function($scope,fromService,fromFactory,fromProvider){
  $scope.Message=[fromService.message,fromFactory.message,fromProvider.message];
});
