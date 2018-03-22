
/* eslint quotes: 0 */
// Defines Mongoose model for service `comments`. (Can be re-generated.)
const merge = require('lodash.merge');
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    uuid: {
      type: Number,
      required: true
    },
    authorUuid: {
      type: Number,
      required: true
    },
    postUuid: Number,
    body: String,
    archived: Number
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
