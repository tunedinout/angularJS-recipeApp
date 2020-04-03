angular.
    module('myangularJSApp').
    config(['$routeProvider',
        function ($routeProvider) {
            //add routes 
            $routeProvider.
            when('/', {
                template : '<landing-page></landing-page>'
            }).
            when('/login',{
                template: '<login></login>'
            });

        }])