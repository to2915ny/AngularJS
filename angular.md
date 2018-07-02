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
위 예를 보면 angularjs module을 쓰고, __text__ 박스에 입력되값을 _ng-model_ "name" 이라는 변수안에 넣었다. _ng-bind_ 를 쓰면 입력된값이 출력이된다. 모든 ng-directive들이 태그안에서 써지는것을 알수있다. tag 밖에 ng-bind를 쓸려면 __{{name}}__ 이런식으로 사용할수있다.

_ng-init_ 을 쓰면 변수를 초기설정할수있다.

```
<p ng-init="firstname='john'">Hello {{firstname}} </p>
```
