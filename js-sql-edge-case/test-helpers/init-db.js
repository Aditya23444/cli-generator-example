
const initFeathersDb = require('./init-feathers-db');
const initSqlDb = require('./init-sql-db');

module.exports = function initDb (app) {
  return initFeathersDb(app)
    .then(() => {
      console.log('non-SQL DB initialized.');

      const executeSql = app.service('graphql').executeSql;
      if (!executeSql) return;

      return initSqlDb(app)
        .then(() => console.log('SQL DB initialized.'));
    })
};
