angular.
module('login').
component('login',{
    templateUrl: './components/login/login.template.html',
    controller: function LoginController() {
        this.data = 'Login Component';
    }

})