app.controller('locationCotroller', function ($scope, $location) {
    $scope.myUrl = $location.absUrl();;
})