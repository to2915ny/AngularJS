function timerCtrl($scope,$interval){
  $scope.seconds = 0; //initialize scope.second to zero
  $interval(function(){
  $scope.seconds = $scope.seconds + 1; //increment scope.seconds
  },1000);

}
