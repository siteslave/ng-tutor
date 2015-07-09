// Controller
angular.module('app.controller.MainCtrl', [])
    .controller('MainCtrl', function ($scope, MainServ) {
        $scope.name = MainServ.getName();
    });