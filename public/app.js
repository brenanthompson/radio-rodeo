var app = angular.module("radioRodeo", []);

app.controller("podCtrl",["$scope", "$http", function($scope, $http){

    $scope.query = function(input){
        $http.get("?q=" + input)
            .then(function(response){
                console.log(response.data)
            })

    };

}]);
