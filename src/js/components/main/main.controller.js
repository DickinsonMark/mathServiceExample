(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['mathService'];

  function mainController(mathService) {
    /*jshint validthis: true */
    this.calculate = (obj) => {
       this.result = mathService.calculate(obj);
    }
    this.greeting = 'Mini Calculator!';
  }

})();
