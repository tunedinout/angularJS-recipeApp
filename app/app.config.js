angular.
    module('myangularJSApp').
    config(['$routeProvider',
        function ($routeProvider) {
            //add routes 
            $routeProvider.
            when('/', {
                template : '<login></login>'
            }).
            otherwise('/login');

        }])