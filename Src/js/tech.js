/// <reference path="angular.js" />

var tech = angular
    .module("techmodel",[])
    .controller("techcont",function($scope){
        var techv = [
            {name : "C++", Like : 0, DisLike : 0},
            {name : "JAVA", Like : 0, DisLike : 0},
            {name : "Angular", Like : 0, DisLike : 0},
            {name : "PL/sql", Like : 0, DisLike : 0}
        ];
        $scope.techv = techv;

        $scope.increment = function(tech){
            tech.Like++;
        };
$scope.dislike = function (tech) {
    tech.DisLike++;
}



    });
