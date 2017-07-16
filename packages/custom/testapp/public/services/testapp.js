(function() {
    'use strict';

    function Testapp($http, $q) {
        return {
            name: 'testapp',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/testapp/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.testapp')
        .factory('Testapp', Testapp);

    Testapp.$inject = ['$http', '$q'];

})();
