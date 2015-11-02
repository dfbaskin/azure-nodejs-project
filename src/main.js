
import angular from 'angular';

import './appModule';
import './appComponent';

angular
    .element(document)
    .ready(() => angular.bootstrap(document, ['mainApp']));
