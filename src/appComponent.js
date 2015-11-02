
import angular from 'angular';

class AppComponent {
    constructor() {
        this.appStartTime = new Date();
    }
}

angular
    .module('mainApp')
    .directive('appComponent', [
        () => ({
            restrict: "E",
            templateUrl: "./appComponent.html",
            controller: [
                AppComponent
            ],
            controllerAs: 'vm',
            scope: {}
        })
    ]);
