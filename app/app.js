var app =angular.module('myApp',["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/red", {
        templateUrl : "views/red/red.html",
        controller:  "redController"
        }
    ).when("/",{
        templateUrl: "views/main/main.html",
        controller: "mainController"
    })
})

