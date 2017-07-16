(function() {
    'use strict';

    /* jshint -W098 */

    function TestappController($scope, Global, Testapp, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'testapp'
        };

        $scope.checkCircle = function() {
            Testapp.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
        // $scope.QueryPress = function (page) {
        //     $state.go('testapp'+page, { key: $stateParams.key });
        // }
    }

    angular
        .module('mean.testapp')
        .controller('TestappController', TestappController);

    TestappController.$inject = ['$scope', 'Global', 'Testapp', '$stateParams'];

})();
