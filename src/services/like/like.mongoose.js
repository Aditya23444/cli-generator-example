
/* eslint quotes: 0 */
// Defines Mongoose model for service `like`. (Can be re-generated.)
const deepMerge = require('deepmerge');
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
//!code: imports //!end
//!code: init //!end

let moduleExports = deepMerge.all([{},
  //!<DEFAULT> code: model
  {
    uuid: Number,
    authorUuid: Number,
    commentUuid: Number
  },
  //!end
  //!code: moduleExports //!end
]);

//!code: exports //!end
module.exports = moduleExports;

//!code: funcs //!end
//!code: end //!end
