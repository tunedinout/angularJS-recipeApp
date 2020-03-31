angular.
module('viewSample').
component('viewSample',{
    templateUrl: './components/view/view.template.html',
    controller: function ViewController() {
        this.data  = 'Hello World!!!';
    }
});
