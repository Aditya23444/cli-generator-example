
/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `user`. (Can be re-generated.)
const deepMerge = require('deepmerge');
//!code: imports //!end
//!code: init //!end

let moduleExports = deepMerge.all([{},
  //!<DEFAULT> code: model
  {
    bsonType: "object",
    required: [
      "uuid",
      "email",
      "firstName",
      "lastName"
    ],
    properties: {
      uuid: {
        bsonType: "int"
      },
      email: {
        bsonType: "string"
      },
      firstName: {
        bsonType: "string"
      },
      lastName: {
        bsonType: "string"
      }
    }
  },
  //!end
  //!code: moduleExports //!end
]);

//!code: exports //!end
module.exports = moduleExports;

//!code: funcs //!end
//!code: end //!end
