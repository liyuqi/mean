(function() {
    'use strict';

    function Testapp($stateProvider) {
        $stateProvider.state('testapp example page', {
            url: '/testapp/example',
            templateUrl: 'testapp/views/index.html'
        }).state('testapp circles example', {
            url: '/testapp/example/:circle',
            templateUrl: 'testapp/views/example.html'
        // }).state('testapp1', {
        //     url: '/testapp/testapp1/:circle',
        //     templateUrl: 'testapp/views/example.html'
        // }).state('testapp2', {
        //     url: '/testapp/testapp2/:circle',
        //     templateUrl: 'testapp/views/example.html'
        // }).state('testapp3', {
        //     url: '/testapp/testapp3/:circle',
        //     templateUrl: 'testapp/views/example.html'
        // }).state('testapp panel1', {
        //     url: '/testapp/panel1',
        //     templateUrl: 'testapp/views/panel1.html',
            // controller: 'panel1',
            // resolve:{
            //     mongodata: function(data,$stateParams){
            //         return data.getData($stateParams);
            //     }
            // }
        });
    }

    // function TestappService($stateParams){
    //     this.getData = function($stateParams){
    //         var isData = storage.get($stateParams.key).searchOpt;
    //         return $http.post('/api/testapp/getdata',searchOpt)
    //         .then(function(result){
    //             console.log('data',result.data)
    //             return result.data;
    //         },function(err){
    //             alert('Error: '+ err.status+'\n'+err.statusText)
    //             return [];
    //         })
    //     }
    // }


    angular
        .module('mean.testapp')
        // .service(TestappService)
        .config(Testapp);

    Testapp.$inject = ['$stateProvider'];
    // TestappService.$inject = ['$stateParams'];

})();
