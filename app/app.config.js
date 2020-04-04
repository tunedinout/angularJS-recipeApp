angular.
    module('myangularJSApp').
    config(['$routeProvider',
        function ($routeProvider) {
            //add routes 
            $routeProvider.
                when('/login', {
                    template: '<login></login>'
                }).
                when('/', {
                    template: '<landing-page></landing-page>'
                });

        }])