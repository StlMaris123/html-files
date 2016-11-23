// var _ = require('lodash');

var numbers = [1, 2, 3];

var result = _(numbers).map(function (val) {
                    return val + 1;

          })
          .filter(function (val) {
                    return val > 2;

          })
          .map(function (val) {
                     return val * val;

          })
          .value();

      console.log(result);
