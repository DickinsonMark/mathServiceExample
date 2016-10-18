(function() {
  'use strict';

  angular
    .module('math', [])
    .service('mathService', [MathService])


    function MathService() {

      this.opMap = {
        add : '+',
        subtract : '-',
        multiply : '*',
        divide : '/'
      }

      this.calculate = (math) => {
        let op = this.opMap[math.operation];
        let firstNum = +math.firstNum;
        let secondNum = +math.secondNum;
        return math.operation === 'power' ?
          Math.pow(firstNum,secondNum) :
          eval(`${firstNum}${op}${secondNum}`)
      }
    }

}());
