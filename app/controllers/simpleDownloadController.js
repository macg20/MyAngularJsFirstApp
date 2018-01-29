app.controller('simpleDownloadController',function ($scope, $http) {

    $scope.fetch = function () {
        $scope.status =null;
        $http.get('https://www.w3schools.com/angular/customers.php')
            .then(function (response) {
                //onSuccesCallback
                alert('Success ' + response.data.records[0].Name );
                $scope.status = response.status;
            },function (response) {
                //    onErrorCallback
                alert('Request Failed');
                $scope.status =response.status
            });
    }


});