angular.
    module('myangularJSApp').
    config(['$routeProvider',
        function ($routeProvider) {
            //add routes 
            $routeProvider.
            when('/', {
                template : '<view-sample></view-sample>'
            })

        }])