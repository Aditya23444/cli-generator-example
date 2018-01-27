
// Initializes the `user` service on path `/user`. (Can be re-generated.)
const createService = require('feathers-nedb');
const createModel = require('../../models/user.model');
const hooks = require('./user.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'user',
    Model,
    paginate,
    //!code: options_more
    id: 'uuid',
    //!end
  };

  // Initialize our service with any options it requires
  app.use('/user', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('user');

  service.hooks(hooks);
};
