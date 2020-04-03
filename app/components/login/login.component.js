angular.
module('login').
component('login',{
    templateUrl: './components/login/login.template.html',
    controller: [
        '$route',
        '$rootScope',
        '$location',
        function LoginController(
                $route,
                $rootScope,
                $location
            ) {
        
        let original = $location.path;
        $location.path = function (path,reload) {
            if(!reload){
                let lastRoute = $route.current;
                    
            }
        }
        this.data = 'Login Component';
    }]

})