/// <reference path="angular.js" />

var mylist = angular
                    .module("listmodel",[])
                    .controller("listcont", function ($scope) {
                        var emplist = [
                            { fname : "Hejbullah" , lname : "Afsari", age : 30},
                            { fname : "Kamrul" , lname : "Hasan", age : 25},
                            { fname : "Ahsan" , lname : "Habib", age : 30},
                            { fname : "Abdush" , lname : "Shahid", age :70}
                        ];
                        $scope.emplist = emplist;
                    })
                    .controller("ctech", function ($scope) {
                        var vtech = [
                            {name :"C++", Like : 0, Dislikes :0 },
                            {name :"C+", Like : 0, Dislikes :0 },
                            {name :"Java", Like : 0, Dislikes :0 },
                            {name :"Pl/sql", Like : 0, Dislikes :0 },
                            {name :"Angular", Like : 0, Dislikes :0 }
                        ];
                        $scope.vtech = vtech;

                        $scope.incrementLikes = function (vtech) {
                            vtech.Like++;
                        }
                        $scope.incrementDislikes = function (vtech) {
                            vtech.Dislikes++;
                        }
                      }
)
