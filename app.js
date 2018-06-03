var App = angular.module('App', []);

App.controller('mainController', ['$scope', '$http',
    function($scope, $http) { 
        $scope.data = '';
        $scope.values = '';
        $scope.selectedRow = 0;
        $scope.activeRow = '';

        //Getting data from JSON file
        $http({
            type: 'GET',
            url: './data.json',
            dataType: 'json',
        }).then((d) => {
            $scope.data = d.data;
        });

        //click event for editing respected column
        $scope.editModal = (a) => {
            $('#editModal').modal({});
            $scope.values = a;
        }

        //toggle hidden row
        $scope.toggleHiddenRow = function(id){
            $scope.activeRow = id;
        };  

        //Initializes the datatables
        $(document).ready( function () {
            $('#table_id').DataTable();
        } );
    }
]);