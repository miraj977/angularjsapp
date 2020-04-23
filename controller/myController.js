myApp.controller('myController', [
    '$scope', '$http',

    function ($scope, $http) {
        $http.get('data/guys.json').success(function (data) {
            $scope.guys = data;
        });

        $scope.removex = function (x) {
            var removedx = $scope.guys.indexOf(x);
            $scope.guys.splice(removedx, 1);
        };

        $scope.addx = function () {
            $scope.guys.push({
                name: $scope.newx.name,
                belt: $scope.newx.belt,
                rate: parseInt($scope.newx.rate),
                available: true,
            });
            $scope.newx.name = "";
            $scope.newx.belt = "";
            $scope.newx.rate = "";
        };

        $scope.removeAll = function () {
            $scope.guys = [];
        }
    },
]);