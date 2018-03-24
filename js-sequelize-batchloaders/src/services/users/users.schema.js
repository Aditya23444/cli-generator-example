
// Define the Feathers schema for service `users`. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
  // !<DEFAULT> code: schema_header
  title: 'Users',
  description: 'Users database.',
  // !end
  // !code: schema_definitions // !end

  // Required fields.
  required: [
    // !code: schema_required
    'uuid',
    'email',
    'firstName',
    'lastName'
    // !end
  ],
  // Fields with unique values.
  uniqueItemProperties: [
    // !code: schema_unique // !end
  ],

  // Fields in the model.
  properties: {
    // !code: schema_properties
    id: { type: 'ID' },
    uuid: { type: 'integer' },
    email: {},
    firstName: {},
    lastName: {},
    password: {},
    // !end
  },
  // !code: schema_more // !end
};

// Define optional, non-JSON-schema extensions.
let extensions = {
  // GraphQL generation.
  graphql: {
    // !code: graphql_header
    name: 'User',
    service: {
      sort: { uuid: 1 },
    },
    // !end
    discard: [
      // !code: graphql_discard // !end
    ],
    add: {
      // !code: graphql_add
      comments:    { type: '[Comment!]',      args: false, relation: { ourTable: 'uuid', otherTable: 'authorUuid' } },
      followed_by: { type: '[Relationship!]', args: false, relation: { ourTable: 'uuid', otherTable: 'followeeUuid' } },
      following:   { type: '[Relationship!]', args: false, relation: { ourTable: 'uuid', otherTable: 'followerUuid' } },
      fullName:    { type: 'String!',         args: false },
      likes:       { type: '[Like!]',         args: false, relation: { ourTable: 'uuid', otherTable: 'authorUuid' } },
      posts:       { type: '[Post!]'                     , relation: { ourTable: 'uuid', otherTable: 'authorUuid' } },
      // !end
    },
    // !code: graphql_more // !end
  },
};

// !code: more // !end

let moduleExports = {
  schema,
  extensions,
  // !code: moduleExports // !end
};

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
