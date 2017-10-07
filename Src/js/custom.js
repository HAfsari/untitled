/// <reference path="angular.js" />
  var newmodel = angular
                        .module("newmodel",[])
                        .controller("newcont", function ($scope) {
                            var emp = {
                                fname : "King",
                                lname : "Khan",
                                genger : "Meal",
                                age : "30"
                            }
                            $scope.emp = emp;
                        })
                          .controller("image", function ($scope) {
                              var ima = {
                                  cname: "Bangladesh",
                                  city : "Dhaka",
                                  image : "Src/img/Bangladesh.jpg"
                              }
                              $scope.ima = ima;
                          })
                          .controller("emp", function ($scope) {
                              var  hremp = {
                                  hname : "",
                                  hlname : "",
                                  age : ""
                              }
                            $scope.hremp = hremp;

                                        }

      )
