var firstController = app.controller('firstController', function ($scope) {
    $scope.firstName = 'Em';
    $scope.lastName = 'Gie';

    $scope.getFullName = function () {
     $scope.firstAndLastName = $scope.firstName + $scope.lastName;
    }
});