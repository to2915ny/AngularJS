# AngularJS

Let's Learn AngularJS!

AngularJS extends HTML with ng-directives

_Example_

_ng-app_ : 애플리케이션에 대한 정의  
_ng-model_ : HTML안에서 일어나는 input,select,textarea등의 컨트롤들의 value들을 저장해준다.  
_ng-bind_ : _ng-model_ 값을 html상에 출력해준다.  

```
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

<div ng-app="">
  <p>Name: <input type="text" ng-model="name"></p>
  <p ng-bind="name"></p>
</div>

</body>
</html>
```
위 예를 보면 angularjs module을 쓰고, __text__ 박스에 입력되값을 ___ng-model___ "name" 이라는 변수안에 넣었다. ***ng-bind*** 를 쓰면 입력된값이 출력이된다. 모든 ng-directive들이 태그안에서 써지는것을 알수있다. tag 밖에 ng-bind를 쓸려면 __{{name}}__ 이런식으로 사용할수있다.

___ng-init___ 을 쓰면 변수를 초기설정할수있다.

```
<p ng-init="firstname='john'">Hello {{firstname}} </p>
```
<hr/>
## Expression

전에 봤던 ___{{}}___ 이걸 생각해보자.  
_JavaScript Expression_ 과 비슷한성질을 가지고있다.  
 ```
 {{ 5 + 5 }}
 ```
 10을 출력한다.

 ```
 {{firstname + " " + lastname}}
 ```
 firstname 변수와 lastname 변수사이에 whitespace를 넣어준다.

### Objects

```
<div ng-app="" ng-init="person={firstName:'John',lastName:'Doe'}">

<p>The name is {{ person.lastName }}</p>

</div>
=====================================OR=========================================

<div ng-app="" ng-init="person={firstName:'John',lastName:'Doe'}">

<p>The name is <span ng-bind="person.lastName"></span></p>

</div>
```
### Array

```
<div ng-app="" ng-init="points=[1,15,19,2,40]">

<p>The third result is {{ points[2] }}</p>

</div>
```


## ng-controller

AngularJs의 ***module*** 은 애플리케이션을 정의한다.
Angularjs의 ***controller*** 는 애플리케이션의 콘트롤들을 정의한다.  

***ng-app*** 은 애플리케이션을 정의해주고 ***ng-controller*** 는 애플리케이션의 콘트롤들을 정의한다.  

```
<div ng-app="myApp" ng-controller="myCtrl">

First Name: <input type="text" ng-model="firstName"><br>
Last Name: <input type="text" ng-model="lastName"><br>
<br>
Full Name: {{firstName + " " + lastName}}

</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});
</script>
```

위에 div 태그안에 ng-app 은 myApp ng-controller는 myCtrl로 정의되어있다. firstName과 lastName
