app.controller("personController", function ($scope) {
    $scope.inputName = "John";
    $scope.inputLastName = 'Deer';

    $scope.fullName = function () {
        return $scope.inputName + " " + $scope.inputLastName;
    }
});