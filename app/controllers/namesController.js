app.controller("namesController", function ($scope) {
    $scope.names = [
        {name:'Alice', country:'Poland'},
        {name:'Bob', country:'Spain'},
        {name:'Gregor', country:'Germany'}
    ];

    $scope.info = function (arg) {
        return arg.name + " " + arg.country;
    }
});